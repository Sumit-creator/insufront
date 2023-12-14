import { useEffect, useState } from "react";
import FormCheckButton from "./FormCheckButton";
import FormCheckButtonType from "./FormCheckButtonType";

import Traditional from "../assets/page5/traditional.png";
import White from "../assets/page5/white.png";
import Colorful from "../assets/page5/colorful.png";
import TeamColors from "../assets/page5/teamColors.png";

import Button from "./Button";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

import { useDispatch, useSelector } from "react-redux";
import { setAfterService } from "../features/formAction";
import './form.css';
const WakeGathering = [
  {
    text: "Yes",
  },
  {
    text: "No",
  },
];

const TypeOfMemorial = [
  {
    icon: Traditional,
    iconName: "traditional",
    name: "traditional",
    text: "traditional",
    type: "traditional",
  },
  {
    icon: White,
    iconName: "white",
    name: "white",
    text: "white",
    type: "white",
  },
  {
    icon: Colorful,
    iconName: "colorful",
    name: "colorful",
    text: "colorful",
    type: "colorful",
  },
  {
    icon: TeamColors,
    iconName: "Team Colors",
    name: "teamColors",
    text: "teamColors",
  },
];

const ChangeInDecision = [{ text: "Yes" }, { text: "No" }];

const INITIAL_STATE = {
  wakeGatheringIndex: -1,
  wakeGathering: "",
  typeOfMemorialIndex: -1,
  typeOfMemorial: "",
  changeIndex: -1,
  change: "",
};

const Page5 = ({ setPageNumber, pageNumber }) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(INITIAL_STATE);

  useEffect(() => {}, []);

  const backClickHandler = (e) => {
    e.preventDefault();
    setPageNumber(pageNumber - 1);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    if (!userData.wakeGathering || !userData.typeOfMemorial || !userData.change)
      return;
    setPageNumber(pageNumber + 1);
    dispatch(setAfterService(userData));
  };

  return (
    <div className="form_right_c_main text-white">
      <div className="form_right_c">
        <div className="border-b border-[#CDCDCD] form_right_c_a">
          <h1 className="text-[#FFFFFF] text-4xl font-semibold">
            Step 4 : The Wake & Other Wishes
          </h1>
          <p className="text-[#FFFFFF] text-base mt-5">
            All the fields are obligatory for filling in
          </p>
        </div>
        <h2 className="ert">
          Would you like a wake or gathering?
        </h2>
        <FormCheckButton
          formObject={WakeGathering}
          modifyType={"wakeGathering"}
          userData={userData}
          setUserData={setUserData}
          optionType={"wakeGatheringIndex"}
          extraStyles={{
            width: "40%",
          }}
        />
        <h2 className="ert">
          Which type of memorial would you like?
        </h2>
        <FormCheckButtonType
          formObject={TypeOfMemorial}
          modifyType={"typeOfMemorial"}
          userData={userData}
          setUserData={setUserData}
          optionType={"typeOfMemorialIndex"}
          extraStyles={{
            // display: "grid",
            // gridGap: "10px",
            // gridTemplateColumns: "repeat(3, 1fr)",
            // gridTemplateRows: "repeat(2, 1fr)",
          }}
        />
        <h2 className="ert">
          Having to arrange a funeral for a loved one can be stressful, do you
          mind if any of your choices were changed if necessary?
        </h2>
        <FormCheckButton
          formObject={ChangeInDecision}
          modifyType={"change"}
          userData={userData}
          setUserData={setUserData}
          optionType={"changeIndex"}
          extraStyles={{
            width: "40%",
          }}
        />
        <div className="form_right_c_btn">
          <Button
            text={"Back"}
            extraStyles={{
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "center",
              alignItems: "center",
              padding: "15px",
              background:
                "linear-gradient(92.8deg, #FFA33C 2.8%, #DC6C05 99.98%)",
              color: "white",
              cursor: "pointer",
              borderRadius: "20px",
            }}
            onClick={backClickHandler}
          >
            <FiArrowLeftCircle />
          </Button>
          <Button
            text={"Save and continue"}
            extraStyles={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "15px",
              background:
                "linear-gradient(92.8deg, #FFA33C 2.8%, #DC6C05 99.98%)",
              color: "white",
              cursor: "pointer",
              borderRadius: "20px",
            }}
            onClick={clickHandler}
          >
            <FiArrowRightCircle />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page5;
