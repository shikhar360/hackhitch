"use client";
import React, { useState } from "react";

const FAQSection = () => {
  const faqData = [
    { question: "Is it Free?", answer: "Yes" },
    {
      question: "Will I able to connect with reputated Hackers ?",
      answer: "Yes",
    },
    { question: "Can we expect community support?", answer: "Yes" },
    {
      question: "Any prerequsite ?",
      answer:
        "A metamask , wallectConnect or any hot or cold wallet is required",
    },
    { question: "Will I get paid for using this ?", answer: "Indirectly Yes" },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className={`min-h-[70vh] flex flex-col items-center justify-center`}>
      <p className="text-4xl text-white w-full text-center pt-10 pb-20">FAQ</p>
      <div className=" mx-auto bg-stone-800 text-white w-[40%]  overflow-hidden py-4 rounded-xl   ">
        {faqData.map((item, index) => (
          <div key={index} className="   select-none py-2 px-4 ">
            <div
              className="cursor-pointer flex justify-between"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="text-lg font-semibold  ">{item.question}</h3>
              {activeIndex === index ? (
                <span>&#8679;</span>
              ) : (
                <span>&#8681;</span>
              )}
            </div>
            {activeIndex === index && <p className="my-2 ">{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
  