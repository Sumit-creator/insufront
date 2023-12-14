import LOGO from "../assets/Logo.png";
import Button from "../components/Button";
import { FiArrowRightCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/form");
  };

  return (
    <div className="home bg-[#1D0D52]">
      {/* NAVBAR */}
      <Navbar />

      {/* Main body */}
      <div className="main section__padding">
        <div className="main-btn">
          <Button
            logo={LOGO}
            text={"Send-off wish"}
            extraStyles={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              padding: "15.7146px 30px",
              background: "#757194",
              borderRadius: "15.7146px",
              fontSize: "31px",
              color: "white",
              fontWeight: "600",
              gap: "2px",
              whiteSpace: "nowrap",
            }}
          />
        </div>
        <div className="main-text">
          <div className="lmg">
            <img src="src/assets/home/sparkleLeft.png"></img>
            <img src="src/assets/home/sparkle.png"></img>
          </div>
          <h2 className="font-bold mt-5">
            The simple way to record your funeral wishes
          </h2>
          <p className="text-[#DCDCDC] text-base mt-5">
            Thinking about what funeral you'd like is never easy. But deciding
            now will help your family at a difficult time and help ensure your
            wishes are honored. My Perfect Send-Off is a simple way to make some
            important choices, giving you a valuable document you can keep with
            your will or send to a loved one.
          </p>
        </div>
        <div className="main-btn-di font-bold">
          <Button
            text={"Plan Your Send-off"}
            extraStyles={{
              display: "flex",
              justifyContent: "center",
              fontSize: "20px",
              alignItems: "center",
              gap: "5px",
              padding: "15px",
              background:
                "linear-gradient(92.8deg, #FFA33C 2.8%, #DC6C05 99.98%)",
              borderRadius: "600px",
              color: "white",
              flexDirection: "column",
              height: "160px",
              width: "160px",
              cursor: "pointer",
            }}
            onClick={clickHandler}
          >
            <FiArrowRightCircle />
          </Button>
        </div>
      </div>
      {/* FOOTER */}
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

export default Home;
