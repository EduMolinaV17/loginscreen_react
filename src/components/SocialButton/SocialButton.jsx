import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";

const SocialButton = ({ socialicon }) => {
  return (
    <>
    <button className="icon">{socialicon === "facebook" && (
        <FontAwesomeIcon icon={faFacebook} size="3x" />
      )}
      {socialicon === "github" && <FontAwesomeIcon icon={faGithub} size="3x" />}
      {socialicon === "linkedin" && (
        <FontAwesomeIcon icon={faLinkedin} size="3x" />
      )}</button>
    </>
  );
};
SocialButton.propTypes = {
  socialicon: PropTypes.oneOf(["facebook", "github", "linkedin"]).isRequired,
};

export default SocialButton;
