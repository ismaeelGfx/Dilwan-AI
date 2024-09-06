import Button from "../components/Button";
import Typography from "../components/Typography";
import login from "../assets/login.png";
import { useState } from "react";
import axios from "axios";
import { LoginData, LoginRegProps } from "../types/types";
import { motion } from "framer-motion";
import { baseURL } from "../BaseUrl/baseurl";
import { useNavigate } from "react-router-dom";
 
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const Login: React.FC<LoginRegProps> = ({ handleClick, outsideClick }) => {
 const navigate = useNavigate()
 
  const [ loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setLoginData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
       
      const response = await axios.post(`${baseURL}/login`, loginData);
      console.log(response.data.token);
      Decrypt_Token(response.data.token)
    } catch (error:any) {
      console.error("There was an error logging in:", error);
      // console.log(error.response.data.message,"error ts")
      showAlert("Error!",error.response.data.message,"error")
       
    
      
    }
  };
  
  
  const Decrypt_Token = async(token:any)=>{

    const response = await axios.get(`${baseURL}/protected`,
      {
      headers: {'Authorization': `Bearer ${token}`}
      }
    )

    if( response)
    {
      console.log(response.data)
      sessionStorage.setItem("User_Data",response.data.id)

      showAlert("Success!","Successfully Logged In.","success")

      navigate('/ts')

     

    }
    else{
      console.error('Failed to Fetch Details')
   
    }

  } 
;



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
   
      <div className="back-click"></div>
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 40 }}
        exit={{ opacity: 0, y: -20 }}
        className="login-h"
      >
        <div ref={outsideClick} className="login-main">
          <p onClick={handleClick} className="clsoe">
            X
          </p>
          <div className="login-left-cont">
            <Typography variant="main-heading" text="LOGIN" />

            <form onSubmit={handleSubmit}>
              <input
                name="email"
                value={loginData.email}
                type="text"
                placeholder="Email*"
                onChange={handleChange}
              />
              <input
                name="password"
                value={loginData.password}
                type="password"
                placeholder="Password*"
                onChange={handleChange}
              />
              <div className="remeber-forgot-cont">
                <label htmlFor="rememberMe">
                  <input
                    id="rememberMe"
                    name="rememberMe"
                    checked={loginData.rememberMe}
                    type="checkbox"
                    onChange={handleChange}
                  />
                  Remember me
                </label>

                <span>Forgot Password?</span>
              </div>

              <Button text="Login" />

              {/* <div className="login-link-cont">
                <Typography
                  variant="parapgraph"
                  text="Don't have an account?"
                />{" "}
                <a onClick={registerNavigate}>Register</a>
              </div> */}
            </form>
          </div>
          <div className="login-right-cont">
            <img src={login} alt="" loading="lazy" />
          </div>
        </div>
      </motion.section>
    </>
    // </Container>
  );
};

export default Login;
