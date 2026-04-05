import { useEffect, useState } from "react"
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'
export default function ImageSlider({url, limit=5, page=1}){
    
    const [images, setImages] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [errorMessage,setErrorMessage] = useState(null)
    const [loading, setLoading] = useState(false)

    async function fetchImages(getUrl) {
        try {
            setLoading(true)
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            
            const data = await response.json();
            if (data) {
                setImages(data)
                setLoading(false)
            }
        } catch (error) {
            setErrorMessage(error);
        } finally {
        setLoading(false);
        }
    }

    function handleNext() { 
        setCurrentSlide(currentSlide>=images.length-1?0:currentSlide+1)
    }

    function handlePrevious() {
        setCurrentSlide(currentSlide<=0?images.length-1:currentSlide-1)
    }
    useEffect(()=>{
        if (url!=="") {
            fetchImages(url)
        }
    },[url])

    useEffect(() => {
        console.log(images);
    }, [images]);
    
    if (loading) {
        return <div>Loading data ! Please wait</div> 
    }

    if (errorMessage !== null) {
        return <div>erro occured ! {errorMessage}</div> 
    }
    return <div className=" flex relative items-center justify-center">
        <BsArrowLeftCircleFill className="text-white opacity-80  w-8 h-8 relative left-10" onClick={handlePrevious}/>
        <div className="flex">
            {images && images.length ? images.map((image,index)=>(
                <img className={`rounded-2xl w-150  h-110 ${currentSlide===index?'block':'hidden'}`}
                src={image.download_url} 
                key={image.id}
                alt={image.download_url}
                />
            )):''}
        </div>
        <BsArrowRightCircleFill className="text-white opacity-80  w-8 h-8 relative right-10" onClick={handleNext}/>
        <span className="flex gap-1 absolute bottom-5">
            {images && images.length ? images.map((_,index)=>(
                <button key={index} className={`w-4 h-4 rounded-full ${index===currentSlide?'bg-white':'bg-white opacity-20'}`}></button>
            )): ""}
        </span>
    </div>
}