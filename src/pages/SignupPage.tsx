import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import SignupProgress from '../components/SignupProgressIndicator'
import SignupStartForm from '../components/signupSteps/SignupStartForm';
import SignupShopifyMainStep from '../components/signupSteps/ShopifySteps/SignupShopifyMainStep';
import SignupGoogleMainStep from '../components/signupSteps/GoogleSteps/SignupGoogleMainStep';
import Slider from '../components/TipsSlider';


function SignupPage() {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(0)
  const [isFormFull, setIsFormFull] = useState(false)
  const steps = ['Welcome', 'Connect your Shopify store', 'Connect your customer support email', 'Done'];
  const [isShopifyConnected, setIsShopifyConnected] = useState<boolean>(false)
  let shopifyConnectedPrev: boolean = false

  useEffect(() => {
    function shopifyPrevConTest() {
      shopifyConnectedPrev = true;
      setIsShopifyConnected(true)
      console.log("%cshopify connected previously", 'color: #bada55')
    }
    window.shopifyPrevConTest = shopifyPrevConTest;
  }, []);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const handlePrevStep = () => {
    if(currentStep > 0 ){
      setCurrentStep(currentStep - 1);
    }
  }

  useEffect(() => {
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
    <section className='flex w-full flex-col xl:flex-row'>
      <aside 
        className="flex flex-col justify-center items-center md:bg-custom-gradient h-fit py-4 md:py-0 md:h-0 xl:h-screen w-full md:w-0  xl:w-1/3">
            <SignupProgress steps={steps} currentStep={currentStep} isShopifyConnected={isShopifyConnected} ifFormFull={isFormFull} handlePrevStep={handlePrevStep} />
            <Slider />
      </aside>
      <main className='bg-custom-bg flex h-screen justify-center items-center w-full xl:w-2/3'>
        <form
          className="flex md:shadow-form flex-col justify-start items-center w-max h-full md:w-[480px] xl:w-fit md:h-max relative px-[32px] py-[16px] md:px-[40px] md:py-[64px] rounded-lg bg-white"
        >
          {signupStep[currentStep]}
        </form>
      </main>
    </section>
  )
}

export default SignupPage