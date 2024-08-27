import Question from './Question'
import Answer from './Answer'
import { useContext, useState } from 'react'
import { AccordionContext } from './store/SelectContext'
function Item({item}){
const {HandleAnswerVisibility}= useContext(AccordionContext)
    return(<>
    <div className="flex flex-col border p-2 my-2">
            <Question item={item} HandleAnswerVisibility={HandleAnswerVisibility}/>
            {showAnswer === true &&  <Answer item={item} />}
          </div>
    </>)
}
export default Item