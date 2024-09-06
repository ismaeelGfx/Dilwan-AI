import Header from "../mocks/Header";
import { Outlet } from "react-router-dom";
import Footer from "../mocks/Footer";

 

const Layout = () => {
  

  return (
    <>
      <Header />
      
       

      <Outlet />

      
      <Footer />
    </>
  );
};

export default Layout;
