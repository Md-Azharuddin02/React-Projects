import { useContext } from "react";
import { AccordionContext } from "./store/SelectContext";

function Header() {
   const {handleOnClick}= useContext(AccordionContext)
  return (
    <>
      <div className="w-full flex flex-row justify-between px-8 items-center my-8">
        <h3 className="text-white text-2xl">Accordion</h3>
        <button className="p-1 border rounded w-40 bg-[#563daf] text-white" onClick={handleOnClick}>
          Select
        </button>
      </div>
    </>
  );
}
export default Header;
