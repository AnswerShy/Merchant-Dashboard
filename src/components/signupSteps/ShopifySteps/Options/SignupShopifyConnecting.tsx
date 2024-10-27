import { useState } from "react";
import SignupNoShopifyWay from "./SignupNoShopifyWay";
import servicesConnect from "../../../../controllers/servicesConnect";
import Logo from "../../../Logo";
interface FormFill {
  setShopifyConnectionFunc: (back?: boolean) => void;
}

const SignupShopifyConnecting: React.FC<FormFill> = ({
  setShopifyConnectionFunc,
}) => {
  const [amIUseShopify, setAmIUseShopify] = useState(true)

  const setShopifyNextStep = () => {
    const buttonLoadingElemet = document.getElementById("button_loading")?.classList
    const buttonTextElement = document.getElementById("button_text")?.classList
    buttonLoadingElemet?.remove("hidden")
    buttonTextElement?.add("hidden")

    servicesConnect()
      .then(message => {
        if(message.message == "ok") {
          setShopifyConnectionFunc(false)

          buttonLoadingElemet?.add("hidden")
          buttonTextElement?.remove("hidden")

        }
      })
  };
  
  const noShopify = () => {
    setAmIUseShopify(false)
  }
   
  return amIUseShopify ? (
    <>
      {/* Logo */}
      <Logo  />
      <h1>Connect your Shopify store</h1>
      <h2>
        Installs the Chad widget in your Shopify store and sets it up to display
        your customers’ order information and self-serve options.
      </h2>
      <ul>
          <li>
          Track orders and shipping
            <h3>
              Global coverage with 600+ couriers supported
            </h3>
          </li>
          <li>
          Manage orders
            <h3>
            Allow customers to track, return, exchange, or report problems with
            their orders
            </h3>
          </li>
          <li>
          Process returns and exchanges
            <h3>
            Automatically checks your store policy and existing inventory before
            resolving or escalating each request
            </h3>
          </li>
      </ul>

      <button
        onClick={setShopifyNextStep}
        type="button"
        id="createAccButton"
      >
        <svg id="button_loading" className="hidden animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p>
          Connect store
        </p>
      </button>

      <p className="alt-btn-form">
        <span
          onClick={noShopify}
          className="alt-btn-text cursor-pointer"
        >
          I don’t use Shopify
        </span>
      </p>
    </>
  ) :
  (
    <SignupNoShopifyWay getBack={setAmIUseShopify} />
  )
};

export default SignupShopifyConnecting;
