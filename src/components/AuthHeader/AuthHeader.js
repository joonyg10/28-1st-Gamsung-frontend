import React from "react";
import { Link } from "react-router-dom";
import "./AuthHeader.scss";

const AuthHeader = () => {
  return (
    <header className="auth-header">
      <div>
        <h2>
          <Link to="/gamsung">GAMSUNG</Link>
        </h2>
        <span>Account</span>
      </div>
    </header>
  );
};

export default AuthHeader;
