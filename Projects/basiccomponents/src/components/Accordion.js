import { useState } from 'react';
import { BsFillArrowDownSquareFill, BsFillArrowUpSquareFill } from "react-icons/bs";
function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex; // item kai har object kai index kpo check karo kai woh tru hai 
    /// pehle wale case mai 0===0 hooga or true hooga isExpanded mai 
    return (
      <div key={item.id} className="bg-gray-600  text-white font-medium sm:text-lg md:text-2xl border">
        <div className="flex gap-2 justify-between bg-slate-500 ">

          <div className=''>{item.label}</div>
          <span className="align-middle mt-1" onClick={() => setExpandedIndex(index)}>{isExpanded ? <BsFillArrowDownSquareFill /> : <BsFillArrowUpSquareFill />}</span>
        </div>
        {/* pehle wale case mai is Expanded true hooga tu last true value degha*/}
        {isExpanded && <div>{item.content}</div>}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
}

export default Accordion;
