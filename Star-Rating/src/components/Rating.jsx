import { useState } from "react";
import { FaStar } from "react-icons/fa";
import '../App'



const Rating = ({ stars }) => {
    const [rating, setRating]= useState(0)
    const [hover, setHover] = useState(0)

    const handleOnClick = (index) => {
      setRating(index)

    }
    const handOnMove = (index) => {
        setHover(index)
     }
    const handleOnLeave = () => { 
        setHover(rating)
    }
    return (<>
        <div className="star-rating">{
            [...Array(stars)].map((_, index) => {
                index += 1
                return (
                    <FaStar
                        key={index}
                        className={index <= (hover || rating) ? 'active' : 'inActive'}
                        onClick={() => handleOnClick(index)}
                        onMouseMove={()=>handOnMove(index)}
                        onMouseLeave={()=>handleOnLeave(index)}
                        size={40} />)

            })

        }

        </div>

    </>)
}
export default Rating