import { createContext, useState } from "react";


export const AccordionContext = createContext();


export const AccordionContextProvider=({children})=>{
    const [multiple, setMultiple] = useState(false)
    const handleOnClick=()=>{
        multiple ===false? setMultiple(true) : setMultiple(false)
    }
    console.log(multiple)
    return(
        <AccordionContext.Provider
        value={{
            handleOnClick,
        }}
        >
        {children}
        </AccordionContext.Provider>
    )
}