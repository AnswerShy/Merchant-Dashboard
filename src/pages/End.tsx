import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function EndPage() {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("username")) {
      setIsLogin(true);
    }
  }, []);
  window.addEventListener("beforeunload", function () {
    localStorage.clear();
  });
  return isLogin ? (
    <section className="flex flex-col items-center ">
      <p className="text-xl text-center text-[#4f637d]">
        Hello Luna Edge, My name is Kirill
      </p>
      <p className="text-s text-center text-[#4f637d]">
        and your name is {localStorage.getItem("username")}
      </p>
      <Link to="/registration" className="text-xl text-center text-[#32abf2]">
          registration again
        </Link>
    </section>
  ) : (
    <section className="flex">
      <p className="text-xl text-center text-[#4f637d]">
        You are not logined, please,
        <Link to="/registration" className="text-xl text-center text-[#32abf2]">
          registration
        </Link>
      </p>
    </section>
  );
}

export default EndPage;
