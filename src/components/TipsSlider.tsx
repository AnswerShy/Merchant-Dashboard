import { useState } from "react";
interface CardProps {
    text: string;
    amI: boolean;
}
const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const tips = [
    "Acquiring a new customer is 5x more costly than making an unhappy customer happy",
    "Customer retention is more cost-effective than customer acquisition",
    "A satisfied customer is likely to tell at least 9 other people about their experience",
    "Improving customer experience can increase revenue by up to 15%",
    "Loyal customers are worth up to 10 times as much as their first purchase",
  ];

  const Card = ({ text, amI }: CardProps) => {
    return (
      <div className={`flex justify-start items-center flex-grow-0 flex-shrink-0 w-[364px] relative gap-4 p-4 rounded-lg bg-[#134267] ${amI ? "block" : "hidden"}`}>
        <p className="flex-grow-0 flex-shrink-0 text-[32px] font-bold text-left text-[#96caf7]">5X</p>
        <p className="flex-grow w-[275px] text-sm text-left text-[#96caf7]">
            {text}
        </p>
      </div>
    );
  };

  return (
    <div className="mt-[200px] flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 gap-4 hidden xl:flex">
      <div className="relative w-full h-full">
        {tips.map((tip, index) => (
          <Card key={index} text={tip} amI={index == activeSlide} />
        ))}
      </div>

      <span className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3">
        {tips.map((_, index) => (
          <svg
            key={index}
            onClick={() => setActiveSlide(index)}
            className="indicator flex-grow-0 flex-shrink-0 cursor-pointer"
            width={8}
            height={8}
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <circle
              cx={4}
              cy={4}
              r={4}
              fill={activeSlide === index ? "#96CAF7" : "#134267"}
            />
          </svg>
        ))}
      </span>
    </div>
  );
};

export default Slider;