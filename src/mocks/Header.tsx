import Container from "../components/Container";
import logo from "../assets/logo.png";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { MutableRefObject, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Login from "../main pages/Login";
import Register from "../main pages/Register";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [regOpen, setRegOpen] = useState(false);

  const outsideClick: MutableRefObject<HTMLUListElement | null> = useRef(null);
  const outsideClickAlt: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const closeNav = (e: MouseEvent) => {
    if (open && !outsideClick.current?.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  const closeLogin = (e: MouseEvent) => {
    if (loginOpen && !outsideClickAlt.current?.contains(e.target as Node)) {
      setLoginOpen(false);
    }
  };

  const closeRegister = (e: MouseEvent) => {
    if (regOpen && !outsideClickAlt.current?.contains(e.target as Node)) {
      setRegOpen(false);
    }
  };
  document.addEventListener("mousedown", closeNav);
  document.addEventListener("mousedown", closeLogin);
  document.addEventListener("mousedown", closeRegister);

  const loginToggle = () => {
    setLoginOpen(!loginOpen);
  };

  const regToggle = () => {
    setRegOpen(!regOpen);
  };
  const prevToggle = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();

  const pricingNavigate = () => {
    navigate("/pricing");
  };

  const contactNavigate = () => {
    navigate("/contact-us");
  };

  const contestNavigate = () => {
    navigate("/contests");
  };

  const homeNavigate = () => {
    navigate("/home");
  };

  const user_details= sessionStorage.getItem('User_Data')

  const Logout=()=>{
    showAlert("Success!","Log Out Successfully!","success")
    setTimeout(() => {
      
      sessionStorage.clear()
      window.location.reload()
    }, 2000);
  }

  const MySwal = withReactContent(Swal);

const showAlert = (p:any,error:any,s:any) => {
  MySwal.fire({
    title: p,
    text: error,
    icon: s,
    timer: 3000, // 3 seconds
    timerProgressBar: true, // Shows a progress bar
    showConfirmButton: false, // Hides the confirm button
    background: '#232B2B', // Set background color to black
    color: '#fff', 
  });
};

  return (
    <div className="header-main">
      <Container>
        <header className="header-cont">
          <div className="header-logo-cont">
            <img src={logo} alt="" />
          </div>

          <ul className="header-ul">
            <li
              onClick={homeNavigate}
              className={window.location.pathname === "/home" ? "active" : ""}
            >
              Home
            </li>
            <li
              onClick={pricingNavigate}
              className={
                window.location.pathname.includes("/pricing") ? "active" : ""
              }
            >
              Pricing
            </li>
            <li
              onClick={contactNavigate}
              className={
                window.location.pathname.includes("/contact-us") ? "active" : ""
              }
            >
              Contact
            </li>

            <li
              onClick={contestNavigate}
              className={
                window.location.pathname.includes("/contests") ? "active" : ""
              }
            >
              Contests
            </li>

          </ul>
          <AnimatePresence>
            {open && (
              <motion.ul
                ref={outsideClick}
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: {
                    opacity: 1,
                    width: "70%",
                    transition: { duration: 0.4 },
                  },
                  collapsed: {
                    opacity: 0,
                    width: 0,
                    transition: { duration: 0.4 },
                  },
                }}
                className="nav-link"
              >
                <li
                  onClick={() => {
                    homeNavigate();
                    prevToggle();
                  }}
                >
                  Home
                </li>
                <li
                  onClick={() => {
                    pricingNavigate();
                    prevToggle();
                  }}
                >
                  Pricing
                </li>
                <li
                  onClick={() => {
                    contactNavigate();
                    prevToggle();
                  }}
                >
                  Contact
                </li>

                <li
                  onClick={() => {
                    loginToggle();
                    prevToggle();
                  }}
                >
                  Login
                </li>

                <li
                  onClick={() => {
                    regToggle();
                    prevToggle();
                  }}
                >
                  Sign Up
                </li>
              </motion.ul>
            )}
          </AnimatePresence>

          {
           !user_details &&
<>

<Button handleClick={loginToggle} text="Login" />
<Button handleClick={regToggle} text="Sign Up" />
</>

          }

{
user_details &&
          <Button handleClick={Logout} text="Log Out" />
}
          <svg
            onClick={prevToggle}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 nav-btn"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
        </header>
        <AnimatePresence>
          {loginOpen && (
            <Login outsideClick={outsideClickAlt} handleClick={loginToggle} />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {regOpen && (
            <Register outsideClick={outsideClickAlt} handleClick={regToggle} />
          )}
        </AnimatePresence>
      </Container>
    </div>
  );
};

export default Header;
