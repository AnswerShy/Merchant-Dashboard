interface FormFill {
    isShopifyWasConnectedPrev: boolean,
    nextStep: () => void;
    isShopifyConnected: boolean;
    setShopifyConnection: React.Dispatch<React.SetStateAction<boolean>>;
    onFill: (isFull: boolean) => void;
}

import SignupShopifyConnected from "./SignupShopifyConnected";
import SignupShopifyConnecting from "./SignupShopifyConnecting";

const SignupShopifyMainStep: React.FC<FormFill> = ({
    isShopifyWasConnectedPrev,
  nextStep,
  isShopifyConnected,
  setShopifyConnection,
  onFill,
}) => {
  const setShopifyConnectionFunc = (back?: boolean) => {
    if (!back) {
        onFill(true)
        setShopifyConnection(true);
    }
    else {
        setShopifyConnection(false);
    }
  };
  return isShopifyConnected ? (
    <SignupShopifyConnected
        isShopifyWasConnectedPrev={isShopifyWasConnectedPrev} 
        nextStep={nextStep} 
        setShopifyConnectionFunc={setShopifyConnectionFunc}
    />
  ) : (
    <SignupShopifyConnecting
      setShopifyConnectionFunc={setShopifyConnectionFunc}
    />
  );
};

export default SignupShopifyMainStep;
