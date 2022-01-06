import React from "react";
import { useLocation } from "react-router-dom";
import SignFormLayout from "./SignForm/SignFormLayout";
import AuthHeader from "../../components/AuthHeader/AuthHeader";
import "./sign.scss";

const Sign = () => {
  const location = useLocation();
  const signLocation = location.pathname === "/signup" ? SIGNUP : SIGNIN;
  const { text, isSubtext, signCheck, signText, signLink } = signLocation;
  return (
    <>
      <AuthHeader />
      <main className="sign">
        <SignFormLayout
          text={text}
          isSubtext={isSubtext}
          signCheck={signCheck}
          signText={signText}
          signLink={signLink}
        />
      </main>
    </>
  );
};

const SIGNIN = {
  text: "갬성계정으로 로그인",
  isSubtext: false,
  signCheck: "signin",
  signText: "갬성 계정이 없으신가요?",
  signLink: "signup",
};

const SIGNUP = {
  text: "갬성계정 만들기",
  isSubtext: true,
  signCheck: "signup",
  signText: "갬성 계정이 있으신가요?",
  signLink: "signin",
};

export default Sign;
