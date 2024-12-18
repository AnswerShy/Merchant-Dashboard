import React from "react";

interface SignupProgressProps {
  steps: string[];
  currentStep: number;
  isShopifyConnected: boolean;
  ifFormFull: boolean;
  handlePrevStep: () => void;
}

const stepStatus = (status: string, index: number, isLast: boolean = false) => {
  console.log(isLast);
  if (status == "filled" || status == "completed") {
    return (
      <div className="flex justify-start items-start w-min flex-grow-0 flex-shrink-0 relative gap-2.5 p-2 rounded-3xl">
        <svg
          key={index}
          width={34}
          height={34}
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 relative"
          preserveAspectRatio="xMidYMid meet"
        >
          {status == "filled" ? (
            <circle
              cx={17}
              cy={17}
              r={16}
              stroke={status == "filled" ? "#32ABF2" : "#5D7FA3"}
              stroke-width={2}
            />
          ) : (
            <></>
          )}
          <circle
            cx={17}
            cy={17}
            r={14}
            fill={status == "filled" ? "#32ABF2" : "#5D7FA3"}
            stroke-width={2}
          />
          <path
            className="translate-y-1/4 translate-x-1/4"
            d="M13.3332 4L5.99984 11.3333L2.6665 8"
            stroke="white"
            stroke-width={2}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <svg
          width={2}
          height={48}
          viewBox="0 0 2 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute ml-[15.5px] translate-y-[70%]"
          preserveAspectRatio="none"
        >
          <path d="M1 0L1 48" stroke={status == "filled" ? "#32ABF2" : "#5D7FA3"} stroke-width={2} />
        </svg>
      </div>
    );
  } else if (status == "empty") {
    return (
      <>
        <div className="flex justify-start items-start w-min flex-grow-0 flex-shrink-0 relative gap-2.5 p-2 rounded-3xl">
          <svg
            key={index}
            width={34}
            height={34}
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0"
            preserveAspectRatio="xMidYMid meet"
          >
            <circle cx={17} cy={17} r={16} stroke="#5D7FA3" stroke-width={2} />
          </svg>
          {isLast ? (
            <></>
          ) : (
            <svg
              width={2}
              height={48}
              viewBox="0 0 2 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute ml-[15.5px] translate-y-[70%]"
              preserveAspectRatio="none"
            >
              <path d="M1 0L1 48" stroke="#5D7FA3" stroke-width={2} />
            </svg>
          )}
        </div>
      </>
    );
  } else if (status == "filling") {
    return (
      <div className="flex justify-start items-start w-min flex-grow-0 flex-shrink-0 relative gap-2.5 p-2 rounded-3xl">
        <svg
          key={index}
          width={34}
          height={34}
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0"
          preserveAspectRatio="xMidYMid meet"
        >
          <circle cx={17} cy={17} r={16} stroke="#32ABF2" stroke-width={2} />
        </svg>
        <svg
          width={2}
          height={48}
          viewBox="0 0 2 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute ml-[15.5px] translate-y-[70%]"
          preserveAspectRatio="none"
        >
          <path d="M1 0L1 48" stroke="#5D7FA3" stroke-width={2} />
        </svg>
      </div>
    );
  }
};

const SignupProgress: React.FC<SignupProgressProps> = ({
  steps,
  currentStep,
  isShopifyConnected,
  ifFormFull,
  handlePrevStep
}) => {
  console.log(steps.length);
  return (
    <>
      <div className="flex flex-col space-y-4 w-9/12 xl:hidden">
        <div className="flex-grow-0 flex-shrink-0 h-8 relative">
          <div className="flex justify-center items-start absolute left-0 top-0 gap-0.5">
            <img src="/chadLogo.svg" />
            <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-[#20496c]">
              Chad
            </p>
          </div>
        </div>
        <p className="self-stretch flex-grow-0 flex-shrink-0 w-full text-xs text-left text-[#4f637d]">
          step {currentStep + 1} of {steps.length}
        </p>
        <progress
          className="w-full h-2 rounded border border-[#c9d3e0]"
          max={100}
          value={(100 / steps.length) * (currentStep + 1)}
        ></progress>
      </div>

      <div className="flex-col mt-[200px] w-[364px] h-[353px] hidden xl:flex">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-row items-center text-white mb-[32px]"
          >
            {index < currentStep
              ? stepStatus("filled", index)
              : index === currentStep && ifFormFull
              ? stepStatus("filled", index)
              : index === currentStep
              ? stepStatus("filling", index)
              : index === 1 && isShopifyConnected
              ? stepStatus("completed", index)
              : index === steps.length - 1
              ? stepStatus("empty", index, true)
              : stepStatus("empty", index)}
            <span className={`w-max text-[16px] ${index <= currentStep ? "text-white" : "text-[#5d7fa3]"}`}>{step}</span>
          </div>
        ))}
        <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-[198px]">
          {/* Back Button */}
          <div 
            onClick={handlePrevStep}
            className="button-form active-progress-button">
            <svg
              width={16}
              height={17}
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
              preserveAspectRatio="none"
            >
              <path
                d="M10 12.5L6 8.5L10 4.5"
                stroke="#93A8C1"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#93a8c1]">
              Back
            </p>
          </div>
          {/* Next Button */}
          <div className="button-form active-progress-button">
            <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#93a8c1]">
              Next
            </p>
            <svg
              width={16}
              height={17}
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
              preserveAspectRatio="none"
            >
              <path
                d="M6 12.5L10 8.5L6 4.5"
                stroke="#93A8C1"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupProgress;