import React from "react";
import { Link } from "react-router-dom";
import SignForm from "./SignForm";

const SignFormLayout = ({ text, isSubtext, signCheck, signText, signLink }) => {
  return (
    <div>
      <section>
        <h1>{text}</h1>
        {isSubtext && <span>계정으로 사용할 이메일 주소를 입력하세요.</span>}
        <SignForm signCheck={signCheck} />
        <Link to={`/${signLink}`}>{signText}</Link>
      </section>
    </div>
  );
};

export default SignFormLayout;