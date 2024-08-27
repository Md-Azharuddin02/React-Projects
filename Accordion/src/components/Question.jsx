import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";

function Question({ item,HandleAnswerVisibility }) {

  return (
    <>
      <div className="w-full flex flex-row justify-between items-center my-4 bg-slate-500 py-4 ">
        <div className="w-90 gap-4 flex flex-row items-center">
          <span className="px-2">{item.id}</span>
          <p className="">{item.question}</p>
        </div>
        <div className="w-10">
          <IoMdAddCircle className="text-3xl text-white cursor-pointer" onClick={()=>HandleAnswerVisibility(item.id)} />
        </div>
      </div>
    </>
  );
}
export default Question;