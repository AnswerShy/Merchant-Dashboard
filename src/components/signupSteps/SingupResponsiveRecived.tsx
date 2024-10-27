const ResponsiveRecived = () => {
  return (
    <>
      <div className="flex-grow-0 flex-shrink-0 w-[328px] h-[90px] flex justify-center relative">
        <div className="flex justify-start items-start w-fit h-fit  p-[4.747252941131592px] rounded-full bg-[#65bd47]">
            <svg
            width={30}
            height={32}
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[100px] h-[100px] relative"
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
      <div className="flex mt-8 flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative bg-white">
        <div className="flex mt-6 flex-col justify-start flex-grow-0 flex-shrink-0 w-[400px] items-center relative gap-2">
          <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-center text-[#134267]">
            Response received
          </p>
          <p className="flex-grow-0 flex-shrink-0 w-[347px] text-sm text-center text-[#4f637d]">
            Thank you for your interest in Chad! We’ll be hard at work building integrations to support your platform.
          </p>
        </div>
      </div>
      <button
        type="button"
        id="createAccButton"
        className="flex mt-8 justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 py-[11px] rounded-lg bg-[#32abf2] hover:bg-[#0D3251] transition-colors"
      >
        <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-white">
          Done
        </p>
      </button>
    </>
  );
};

export default ResponsiveRecived;
