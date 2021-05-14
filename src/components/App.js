import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { TrainingMenu } from "./Training_menu/training_menu";
import { FirstView } from "./First_view/first_view";
function App() {
  const [menuIsActive, setMenuActive] = useState(false);
  const handleMenu = () => {
    setMenuActive(menuIsActive ? false : true);
  };

  return (
    <div className="main-view">
      <div className="menu-opener" onClick={handleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <TrainingMenu onClick={handleMenu} menuIsActive={menuIsActive} />
      <FirstView />
      {/* <Button type="warning" text="no cześć" onClick={handleClick} />
      <Button type="info" text="no cześć" onClick={handleClick} />
      <Button type="error" text="no cześć" onClick={handleClick} /> */}
    </div>
  );
}

export default App;
