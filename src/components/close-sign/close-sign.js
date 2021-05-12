import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./close-sign.scss";
import PropTypes from "prop-types";

export const CloseSign = ({ onClick }) => {
  return (
    <div className="closeSign" onClick={onClick}>
      <FontAwesomeIcon icon={faTimes} />
    </div>
  );
};

CloseSign.propTypes = {
  onClick: PropTypes.func.isRequired,
};
