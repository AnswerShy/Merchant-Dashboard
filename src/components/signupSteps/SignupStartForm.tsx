import React, { useEffect } from "react";

interface FormFill {
  onFill: (isFull: boolean) => void;
  nextStep: () => void;
}

const SignupStartForm: React.FC<FormFill> = ({ onFill, nextStep }) => {
  useEffect(() => {
    document.querySelectorAll("input").forEach(el => {
      el.addEventListener("change", () => {
        onFill(true)
      })
    })
  }, [])

  const validateData = () => {
    nextStep()
  }
  return (
    <form
      className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[480px] h-[700px] relative px-10 py-16 rounded-lg bg-white"
      style={{ boxShadow: "0px 5px 20px 0 rgba(108,117,139,0.2)" }}
    >
      {/* Logo */}
      <div className="flex-grow-0 flex-shrink-0 w-[400px] h-8 relative">
        <div className="flex justify-center items-start absolute left-0 top-0 gap-0.5">
          <svg
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0 w-[31.97px] h-[31.97px] relative"
            preserveAspectRatio="none"
          >
            <path
              d="M13.1144 20.0642C12.1542 20.3326 11.4283 21.0093 11.0695 21.4629C10.9179 21.6574 10.8503 21.9768 10.7326 22.1951C10.6806 22.2904 9.98199 23.6405 9.35337 24.044C8.65913 24.4849 8.03245 24.5807 7.69651 25.2735C7.56136 25.5501 7.50496 25.8545 7.54774 26.1457C7.61046 26.591 7.90216 27.0106 8.49966 27.2707C9.49339 27.7044 13.0555 27.3072 15.0415 24.8539C15.6167 24.2584 15.8714 23.411 15.975 22.6341C16.1899 21.0127 14.6915 19.6247 13.1144 20.0642Z"
              fill="#32ABF2"
            />
            <path
              d="M10.761 20.0958C10.7901 20.052 10.8193 20.0102 10.8495 19.9567C10.8956 19.876 10.9433 19.7846 10.9938 19.6869C10.2695 19.226 9.22662 18.4049 9.18092 18.3689L9.10751 18.312L9.11043 18.3081C9.04237 18.2532 8.9743 18.2021 8.90575 18.1428C8.7531 18.1798 8.60627 18.223 8.46869 18.2746C7.60574 18.5974 7.02525 19.1774 6.61347 19.6203C6.47588 19.7681 6.35775 19.8998 6.24982 20.0048C5.65864 20.5756 5.01009 20.8999 4.73054 21.0239C4.67366 21.0598 4.6158 21.0958 4.55698 21.1318C3.52581 21.7619 3.58027 22.7639 3.69354 23.1489C3.80682 23.5339 4.24048 24.57 5.69607 24.5442C6.82349 24.5243 8.05058 23.9248 8.54696 23.6555C8.54696 23.6555 10.6472 22.3078 11.429 20.6913C11.4304 20.6908 11.1635 20.4594 10.761 20.0958Z"
              fill="#32ABF2"
            />
            <path
              d="M7.59752 16.5263C7.3311 16.166 7.0958 15.8145 6.92613 15.5476C6.85806 15.4397 6.80069 15.3468 6.75548 15.271C6.55566 15.3235 6.30675 15.4081 6.03449 15.5471C5.38011 15.8816 4.71114 16.0644 4.31346 15.9108C3.91626 15.7567 3.04213 15.3648 2.42129 15.8087C1.80045 16.2526 1.59967 17.0654 1.9429 17.6663C2.23801 18.1831 3.00275 18.998 3.86667 19.3295C3.86667 19.3295 5.85072 20.279 8.13231 18.3003C10.0979 16.5963 8.46436 16.5073 7.59752 16.5263Z"
              fill="#32ABF2"
            />
            <path
              d="M15.9848 23.129C21.2681 23.129 25.5511 18.846 25.5511 13.5627C25.5511 8.27933 21.2681 3.99634 15.9848 3.99634C10.7014 3.99634 6.41846 8.27933 6.41846 13.5627C6.41846 18.846 10.7014 23.129 15.9848 23.129Z"
              fill="#32ABF2"
            />
            <path
              d="M18.8558 20.0642C19.816 20.3326 20.5418 21.0093 20.9006 21.4629C21.0523 21.6574 21.1199 21.9768 21.2375 22.1951C21.2895 22.2904 21.9882 23.6405 22.6168 24.044C23.3105 24.4849 23.9377 24.5807 24.2736 25.2735C24.4088 25.5501 24.4652 25.8545 24.4224 26.1457C24.3597 26.591 24.068 27.0106 23.4705 27.2707C22.4767 27.7044 18.9146 27.3072 16.9286 24.8539C16.3535 24.2584 16.0987 23.411 15.9952 22.6341C15.7808 21.0127 17.2791 19.6247 18.8558 20.0642Z"
              fill="#32ABF2"
            />
            <path
              d="M21.209 20.0958C21.1798 20.052 21.1507 20.0102 21.1205 19.9567C21.0743 19.876 21.0267 19.7846 20.9761 19.6869C21.7005 19.226 22.7434 18.4049 22.7891 18.3689L22.8625 18.312L22.8595 18.3081C22.9276 18.2532 22.9957 18.2021 23.0637 18.1428C23.2164 18.1798 23.3632 18.223 23.5008 18.2746C24.3637 18.5974 24.9442 19.1774 25.356 19.6203C25.4936 19.7681 25.6117 19.8998 25.7197 20.0048C26.3109 20.5756 26.9594 20.8999 27.2389 21.0239C27.2958 21.0598 27.3537 21.0958 27.4125 21.1318C28.4437 21.7619 28.3892 22.7639 28.2759 23.1489C28.1627 23.5339 27.729 24.57 26.2734 24.5442C25.1465 24.5243 23.9189 23.9248 23.4225 23.6555C23.4225 23.6555 21.3218 22.3078 20.54 20.6913C20.5396 20.6908 20.8069 20.4594 21.209 20.0958Z"
              fill="#32ABF2"
            />
            <path
              d="M24.3734 16.5263C24.6399 16.166 24.8752 15.8145 25.0448 15.5476C25.1129 15.4397 25.1703 15.3468 25.2155 15.271C25.4153 15.3235 25.6642 15.4081 25.9365 15.5471C26.5909 15.8816 27.2598 16.0644 27.6575 15.9108C28.0547 15.7567 28.9288 15.3648 29.5497 15.8087C30.1705 16.2526 30.3713 17.0654 30.0281 17.6663C29.733 18.1831 28.9682 18.998 28.1043 19.3295C28.1043 19.3295 26.1202 20.279 23.8387 18.3003C21.8731 16.5963 23.5066 16.5073 24.3734 16.5263Z"
              fill="#32ABF2"
            />
            <path
              d="M12.6877 14.1849C13.1528 14.1849 13.5298 13.7052 13.5298 13.1134C13.5298 12.5216 13.1528 12.0419 12.6877 12.0419C12.2227 12.0419 11.8457 12.5216 11.8457 13.1134C11.8457 13.7052 12.2227 14.1849 12.6877 14.1849Z"
              fill="#34056F"
            />
            <path
              d="M13.0245 12.655C13.0245 12.8655 12.8539 13.0361 12.6434 13.0361C12.4329 13.0361 12.2622 12.8655 12.2622 12.655C12.2622 12.4444 12.4329 12.2738 12.6434 12.2738C12.8539 12.2733 13.0245 12.444 13.0245 12.655Z"
              fill="#F9F9F9"
            />
            <path
              d="M19.2825 14.1849C19.7475 14.1849 20.1245 13.7052 20.1245 13.1134C20.1245 12.5216 19.7475 12.0419 19.2825 12.0419C18.8174 12.0419 18.4404 12.5216 18.4404 13.1134C18.4404 13.7052 18.8174 14.1849 19.2825 14.1849Z"
              fill="#34056F"
            />
            <path
              d="M19.6188 12.655C19.6188 12.8655 19.4481 13.0361 19.2376 13.0361C19.0271 13.0361 18.8564 12.8655 18.8564 12.655C18.8564 12.4444 19.0271 12.2738 19.2376 12.2738C19.4481 12.2733 19.6188 12.444 19.6188 12.655Z"
              fill="#F9F9F9"
            />
            <path
              d="M17.5336 16.4102C17.4534 17.3767 17.1282 18.6081 15.9857 18.6081C15.4217 18.6081 15.0571 18.3082 14.8232 17.8881C15.1072 17.2804 15.8588 16.1982 17.5336 16.4102Z"
              fill="#EB5A55"
            />
            <path
              d="M17.5334 16.4101C15.858 16.1981 15.1069 17.2803 14.823 17.888C14.2736 16.9074 14.436 15.271 14.436 15.271C14.8983 15.4694 15.9854 15.429 15.9854 15.429C15.9854 15.429 17.071 15.4694 17.5348 15.271C17.5348 15.271 17.5859 15.7859 17.5334 16.4101Z"
              fill="#79292A"
            />
          </svg>
          <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-[#20496c]">Chad</p>
        </div>
      </div>
      <p className="self-stretch mt-6 flex-grow-0 flex-shrink-0 w-[400px] text-2xl font-semibold text-left text-[#134267]">
        Welcome to Chad
      </p>
      <p className="self-stretch mt-4 flex-grow-0 flex-shrink-0 w-[400px] text-sm text-left text-[#4f637d]">
        Go live in 10 minutes! Our self-service widget empowers your customers to manage orders and
        track shipments 24/7 without driving you crazy.
      </p>
      <div className="flex mt-8 flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative bg-white">
        {/* Email */}
        <div className="flex mt-6 flex-col  justify-start items-start flex-grow-0 flex-shrink-0 w-[400px] relative gap-2">
          <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#4f637d]">
            Email
          </p>
          <input 
            className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[45px] relative gap-2.5 pl-[17px] pr-2.5 py-2.5 rounded bg-[#f8f9fc]"
            placeholder="megachad@trychad.com"
            />
        </div>
        {/* Name */}
        <div className="flex mt-6 flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[400px] relative gap-2">
          <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#4f637d]">
            Your name
          </p>
          <input 
            className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[45px] relative gap-2.5 pl-[17px] pr-2.5 py-2.5 rounded bg-[#f8f9fc]"
            placeholder="Meha Chad"
            />
        </div>
        {/* Password */}
        <div className="flex mt-6 flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-[400px] relative gap-2">
          <p className="flex-grow-0 flex-shrink-0 text-xs font-medium text-left text-[#4f637d]">
            Password
          </p>
          <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 h-[45px] relative gap-2.5 pl-[17px] pr-2.5 py-2.5 rounded bg-[#f8f9fc]">
            <input 
            className="flex-grow w-[347px] text-base text-left"
            placeholder="Enter password"
            type="password"
            />
            <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
              <svg
                width={16}
                height={17}
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-4 h-4 relative"
                preserveAspectRatio="xMidYMid meet"
              >
                <g clip-path="url(#clip0_5501_5822)">
                  <path
                    d="M6.60008 3.32664C7.05897 3.21923 7.52879 3.16554 8.00008 3.16664C12.6667 3.16664 15.3334 8.49998 15.3334 8.49998C14.9287 9.25705 14.4461 9.9698 13.8934 10.6266M9.41341 9.91331C9.23032 10.1098 9.00951 10.2674 8.76418 10.3767C8.51885 10.486 8.25402 10.5448 7.98547 10.5496C7.71693 10.5543 7.45019 10.5049 7.20115 10.4043C6.95212 10.3037 6.7259 10.154 6.53598 9.96408C6.34606 9.77416 6.19634 9.54794 6.09575 9.2989C5.99516 9.04987 5.94577 8.78312 5.9505 8.51458C5.95524 8.24604 6.01402 7.98121 6.12333 7.73587C6.23264 7.49054 6.39025 7.26974 6.58675 7.08664M11.9601 12.46C10.8205 13.3286 9.43282 13.8099 8.00008 13.8333C3.33341 13.8333 0.666748 8.49998 0.666748 8.49998C1.49601 6.95457 2.64617 5.60438 4.04008 4.53998L11.9601 12.46Z"
                    stroke="#4F637D"
                    stroke-width="1.33"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M0.666748 1.16663L15.3334 15.8333"
                    stroke="#4F637D"
                    stroke-width="1.33"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* Create Acc Button */}
      <button 
        type="button" 
        onClick={validateData} 
        id="createAccButton" 
        className="flex mt-8 justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2.5 py-[11px] rounded-lg bg-[#32abf2]"
        >
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-white">
            Create account
          </p>
        </button>
        {/* login */}
        <p className="flex-grow-0 mt-4 flex-shrink-0 text-xs text-center">
          <span className="flex-grow-0 flex-shrink-0 text-xs text-center text-[#4f637d]">
            Already have an account?{" "}
          </span>
          <span className="flex-grow-0 flex-shrink-0 text-xs text-center text-[#32abf2]">Login</span>
        </p>
    </form>
  )
}

export default SignupStartForm