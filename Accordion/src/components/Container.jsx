import Header from "./Header";
import Item from "./Item";
import {questions} from "./resources";

function Container({ children }) {
  return (
    <>
      <div className="w-full h-100 flex flex-col bg-[#2c7291] p-2">
        <Header/>
        <div className="w-full p-4 text-white">
          {questions.map((item, index) => <Item key={index} item={item}/>)}
        </div>
      </div>
    </>
  );
}
export default Container;
