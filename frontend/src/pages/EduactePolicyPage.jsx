import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";
import AiModel from "../components/AiModel";
import { FAQs } from "../Data/Data.jsx";
import { useState, useRef } from "react";

const EduactePolicyPage = () => {
  const faqData = FAQs;
  const [openIndex, setOpenIndex] = useState(null);

  // References for each FAQ on the right side
  const faqRefs = useRef([]);

  // Toggle the dropdown and scroll to the corresponding FAQ on the right side
  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);

    // Scroll to the selected FAQ on the right side
    if (faqRefs.current[index]) {
      faqRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="text-white">
      <Navbar />

      <div className="w-screen flex">

        {/* Left side (FAQ List) */}

        <div className="w-[25%] bg-gray-800 h-screen overflow-y-auto">
          <div className="flex items-center justify-center pt-4 pb-2 text-2xl">FAQs</div>

          <div>
            {faqData.map((faq, index) => (
              <div key={index} className="">
                <div className="pl-4 pt-2 pb-2 cursor-pointer text-gray-400" onClick={() => toggleDropdown(index)}>
                <span>
                    <span className="text-lg text-gray-400">{faq.id}. </span>{faq.ques}
                  </span>
                </div>
                <div className="h-[1px] w-[95%] ml-4 bg-gray-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side (FAQ Content) */}

        <div className="w-[75%] bg-gray-950 h-screen overflow-y-auto pt-16">
          <div className="w-[80%] ml-[10%]">
            {faqData.map((faq, index) => (
              <div key={index} ref={(el) => (faqRefs.current[index] = el)} className="faq-item">
                <div className="pb-3 text-gray-300 text-xl">
                  <span>
                    <span className="text-xl">{faq.id}. </span>{faq.ques}
                  </span>
                </div>
                <div className="text-gray-400 pl-6">
                  <p>{faq.ans}</p>
                </div>
                <div className="h-[2px] w-[95%] my-5 ml-6 bg-gray-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AiModel />
      <Footer />
    </div>
  );
};

export default EduactePolicyPage;
