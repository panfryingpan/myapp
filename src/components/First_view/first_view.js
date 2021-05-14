import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./first_view.scss";
import { faUndo } from "@fortawesome/free-solid-svg-icons";

export const FirstView = () => {
  const [userRegisterWindow, setUserRegisterWindow] = useState(false);
  const [userLoginWindow, setUserLoginWindow] = useState(false);
  const [firstViewWindow, setFirstViewWindow] = useState(true);

  const handleRegister = () => {
    setFirstViewWindow(false);
    setUserRegisterWindow(true);
    setUserLoginWindow(false);
  };
  const handleLogin = () => {
    setFirstViewWindow(false);
    setUserRegisterWindow(false);
    setUserLoginWindow(true);
  };
  const handleGoBack = () => {
    setFirstViewWindow(true);
    setUserRegisterWindow(false);
    setUserLoginWindow(false);
  };
  if (firstViewWindow) {
    return (
      <div className="first-view__wrapper">
        <h1>Cześć !</h1>
        <p>Witamy w naszej aplikacji, która pomoże Ci w wspinaniu !</p>
        <p>
          Możesz korzystać z aplikacji bez zakładania konta, lecz drogi które
          dodasz będa widoczne tylko na urządzeniu, którego właśnie używasz.
        </p>
        <p>
          Jeśli chcesz mieć dostęp na każdym urządzeniu polecamy założyć konto
        </p>
        <div className="button__wrapper">
          <div onClick={handleRegister}>Zarejestruj</div>
          <div onClick={handleLogin}>Zaloguj</div>
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
      </div>
    );
  }
};
