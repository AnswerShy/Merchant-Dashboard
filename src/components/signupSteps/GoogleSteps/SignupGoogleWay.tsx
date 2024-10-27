import { useState } from "react";
import servicesConnect from "../../../controllers/servicesConnect";
import Logo from "../../Logo";
interface FormFill {
  getBack: React.Dispatch<React.SetStateAction<boolean>>;
  nextStep: () => void;
}
const SignupGoogleWay: React.FC<FormFill> = ({ getBack, nextStep }) => {
  const [loading, setLoading] = useState(false)

  const getBakcFunc = () => {
    getBack(false);
  };
  const googleCheck = () => {
    setLoading(true)

    servicesConnect().then((message) => {
      if (message.message == "ok") {
        nextStep();
        setLoading(false)
      }
    });
  };
  return (
    <>
      <Logo />
      <h1>Connect your customer support email</h1>
      <h2>
        Allows Chad to send automated responses on your behalf from your usual
        support mailbox
      </h2>
      <ul>
        <li>
          Contextual responses
          <h3>
            Custom responses to any support situation from “where’s my stuff?”
            to “I want a refund”
          </h3>
        </li>
        <li>
          Reply from anywhere
          <h3>
            Respond to your customers via email or Chad chat—it’s all saved in
            the same thread
          </h3>
        </li>
        <li>
          Categorical inbox tags
          <h3>
            Tags your emails by category so you know what to expect before even
            opening an email
          </h3>
        </li>
      </ul>
      {
        !loading ? (
          <div
            onClick={googleCheck} 
            className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative p-[1px] rounded-sm bg-[#5383ec] cursor-pointer hover:bg-[#0D3251]"
          >
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 w-[48px] h-[48px] bg-white rounded-[1px]">
              <div className="bg-google bg-contain flex-grow-0 flex-shrink-0 w-[18px] h-[18px] relative" />
            </div>
            <p className="flex-grow-0 w-[277px] xl:w-[345px] flex-shrink-0 text-sm md:text-base lg:text-lg font-medium text-center text-white">
              Connect Gmail account
            </p>
          </div>
        ) : (
          <div
          className="w-[277px] xl:w-[346.617px] flex justify-center items-center flex-grow-0 flex-shrink-0 relative py-px rounded-sm bg-[#5383ec]"
        >
          <div className="w-full flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-3.5 py-[15px] rounded-[1px]">
            <svg id="button_loading" className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        </div>
        )
      }
      {/* Alt button */}
      <p className="alt-btn-form">
        <span onClick={getBakcFunc} className="alt-btn-text cursor-pointer">
          I don’t use Gmail
        </span>
      </p>
    </>
  );
};

export default SignupGoogleWay;
