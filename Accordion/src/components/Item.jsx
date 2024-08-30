import Question from './Question'
import Answer from './Answer'
import { useContext } from 'react'
import { AccordionContext } from './store/SelectContext'
function Item({item}){
  const {currentId, itemArray}= useContext(AccordionContext)
    return(<>
    <div className="flex flex-col border p-2 my-2">
            <Question item={item}/>
            {currentId === item.id || itemArray.includes(item.id) ? <Answer item={item} /> : null}
          </div>
    </>)
}
export default Item