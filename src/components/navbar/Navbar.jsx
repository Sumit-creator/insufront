import React,{useState} from 'react'
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from "../../assets/Logo.png";
import './navbar.css'
import Button from '../Button';
const Menu =()=> (
  <>
          <p><a href="#about">About Us</a></p>
          <p><a href="#contact">Contact Us</a></p>
  </>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar border-b-[1px] border-[#FFFFFF66]">
        <div className="navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>

      <div className="navbar-links">
        <div className="navbar-links_container">
          <Menu  />
        </div>
      </div>
      <div className="navbar-sign">
      <Button
                text={"08081416933"}
                extraStyles={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "15px 20px",
                  background:
                    "linear-gradient(92.8deg, #FFA33C 2.8%, #DC6C05 99.98%)",
                  borderRadius: "50px",
                  color: "white",
                }}
              />
     </div>
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={()=>setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={()=>setToggleMenu(true)} />
        }
        {toggleMenu &&(
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_conatiner-links">
                <Menu/>
                <div className="navbar-menu_container-links-sign">
                <Button
                text={"08081416933"}
                extraStyles={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "15px 20px",
                  background:
                    "linear-gradient(92.8deg, #FFA33C 2.8%, #DC6C05 99.98%)",
                  borderRadius: "50px",
                  color: "white",
                }}
              />
              
     </div>
            </div>

          </div>
        )}
      
      </div>
     
    </div>
  );
};

export default Navbar;