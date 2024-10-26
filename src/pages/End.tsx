import { useState } from "react";
import { Link } from "react-router-dom";

function EndPage() {
  const [isLogin, setIsLogin] = useState(false);

  return isLogin ? (
    <section className="flex">
      <p>You are welcome, </p>
    </section>
  ) : (
    <section className="flex">
      <p 
        className="text-xl text-center text-[#4f637d]"
      >
        You are not logined, please, 
        <Link to="/registration" className="text-xl text-center text-[#32abf2]">registration</Link>
        </p>
    </section>
  );
}

export default EndPage;
