import { Link } from "react-router-dom";

export default function NoPage() {
  return (
    <>
      <p className="text-center">PAGE NOT FOUND</p>
      <Link to="/registration" className="text-xl text-center text-[#32abf2]">
        registration again
      </Link>
    </>
  );
}