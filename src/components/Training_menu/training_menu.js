import "./training_menu.scss";
import { CloseSign } from "../close-sign/close-sign";
import React, { useState } from "react";
import { Logo } from "../Logo/logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";
import SignOutButton from "../SignOut/sign_out";
export const TrainingMenu = ({ onClick, menuIsActive }) => {
  const [routesActive, setRoutesIsActive] = useState(false);
  const [elements, elementActive] = useState({
    boulders: false,
    inside: false,
    favorites: false,
    endDay: false,
  });

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
  const handleClickedElement = (el) => {
    if (el === "boulders") {
      elementActive({
        boulders: true,
        inside: false,
        favorites: false,
        endDay: false,
      });
    }
    if (el === "inside") {
      elementActive({
        boulders: false,
        inside: true,
        favorites: false,
        endDay: false,
      });
    }
    if (el === "favorites") {
      elementActive({
        boulders: false,
        inside: false,
        favorites: true,
        endDay: false,
      });
    }

    if (el === "endDay") {
      elementActive({
        boulders: false,
        inside: false,
        favorites: false,
        endDay: true,
      });
    }
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
              handleClickedElement("boulders");
            }}
            style={{
              borderBottom: elements.boulders ? "2px solid #40b3a2" : null,
              display: `${routesActive ? "block" : "none"}`,
            }}
          >
            Skałki
          </div>
          <div
            className="routes-inside"
            onClick={() => {
              handleClickedElement("inside");
            }}
            style={{
              borderBottom: elements.inside ? "2px solid #40b3a2" : null,
              display: `${routesActive ? "block" : "none"}`,
            }}
          >
            Ścianki
          </div>
        </div>
        <div
          className="favorites"
          onClick={() => {
            handleClickedElement("favorites");
          }}
          style={{
            borderBottom: elements.favorites ? "2px solid #40b3a2" : null,
          }}
        >
          Ulubione
        </div>
        <div
          className="training-end"
          onClick={() => {
            handleClickedElement("endDay");
          }}
          style={{
            borderBottom: elements.endDay ? "2px solid #40b3a2" : null,
          }}
        >
          Koniec dnia
        </div>
      </div>
      <div className="account-buttons">
        <SignOutButton />
      </div>
    </div>
  );
};
