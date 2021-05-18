import React, { useState } from "react";
import { AuthUserContext } from "../utils/Session";
import { TrainingMenu } from "./Training_menu/training_menu";
import { FirstView } from "./First_view/first_view";
import { withAuthentication } from "../utils/Session";
import { AuthUserView } from "./Auth_User_View/auth_user_view";

import { MenuOpener } from "./Menu_Opener/menu_opener";
const App = (props) => {
  const [menuIsActive, setMenuActive] = useState(false);
  const handleMenu = () => {
    setMenuActive(menuIsActive ? false : true);
  };

  return (
    <div className="main-view">
      <AuthUserContext.Consumer>
        {(authUser) =>
          authUser ? <MenuOpener handleMenu={handleMenu} /> : null
        }
      </AuthUserContext.Consumer>

      <AuthUserContext.Consumer>
        {(authUser) =>
          authUser ? (
            <TrainingMenu onClick={handleMenu} menuIsActive={menuIsActive} />
          ) : null
        }
      </AuthUserContext.Consumer>
      <AuthUserContext.Consumer>
        {(authUser) => (authUser ? <AuthUserView /> : <FirstView />)}
      </AuthUserContext.Consumer>
      {/* <Button type="warning" text="no cześć" onClick={handleClick} />
      <Button type="info" text="no cześć" onClick={handleClick} />
      <Button type="error" text="no cześć" onClick={handleClick} /> */}
    </div>
  );
};

export default withAuthentication(App);
