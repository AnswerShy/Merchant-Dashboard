import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import SignupProgress from '../components/SignupProgressIndicator'
import SignupStartForm from '../components/signupSteps/SignupStartForm';
import SignupShopifyMainStep from '../components/signupSteps/ShopifySteps/SignupShopifyMainStep';
import SignupGoogleMainStep from '../components/signupSteps/GoogleSteps/SignupGoogleMainStep';


function SignupPage() {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(2)
  const [isFormFull, setIsFormFull] = useState(false)
  const steps = ['Welcome', 'Connect your Shopify store', 'Connect your customer support email', 'Done'];
  const [isShopifyConnected, setIsShopifyConnected] = useState<boolean>(false)
  const shopifyConnectedPrev = false

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  useEffect(() => {
    console.log(currentStep)
    if(currentStep == 3) {
      navigate('/');
    }
  }, [currentStep])

  const signupStep = [
    <SignupStartForm onFill={setIsFormFull} nextStep={handleNextStep} />,
    <SignupShopifyMainStep onFill={setIsFormFull} nextStep={handleNextStep} isShopifyWasConnectedPrev={shopifyConnectedPrev} isShopifyConnected={isShopifyConnected} setShopifyConnection={setIsShopifyConnected}/>,
    <SignupGoogleMainStep nextStep={handleNextStep} />
  ]
  
  return (
    <section className='flex'>
      <aside className="container flex justify-center items-center bg-custom-gradient h-screen w-1/3">
        <div className='w-15'>
          <SignupProgress steps={steps} currentStep={currentStep} isShopifyConnected={isShopifyConnected} ifFormFull={isFormFull} />
        </div>
      </aside>
      <main className='container bg-custom-bg flex w-2/3 h-screen justify-center items-center'>
        {signupStep[currentStep]}
      </main>
    </section>
  )
}

export default SignupPage
