import { lazy, useState } from "react";
import SectionTitle from "@components/SectionTitle";
import AnimatedWrapper from "./AnimatedWrapper";
const FAQItem = lazy(() => import("@components/FAQItem"));

const FAQs = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState("");
  const toggleFAQ = (i) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  const mid = Math.ceil((data.faqs?.items.length || 0) / 2);
  const firstCol = data.faqs?.items.slice(0, mid);
  const secondCol = data.faqs?.items.slice(mid);

  return (
    <div className="section_y_padding">
      <div className="app_container">
        <AnimatedWrapper>
          <SectionTitle text={data.faqs?.title} />
        </AnimatedWrapper>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 flex flex-col gap-4">
            {firstCol?.map((faq, i) => (
              <FAQItem
                toggleFAQ={toggleFAQ}
                activeIndex={activeIndex}
                faq={faq}
                i={i}
                key={i}
              />
            ))}
          </div>
          <div className="flex-1 flex flex-col gap-4">
            {secondCol?.map((faq, i) => (
              <FAQItem
                toggleFAQ={toggleFAQ}
                activeIndex={activeIndex}
                faq={faq}
                i={i + mid}
                key={i + mid}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
