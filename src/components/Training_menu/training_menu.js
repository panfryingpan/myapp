import "./training_menu.scss";
import { CloseSign } from "../close-sign/close-sign";
import React, { useState } from "react";
import { Logo } from "../Logo/logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";
import SignOutButton from "../SignOut/sign_out";
export const TrainingMenu = ({
  onClick,
  menuIsActive,
  elements,
  handleClickedElement,
}) => {
  const [routesActive, setRoutesIsActive] = useState(false);

  const ArrowStyles = {
    transform: `rotate(${routesActive ? 180 : 90}deg)`,
  };

  const trainingMenuStyles = {
    transition: "0.5s",
    width: `${menuIsActive ? "30%" : "0"}`,
  };

  const handleClickRoutes = () => {
    routesActive ? setRoutesIsActive(false) : setRoutesIsActive(true);
  };

  return (
    <div className="training-menu" style={trainingMenuStyles}>
      <div className="menu__header-wrapper">
        <Logo size={40} />
        <CloseSign onClick={onClick} />
      </div>
      <div className="training-menu__buttons">
        <div className="routes-wrapper">
          <div className="routes" onClick={handleClickRoutes}>
            Drogi
            <div>
              <FontAwesomeIcon icon={faSortUp} style={ArrowStyles} />
            </div>
          </div>
          <div
            className="routes-boulders"
            onClick={() => {
              handleClickedElement("addRoute");
            }}
            style={{
              borderBottom: elements.addRoute ? "2px solid #40b3a2" : null,
              display: `${routesActive ? "block" : "none"}`,
            }}
          >
            Dodaj drogę
          </div>
          <div
            className="routes-inside"
            onClick={() => {
              handleClickedElement("yourRoutes");
            }}
            style={{
              borderBottom: elements.yourRoutes ? "2px solid #40b3a2" : null,
              display: `${routesActive ? "block" : "none"}`,
            }}
          >
            Twoje drogi
          </div>
        </div>
      </div>
      <div className="account-buttons">
        <SignOutButton />
      </div>
    </div>
  );
};
