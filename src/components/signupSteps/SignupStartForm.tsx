import React, { useEffect } from "react";
import valideController from "../../controllers/startFormDataValidate";
import Logo from "../Logo";

interface FormFill {
  onFill: (isFull: boolean) => void;
  nextStep: () => void;
}

const SignupStartForm: React.FC<FormFill> = ({ onFill, nextStep }) => {
  const allInputsFill = (elemets: NodeListOf<HTMLInputElement>) => {
    let allField: boolean = true;

    elemets.forEach((element) => {
      if (element.value?.length < 5) {
        allField = false;
      }
    });

    if (allField) {
      onFill(true);
    }
  };

  useEffect(() => {
    document.querySelectorAll("input").forEach((input) => {
      input.addEventListener("change", () => {
        allInputsFill(document.querySelectorAll("input"));
      });
    });
  }, []);

  const validateData = () => {
    const inputList: { [key: string]: HTMLInputElement | null } = {
      email: document.querySelector("#user-email") as HTMLInputElement | null,
      name: document.querySelector("#user-name") as HTMLInputElement | null,
      password: document.querySelector(
        "#user-password"
      ) as HTMLInputElement | null,
    };

    document
      .getElementById("createAccButton_loading")
      ?.classList.remove("hidden");
    document.getElementById("createAccButton_text")?.classList.add("hidden");

    valideController(
      inputList["email"]?.value,
      inputList["name"]?.value,
      inputList["password"]?.value
    ).then((data) => {
      if (data.error) {
        document
          .getElementById("createAccButton_loading")
          ?.classList.add("hidden");
        document
          .getElementById("createAccButton_text")
          ?.classList.remove("hidden");

        data.error.forEach((e) => {
          document
            .getElementById(`user-${e}`)
            ?.classList.add("border-2", "border-rose-500");
        });
      } else {
        document
          .getElementById("createAccButton_loading")
          ?.classList.add("hidden");
        document
          .getElementById("createAccButton_text")
          ?.classList.remove("hidden");
        onFill(false);
        nextStep();
      }
    });
  };
  return (
    <>
      {/* Logo */}
      <Logo />
      {/* Form info */}
      <h1>
        Welcome to Chad
      </h1>
      <h2>
        Go live in 10 minutes! Our self-service widget empowers your customers
        to manage orders and track shipments 24/7 without driving you crazy.
      </h2>
      <div className="fields-form">
        {/* Email */}
        <div className="field-wrap">
        <label>Email</label>
          <input
            id="user-email"
            className="field"
            placeholder="megachad@trychad.com"
          />
        </div>
        {/* Name */}
        <div className="field-wrap">
          <label>Your name</label>
          <input
            id="user-name"
            className="field"
            placeholder="Meha Chad"
          />
        </div>
        {/* Password */}
        <div className="field-wrap">
          <label>Password</label>
          <div
            id="user-password"
            className="field"
          >
            <input
              className="flex-grow w-2/3 text-base text-left"
              placeholder="Enter password"
              type="password"
            />
            <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
              <div className="bg-password w-[20px] h-[20px] bg-no-repeat bg-cover" />
            </div>
          </div>
        </div>
      </div>
      {/* Create Acc Button */}
      <button
        type="button"
        onClick={validateData}
        id="createAccButton"
        className=""
      >
        <svg
          id="createAccButton_loading"
          className="hidden animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <p
          id="createAccButton_text"
          className="flex-grow-0 flex-shrink-0 text-sm font-medium text-center text-white"
        >
          Create account
        </p>
      </button>
      {/* Alt button */}
      <p className="alt-btn-form">
        <span className="alt-btn-text">
          Already have an account?{" "}
        </span>
        <span className="alt-btn-link">
          Login
        </span>
      </p>
    </>
  );
};

export default SignupStartForm;
