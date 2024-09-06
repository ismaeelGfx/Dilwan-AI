import Container from "../components/Container";
import logo from "../assets/logo.png";
import Typography from "../components/Typography";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();

  const pricingNavigate = () => {
    navigate("/pricing");
  };

  const contactNavigate = () => {
    navigate("/contact-us");
  };

  const homeNavigate = () => {
    navigate("/home");
  };
  return (
    <footer>
      <Container>
        <div className="footer-top">
          <div className="footer-left">
            <div className="footer-logo">
              <img src={logo} alt="" />
            </div>
            <Typography
              variant="parapgraph"
              extraClasses="footer-text-1"
              text="Join our newsletter to stay up to date on features and releases."
            />

            <div className="input-cont">
              <input type="text" placeholder="Enter your email" />
              <div className="sec-four-started">
                <Typography variant="parapgraph" text="Subscribe" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="12"
                  viewBox="0 0 15 12"
                  fill="none"
                >
                  <path
                    d="M14.5303 6.53033C14.8232 6.23744 14.8232 5.76256 14.5303 5.46967L9.75736 0.696699C9.46447 0.403806 8.98959 0.403806 8.6967 0.696699C8.40381 0.989593 8.40381 1.46447 8.6967 1.75736L12.9393 6L8.6967 10.2426C8.40381 10.5355 8.40381 11.0104 8.6967 11.3033C8.98959 11.5962 9.46447 11.5962 9.75736 11.3033L14.5303 6.53033ZM0 6.75H14V5.25H0V6.75Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>

            <Typography
              variant="parapgraph"
              text="By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company."
            />
          </div>
          <div className="footer-right">
            <div className="list-cont">
              <Typography variant="sub-heading" text="BROWSE" />

              <ul>
                <li onClick={homeNavigate}>Home</li>
                <li onClick={pricingNavigate}>Pricing</li>
                <li onClick={contactNavigate}>Contact</li>
              </ul>
            </div>

            <div className="list-cont">
              <Typography variant="sub-heading" text="About" />

              <ul>
                <li>team</li>
                <li>sells</li>
                <li>purchase</li>
              </ul>
            </div>

            <div className="list-cont">
              <Typography variant="sub-heading" text="LEGAL" />

              <ul>
                <li>TERMS and condition</li>
                <li>privacy policy</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <Typography
            extraClasses="footer-bottom-text-1"
            variant="span"
            text="© 2024  All rights reserved."
          />
          <Typography
            extraClasses="footer-bottom-text-2"
            variant="span"
            text="Privacy Policy"
          />
          <Typography
            extraClasses="footer-bottom-text-3"
            variant="span"
            text="Terms of Service"
          />
          <Typography
            extraClasses="footer-bottom-text-4"
            variant="span"
            text="Cookies Settings"
          />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
