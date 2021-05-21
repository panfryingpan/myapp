import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { withFirebase } from "../../utils/Firebase";
import "./auth_user_view.scss";

const AuthUserView = (props) => {
  let user = props.firebase.auth.currentUser.uid;
  const [routeName, setRouteName] = useState("");
  const [routeDescription, setRouteDescription] = useState("");
  const [routeLvl, setRouteLvl] = useState("6A+");
  const [routeHandles, setRouteHandles] = useState("");
  const [routeArr, setRouteArr] = useState([]);
  const database = props.firebase.db.ref(`routes/${user}/`);

  const handleRoutes = () => {
    database.on("value", (e) => {
      let routeArrHelper = [];
      e.forEach((el) => {
        let test = { ...el.val(), key: el.key };
        routeArrHelper.push(test);
      });

      setRouteArr(routeArrHelper);
    });
  };
  useEffect(() => {
    handleRoutes();
  }, []);
  const handleDeleteRoute = (key) => {
    props.firebase.db.ref(`routes/${user}/${key}`).remove();
    handleRoutes();
  };
  const onSubmit = () => {
    database.push({
      routeName: routeName,
      routeDescription: routeDescription,
      routelvl: routeLvl,
      routeHandles: routeHandles,
    });
    setRouteName("");
    setRouteDescription("");
    setRouteLvl("6A+");
    setRouteHandles("");
  };
  if (props.elements.addRoute) {
    return (
      <div className="auth-view__wrapper">
        <div className="addRoute__container">
          <div className="addRoute__header">
            <button onClick={() => onSubmit()}>Dodaj drogę</button>
          </div>
          <div className="addRoute__about">
            <form>
              <label>
                Nazwa drogi
                <input
                  type="text"
                  placeholder="Wpisz nazwę drogi"
                  value={routeName}
                  onChange={(event) => setRouteName(event.target.value)}
                />
              </label>
              <label>
                Opis drogi
                <textarea
                  placeholder="Wpisz opis drogi. Np. gdzie się znajduje itp."
                  name="Opis drogi"
                  value={routeDescription}
                  onChange={(event) => setRouteDescription(event.target.value)}
                />
              </label>
            </form>
          </div>
          <div className="addRoute__settings">
            <form>
              <label>
                Poziom drogi:
                <select
                  name="route level"
                  id="RouteLvl"
                  value={routeLvl}
                  onChange={(event) => setRouteLvl(event.target.value)}
                >
                  <option value="4">4</option>
                  <option value="5">5+</option>
                  <option value="6A">6A</option>
                  <option value="6A+">6A+</option>
                  <option value="6B">6B</option>
                  <option value="6B+">6B+</option>
                  <option value="6C">6C</option>
                  <option value="6C+">6C+</option>
                  <option value="7A">7A</option>
                  <option value="7A+">7A+</option>
                </select>
              </label>
              <label>
                Liczba przechwytów:
                <input
                  type="number"
                  value={routeHandles}
                  onChange={(event) => setRouteHandles(event.target.value)}
                />
              </label>
            </form>
          </div>
        </div>
      </div>
    );
  }
  if (props.elements.yourRoutes) {
    return (
      <div className="auth-view__wrapper">
        <ul>
          {routeArr.map((el) => {
            return (
              <li key={el.key}>
                <p>
                  <span>Nazwa:</span> &nbsp;{el.routeName}
                </p>
                <p>
                  <span>Opis:</span> &nbsp;{el.routeDescription}
                </p>
                <p>
                  <span>Poziom:</span>&nbsp; {el.routelvl}
                </p>
                <p>
                  <span>Przechwyty:</span>&nbsp; {el.routeHandles}
                </p>
                <div onClick={() => handleDeleteRoute(el.key)}>
                  <FontAwesomeIcon icon={faTrash} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return <div className="auth-view__wrapper"></div>;
  }
};

export default withFirebase(AuthUserView);
