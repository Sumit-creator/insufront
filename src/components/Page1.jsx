import { useDispatch } from "react-redux";
import LOGO from "../assets/Logo.png";
import Graveyard from "../assets/graveyard.png";
import Creamation from "../assets/creamation.png";
import BodyScience from "../assets/bodyScience.png";
import { setType } from "../features/formAction";
import { useEffect, useState } from "react";
import FormCheckButtonType from "./FormCheckButtonType";
import Button from "./Button";
import './form.css';

const FormPageObject = [
  {
    icon: Graveyard,
    iconName: "Graveyard",
    name: "graveyard",
    text: "I would like a burial",
    type: "burial",
  },
  {
    icon: Creamation,
    iconName: "Creamation",
    name: "creamation",
    text: "I would like a creamation",
    type: "creamation",
  },
  {
    icon: BodyScience,
    iconName: "BodyScience",
    name: "body science",
    text: "Donate my body to science",
    type: "bodyScience",
  },
];

const INITIAL_STATE = {
  typeNumber: null,
  type: "",
};

const Page1 = ({ setPageNumber, pageNumber }) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(INITIAL_STATE);

  useEffect(() => {
    if (userData.typeNumber !== null) {
      setPageNumber(pageNumber + 1);
      // dispatch(setType(FormPageObject[userData.typeNumber].type));
      // console.log(userData.type);
      dispatch(setType(userData.type));
    }
  }, [userData]);

  // const clickHandler = (e) => {
  //   if (userData.typeNumber !== null) {
  //   }
  // };

  return (
    <div className="form_right form_right_c_main ">
      <div className="form_right_a form_right_c">
        <div className="form_btn"> 
          <Button
            logo={LOGO}
            text={"Send-off"}
            extraStyles={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              padding: "15.7146px",
              background: "#757194",
              borderRadius: "15.7146px",
              fontSize: "31px",
              color: "white",
              fontWeight: "600",
              whiteSpace:"nowrap",
              gap:"3px",
            }}
          />
        </div>
        <h1 className="text-[#FFFFFF] text-2xl font-bold">
          First of all please choose one of the following
        </h1>
        <div className="fiu">
        <FormCheckButtonType
          formObject={FormPageObject}
          modifyType={"type"}
          userData={userData}
          setUserData={setUserData}
          optionType={"typeNumber"}
          // extraStyles={{
          //   display: "flex",
          //   flexDirection:"row",
          //   gap:"10px",
          // }}
        />
        </div>
      </div>
    </div>
  );
};

export default Page1;
