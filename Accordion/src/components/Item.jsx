import Question from './Question'
import Answer from './Answer'
import { useState } from 'react'
function Item({item}){
  const [showAnswer, setShowAnswer]= useState(false)
  const HandleAnswerVisibility=(id)=>{
    showAnswer === false ? setShowAnswer(true) : setShowAnswer(false)
  }
    return(<>
    <div className="flex flex-col border p-2 my-2">
            <Question item={item} HandleAnswerVisibility={HandleAnswerVisibility}/>
            {showAnswer === true &&  <Answer item={item} />}
          </div>
    </>)
}
export default Item