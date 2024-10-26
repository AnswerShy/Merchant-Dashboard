import { useState } from "react";
import SignupNoGoogleWay from "./SignupNoGoogleWay";
import SignupGoogleWay from "./SignupGoogleWay";

const SignupGoogleMainStep= () => {
    const [amIUseGoogle, setAmIUseGoogle] = useState(true)
    return amIUseGoogle ? (
        <SignupGoogleWay getBack={setAmIUseGoogle}/>
    )
    :
    (
        <SignupNoGoogleWay getBack={setAmIUseGoogle} />
    )
};

export default SignupGoogleMainStep;
