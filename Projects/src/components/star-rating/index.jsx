import { useState } from 'react'
import {FaStar} from 'react-icons/fa'

export default function StarRating({noOfStars = 5}) {

    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    function handleClick(getCurrentIndex) {
        setRating(getCurrentIndex)
    }

    function handleMouseEnter(getCurrentIndex) {
        setHover(getCurrentIndex)
        
    }

    function handleMouseLeave() {
        setHover(rating)
    }

    return <div className="start-rating flex">
        {
            [...Array(noOfStars)].map((item, index)=>{
                index += 1
                return <FaStar className={index<=rating || index<=hover?'text-amber-300':''}
                    key={index}
                    onClick={()=>handleClick(index)}
                    onMouseMove={()=>handleMouseEnter(index)}
                    onMouseLeave={()=>handleMouseLeave()}
                    size={40}
                />
            })
        }
    </div>
}