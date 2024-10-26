import { useState } from "react";
import SignupNoGoogleWay from "./SignupNoGoogleWay";
import SignupGoogleWay from "./SignupGoogleWay";

interface FormFill {
    nextStep: () => void;
}
  
const SignupGoogleMainStep: React.FC<FormFill> = ({ nextStep }) => {
    const [amIUseGoogle, setAmIUseGoogle] = useState(true)
    return amIUseGoogle ? (
        <SignupGoogleWay getBack={setAmIUseGoogle} nextStep={nextStep}/>
    )
    :
    (
        <SignupNoGoogleWay getBack={setAmIUseGoogle} />
    )
};

export default SignupGoogleMainStep;
