import "./menu_opener.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export const MenuOpener = ({ handleMenu }) => {
  return (
    <div className="menu-opener" onClick={handleMenu}>
      <FontAwesomeIcon icon={faBars} />
    </div>
  );
};
