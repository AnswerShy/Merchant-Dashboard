import React from "react"

interface SignupProgressProps {
    steps: string[],
    currentStep: number,
    isShopifyConnected: boolean,
    ifFormFull: boolean
}

const stepStatus = (status: string, index: number) => {
  if(status == "filled" || status == "completed") {
    return (
      <div className="flex justify-start items-start w-min flex-grow-0 flex-shrink-0 relative gap-2.5 p-2 rounded-3xl ">
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
            {status == "filled" ? (<circle cx={17} cy={17} r={16} stroke={status == "filled" ? "#32ABF2" : "#5D7FA3"} stroke-width={2} />) : (<></>)}
            <circle cx={17} cy={17} r={14} fill={status == "filled" ? "#32ABF2" : "#5D7FA3"} stroke-width={2} />
            <path
              className="translate-y-1/4 translate-x-1/4"
              d="M13.3332 4L5.99984 11.3333L2.6665 8"
              stroke="white"
              stroke-width={2}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
      </div>
    )
  }
  else if (status == "empty") {
    return (
      <div className="flex justify-start items-start w-min flex-grow-0 flex-shrink-0 relative gap-2.5 p-2 rounded-3xl ">
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
      </div>
    )
  }
  else if(status == "filling") {
    return (
      <div className="flex justify-start items-start w-min flex-grow-0 flex-shrink-0 relative gap-2.5 p-2 rounded-3xl ">
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
      </div>
    )
  }
}

const SignupProgress: React.FC<SignupProgressProps> = ({ steps, currentStep, isShopifyConnected, ifFormFull }) => {
  return (
    <div className="flex flex-col space-y-4">
      {
        steps.map((step, index) => 
        ( 
         <div key={index} className="flex flex-row items-center text-white"> 
            {
              index < currentStep ? stepStatus("filled", index)
              : index === currentStep && ifFormFull 
              ? stepStatus("filled", index)
              : index === currentStep 
              ? stepStatus("filling", index)
              : index === 1 && isShopifyConnected 
              ? stepStatus("completed", index)
              : stepStatus("empty", index)
            }
            <span className="w-max">{step}</span> 
         </div>
        ))
      }
    </div>  
  )
}

export default SignupProgress
