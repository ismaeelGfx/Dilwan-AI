import Button from "../components/Button";
import Typography from "../components/Typography";
import login from "../assets/login.png";
import { useState } from "react";
import { RegisterData, LoginRegProps } from "../types/types";
import axios from "axios";
import { motion } from "framer-motion";
 
import { baseURL } from "../BaseUrl/baseurl";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const Register: React.FC<LoginRegProps> = ({ handleClick, outsideClick }) => {
  const [regData, setRegData] = useState<RegisterData>({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegData({ ...regData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (
        regData.password === regData.confirmpassword &&
        regData.password !== ""
      ) {
        const response = await axios.post(`${baseURL}/signup`, regData);
        console.log(response.data);
        showAlert("Success!","Sign Up Successfully!","success")
      } else {
    
        console.log("Passwords do not match");
        showAlert("Error!","Passwords do not match","error")
      }
    } catch (error:any) {
      console.error("There was an error logging in:", error);

      showAlert("Error!",error.response.data.message,"error")
    }
  };


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
    // <Container>
    <>
   
      {" "}
      <div className="back-click"></div>
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 40 }}
        exit={{ opacity: 0, y: -20 }}
        className="login-h register-h"
      >
        <div ref={outsideClick} className="login-main register-main">
          <p onClick={handleClick} className="clsoe">
            X
          </p>
          <div className="login-left-cont register-left-cont">
            <Typography variant="main-heading" text="SIGN UP" />

            <form onSubmit={handleSubmit}>
              <input
                name="name"
                value={regData.name}
                onChange={handleChange}
                type="text"
                placeholder="Name*"
              />
              <input
                name="email"
                value={regData.email}
                onChange={handleChange}
                type="text"
                placeholder="Email*"
              />
              <input
                name="password"
                value={regData.password}
                onChange={handleChange}
                type="password"
                placeholder="Password*"
              />
              <input
                name="confirmpassword"
                value={regData.confirmpassword}
                onChange={handleChange}
                type="password"
                placeholder="Confirm Password*"
              />
              <Button text="Sign Up" />
              {/* <div className="register-link-cont">
                <Typography variant="parapgraph" text="Have an account?" />{" "}
                <a onClick={loginNavigate}>Login</a>
              </div> */}
            </form>
          </div>
          <div className="register-right-cont">
            <img src={login} alt="" loading="lazy" />
          </div>
        </div>
        
      </motion.section>
    </>
    // </Container>
  );
};

export default Register;
