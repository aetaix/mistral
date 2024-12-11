import React, { useState } from "react";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full  text-white">
      {items.map((item, index) => (
        <div key={index} className="border-b border-neutral-800 mb-4">
          <button
            onClick={() => toggleItem(index)}
            className="flex justify-between items-center w-full py-2 text-left font-medium focus:outline-none"
          >
            <span className="text-2xl">{item.title}</span>
            <svg
              className={`w-5 h-5 transform transition-transform ${
                activeIndex === index ? "rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {activeIndex === index && (
            <div className="py-4 text-neutral-200">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
