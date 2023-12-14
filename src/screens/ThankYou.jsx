import LOGO from "../assets/Logo.png";
import Button from "../components/Button";
import { FiArrowRightCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectEmailResults } from "../features/formSelector";
import Contact from "../assets/Thank/Ca;ll.png";
import { BsFacebook, BsLinkedin, BsYoutube } from "react-icons/bs";
import Navbar from "../components/navbar/Navbar";
import "./thank.css";
import "./Home.css";
const ThankYou = () => {
  const navigate = useNavigate();

  const homePageHandler = () => {
    navigate("/");
  };

  // const {firstName } = useSelector(selectEmailResults)

  return (
    <div className="h-[100%] w-[100%]  bg-[#200F52]">
      {/* Navbar */}
      <Navbar />

      {/* Main div */}
      <div className="thank text-white section__padding">
        <div className="thank-a">
          <h1 className="font-bold text-5xl">Thank You</h1>
          <h3 className="text-base mt-6">
            Thank you so much usernaname , you've done a great thing by
            recording your funeral wishes for your loved ones. We've sent the
            email to usermail@gmail.com. Don't forget to print the email or
            forward it to your family.
          </h3>
          <h3 className="text-base mt-6">
            If it doesn't arrive, please check your spam box.
          </h3>
          {/* button */}
          <div className="thank-btn mt-10">
            <Button
              logo={Contact}
              text={"Contact Us"}
              extraStyles={{
                color: "linear-gradient(92.8deg, #FFA33C 2.8%, #DC6C05 99.98%)",
                border: "1px solid",
                borderColor:
                  "linear-gradient(92.8deg, #FFA33C 2.8%, #DC6C05 99.98%)",
                display: "flex",
                padding: "15px 20px",
                alignItems: "center",
                justifyContent: "space-evenly",
                borderRadius: "50px",
                width: "70%",
                marginRight: "10px",
              }}
            ></Button>
            {/* </div>
          <div className="thank-btn"> */}
            <Button
              logo={Contact}
              text={"Back to Home page"}
              extraStyles={{
                color: "linear-gradient(92.8deg, #FFA33C 2.8%, #DC6C05 99.98%)",
                border: "1px solid",
                borderColor:
                  "linear-gradient(92.8deg, #FFA33C 2.8%, #DC6C05 99.98%)",
                display: "flex",
                padding: "15px 20px",
                alignItems: "center",
                justifyContent: "space-evenly",
                borderRadius: "50px",
                width: "70%",
                cursor: "pointer",
              }}
              onClick={homePageHandler}
            ></Button>
          </div>
          <h3 className="text-base mt-6">
            Click the share buttons below to let people know they can also
            create their Perfect Send-Off
          </h3>
          <div className="thank-sign mx-auto mt-6 ">
            <BsFacebook color="blue" size="40px" />
            <BsLinkedin color="#0077B5" size="40px" />
            <BsYoutube color="red" size="40px" />
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="foot section__margin justify-between items-center text-white px-25">
        <div className="foot_content">
          <div>Copyright ©2022 SunLife. </div>
          <div className="w-[30%]">
            <ul className="flex justify-evenly terms">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
