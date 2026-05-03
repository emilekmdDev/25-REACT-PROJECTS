import { useEffect, useState } from "react"


export default function ScrollIndicator({url}){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [scrollPercentage, setScrollPercentage] = useState(0);

    async function fetchData(getUrl) {
        try {
             setLoading(true);
             const response = await fetch(url);
             const data = await response.json();
             console.log(data);
             
            if (data && data.products.length>0) {
                setData(data.products)
                setLoading(false)
            }
        } catch (error) {
            console.log(error);
            setErrorMessage(error.message)
        }
    }

    function handleScroolPercentage() {
        // console.log(document.body.scrollTop, 
        //     document.documentElement.scrollTop, 
        //     document.documentElement.scrollHeight, 
        //     document.documentElement.clientHeight
        // );
        
        
        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const percentage = (howMuchScrolled / height) * 100;
        setScrollPercentage(percentage);

        console.log(percentage);
    }

    useEffect(()=>{
        fetchData(url);
    },[url])

    useEffect(()=>{
        window.addEventListener('scroll', handleScroolPercentage)
        return ()=>{
            window.removeEventListener('scroll',()=>{})
        }
    },[])

    if (loading) {
        return <div>
            loading data please wait
        </div>
    }

    if (errorMessage) {
        return <div>
            Error ! {errorMessage}
        </div>
    }

    return (
    <div>
        <div className="fixed w-full bg-white">
            <p>Custom scroll indicator</p>
            <div className="relative w-full h-2">
                <div className="absolute top-0 left-0 w-full h-full bg-amber-200"></div>
                <div
                className="absolute top-0 left-0 h-full bg-amber-600"
                style={{ width: `${scrollPercentage}%` }}
                ></div>
            </div>
        </div>
    
        <div className="pt-8">
            {
                data && data.length>0 ?
                data.map((item,index)=>{
                    return <div key={index}>{item.title}</div>
                }
                ):<></>
            }
        </div>
    </div>
  )
}
