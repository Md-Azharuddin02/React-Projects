import { createContext, useState } from "react";

export const AccordionContext = createContext({
  handleOnClick: () => {},
  handleCurrentItem: () => {},
});

export const AccordionContextProvider = ({ children }) => {
  const [status, setStatus] = useState("Single");
  const [currentId, setCurrentId] = useState(null);
  const [itemArray, setItem] = useState([]);

  const handleOnClick = () => {
    status === "Single" ? setStatus("Multiple") : setStatus("Single");
  };

  const handleCurrentItem = (id) => {
    setCurrentId(id);
  };

  const handleMultipleSelection = (id) => {
      let copyItem = [...itemArray];
      const isInclude = copyItem.indexOf(id);
      if (isInclude === -1) copyItem.push(id);
      else copyItem.splice(isInclude, 1);
      setItem(copyItem);
  };
  console.log(itemArray)

  return (
    <AccordionContext.Provider
      value={{
        handleOnClick,
        handleCurrentItem,
        currentId,
        handleMultipleSelection,
        status,
        itemArray,
      }}
    >
      {children}
    </AccordionContext.Provider>
  );
};
