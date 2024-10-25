import { useState } from 'react'
import './App.css'

import LoginProgress from './components/LoginProgressIndicator'
import LoginStartForm from './components/loginSteps/LoginStartForm';

function App() {
  const [currentStep, setCurrentStep] = useState(0)
  const steps = ['Welcome', 'Connect your Shopify store', 'Connect your customer support email', 'Done'];

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  return (
    <section className='flex'>
      <aside className="container bg-custom-gradient h-screen w-1/3">
        <div className='w-full'>
          <LoginProgress steps={steps} currentStep={currentStep} />

          <button
            onClick={handleNextStep}
            disabled={currentStep === steps.length - 1}
          >
            {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      </aside>
      <main className='container flex w-2/3 h-screen justify-center items-center'>
        <LoginStartForm />
      </main>
    </section>
  )
}

export default App
