import React from "react"

interface LoginProgressProps {
    steps: string[],
    currentStep: number,
}

const LoginProgress: React.FC<LoginProgressProps> = ({ steps, currentStep }) => {
  return (
    <div className="flex flex-col space-y-4">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`flex ${
            index === currentStep ? 'bg-blue-500' : 'bg-gray-300'
          } h-12 w-12`}
        >
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            {index + 1}
          </div>
        </div>
      ))}
    </div>  
  )
}

export default LoginProgress
