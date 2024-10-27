interface FormFill {
  isShopifyWasConnectedPrev: boolean;
  nextStep: () => void;
  setShopifyConnectionFunc: (back?: boolean) => void;
}

const SignupShopifyConnected: React.FC<FormFill> = ({
  nextStep,
  setShopifyConnectionFunc,
  isShopifyWasConnectedPrev,
}) => {
  const ShopifyConnectCancel = () => {
    setShopifyConnectionFunc(true);
  };
  return (
    <>
      {/* Avatar */}
      <div className="flex-grow-0 flex-shrink-0 w-[82.5px] h-20 relative">
            <img
            src="https://i.pinimg.com/originals/76/38/ae/7638ae657ade274bd98a0ef815d57297.png"
            className="w-[82.5px] h-20 top-[116.7px] object-cover"
            />
        <div className="flex justify-start items-start absolute top-0 right-0 p-[4.747252941131592px] rounded-[21.63px] bg-[#65bd47]">
            <svg
            width={15}
            height={16}
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[14.51px] h-[14.51px] relative"
            preserveAspectRatio="none"
            >
            <path
                d="M12.0851 4.37363L5.43677 11.022L2.41479 8"
                stroke="white"
                stroke-width="1.81319"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            </svg>
        </div>
        </div>

      {isShopifyWasConnectedPrev ? (
        <div className="flex mt-8 flex-col mb-[16px] justify-start items-center flex-grow-0 flex-shrink-0 relative bg-white">
          <div className="flex mt-6 flex-col justify-start flex-grow-0 flex-shrink-0 w-[400px] items-center relative gap-2">
            <p className="flex-grow-0 flex-shrink-0 text-[20px] font-semibold text-center text-[#134267]">
                [STORE NAME]<br/>
                already connected
            </p>
          </div>
        </div>
      ) : (
        <div className="flex mt-8 flex-col mb-[16px] justify-start items-center flex-grow-0 flex-shrink-0 relative bg-white">
          <div className="flex mt-6 flex-col justify-start flex-grow-0 flex-shrink-0 w-[400px] items-center relative gap-2">
            <p className="flex-grow-0 flex-shrink-0 text-[20px] font-semibold text-center text-[#134267]">
              Store connected
            </p>
            <p className="flex-grow-0 flex-shrink-0 w-[347px] text-[14px] text-center text-[#4f637d]">
              Chad is now able to manage customer support requests for STORE-NAME.
            </p>
          </div>
        </div>
      )}

      <button
        onClick={nextStep}
        type="button"
        id="createAccButton"
      >
        <p>
          Continue
        </p>
      </button>

      <p className="alt-btn-form">
        <span className="alt-btn-text">
          Wrong store? {" "}
          <a
            onClick={ShopifyConnectCancel}
            className="alt-btn-link"
          >
            Connect another one
          </a>
        </span>
      </p>
    </>
  );
};

export default SignupShopifyConnected;
