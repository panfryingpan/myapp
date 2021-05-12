import "./training_menu.scss";
import { CloseSign } from "../close-sign/close-sign";
import React, { useState } from "react";
import { Logo } from "../Logo/logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";

export const TrainingMenu = ({ onClick, menuIsActive }) => {
  const [routesActive, setRoutesIsActive] = useState(false);
  const [elements, elementActive] = useState({
    boulders: false,
    inside: false,
    scoreBoard: false,
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
        scoreBoard: false,
        endDay: false,
      });
    }
    if (el === "inside") {
      elementActive({
        boulders: false,
        inside: true,
        scoreBoard: false,
        endDay: false,
      });
    }
    if (el === "scoreBoard") {
      elementActive({
        boulders: false,
        inside: false,
        scoreBoard: true,
        endDay: false,
      });
    }

    if (el === "endDay") {
      elementActive({
        boulders: false,
        inside: false,
        scoreBoard: false,
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
            Trasy
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
          className="scoreboard"
          onClick={() => {
            handleClickedElement("scoreBoard");
          }}
          style={{
            borderBottom: elements.scoreBoard ? "2px solid #40b3a2" : null,
          }}
        >
          Scoreboard
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
    </div>
  );
};
