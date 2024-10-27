import { useState } from "react";
import ResponsiveRecived from "../../SingupResponsiveRecived";
import Logo from "../../../Logo";
interface FormFill {
  getBack: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignupNoShopifyWay: React.FC<FormFill> = ({ getBack }) => {
  const getBackFunc = () => {
    getBack(true);
  };
  const [response, setRespone] = useState(false)

  const submitResponse = () => {
    setRespone(true)
  }
  return !response ? (
    <>
      {/* Logo */}
      <Logo />
      <h1>
        Don’t use Shopify?
      </h1>
      <h2>
        Chad Beta is currently only available on Shopify. We’ll send you an
        email when Chad becomes available on your platform.
      </h2>

      <div className="fields-form">
        <div className="field-wrap">
          <label>Platform</label>
          <select className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[45px] relative gap-2.5 pl-[17px] pr-2.5 py-2.5 rounded bg-[#f8f9fc]">
            <option value="">Select platform</option>
          </select>
        </div>
      </div>

      <button
        onClick={submitResponse}
        type="button"
      >
        <p>Submit</p>
      </button>

      <p className="alt-btn-form">
        <span className="alt-btn-text">
          Actually use Shopify?{" "}
          <a
            className="alt-btn-link"
            onClick={getBackFunc}
          >
            Connect
          </a>
        </span>
      </p>
    </>
  ) : 
  (
    <ResponsiveRecived />
  )
};

export default SignupNoShopifyWay;
