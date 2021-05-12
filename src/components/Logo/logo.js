import PropTypes from "prop-types";
import image from "./logo.png";
export const Logo = ({ size }) => {
  const logoStyles = {
    width: size + "px",
    height: size + "px",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
  };
  return <div style={logoStyles}></div>;
};

Logo.propTypes = {
  size: PropTypes.number.isRequired,
};
