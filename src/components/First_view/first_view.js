import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./first_view.scss";
import { faUndo } from "@fortawesome/free-solid-svg-icons";
import SignUpFormBase from "../SignUp/sign_up_form";
import SignInFormBase from "../SignIn/sign_in_form";
import PasswordForgetFormBase from "../PasswordForget/password_forget_form";
export const FirstView = () => {
  const [userRegisterWindow, setUserRegisterWindow] = useState(false);
  const [userLoginWindow, setUserLoginWindow] = useState(false);
  const [firstViewWindow, setFirstViewWindow] = useState(true);
  const [passwordForget, setPasswordForget] = useState(false);

  const handleRegister = () => {
    setFirstViewWindow(false);
    setUserRegisterWindow(true);
    setUserLoginWindow(false);
    setPasswordForget(false);
  };
  const handleLogin = () => {
    setFirstViewWindow(false);
    setUserRegisterWindow(false);
    setUserLoginWindow(true);
    setPasswordForget(false);
  };
  const handleGoBack = () => {
    setFirstViewWindow(true);
    setUserRegisterWindow(false);
    setUserLoginWindow(false);
    setPasswordForget(false);
  };
  const handlePasswordForget = () => {
    setFirstViewWindow(false);
    setUserRegisterWindow(false);
    setUserLoginWindow(false);
    setPasswordForget(true);
  };

  if (firstViewWindow) {
    return (
      <div className="first-view__wrapper">
        <h1>Cześć !</h1>
        <p>Witamy w naszej aplikacji, która pomoże Ci w wspinaniu !</p>
        <p>Żeby korzystać z aplikacji, załóż konto.</p>
        <p>Jeśli masz już konto, zaloguj się !</p>
        <p>
          Jeśli zapomniałeś hasła, zresetuj je klikając w przycisk "Zresetuj
          hasło"
        </p>
        <div className="button__wrapper">
          <div onClick={handleRegister}>Zarejestruj</div>
          <div onClick={handleLogin}>Zaloguj</div>
          <div onClick={handlePasswordForget}>Zresetuj hasło</div>
        </div>
      </div>
    );
  }
  if (userLoginWindow) {
    return (
      <div className="first-view__wrapper">
        <div className="undoButton" onClick={handleGoBack}>
          <FontAwesomeIcon icon={faUndo} />
          <div>Wróć</div>
        </div>
        <SignInFormBase />
      </div>
    );
  }
  if (userRegisterWindow) {
    return (
      <div className="first-view__wrapper">
        <div className="undoButton" onClick={handleGoBack}>
          <FontAwesomeIcon icon={faUndo} />
          <div>Wróć</div>
        </div>
        <SignUpFormBase />
      </div>
    );
  }
  if (passwordForget) {
    return (
      <div className="first-view__wrapper">
        <div className="undoButton" onClick={handleGoBack}>
          <FontAwesomeIcon icon={faUndo} />
          <div>Wróć</div>
        </div>
        <PasswordForgetFormBase />
      </div>
    );
  }
};
