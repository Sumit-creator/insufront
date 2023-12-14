import { useEffect, useState } from "react";
import FormCheckButton from "./FormCheckButton";
import FormCheckButtonType from "./FormCheckButtonType";

import Colorful from "../assets/dress/Colorful.webp";
import TeamColors from "../assets/dress/teamColor.webp";
import Traditional from "../assets/dress/Traditional.webp";
import White from "../assets/dress/White.webp";

import Button from "./Button";

import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

import { useDispatch, useSelector } from "react-redux";
import { setBeforeService } from "../features/formAction";
import { selectBeforeTheFuneral } from "../features/formSelector";
import TextField from "./TextField";
import "./form.css";
const FuneralLocation = [
  {
    text: "Woodland",
  },
  {
    text: "Church",
  },
  {
    text: "Crematorium",
  },
  {
    text: "Others",
  },
];

const CarryInFuneral = [
  {
    text: "true",
  },
  {
    text: "false",
  },
];

const DressCode = [
  {
    icon: Traditional,
    iconName: "Traditional",
    name: "traditional",
    text: "traditional",
    type: "traditional",
  },
  {
    icon: TeamColors,
    iconName: "TeamColors",
    name: "teamColors",
    text: "teamColors",
    type: "teamColors",
  },
  {
    icon: White,
    iconName: "White",
    name: "white",
    text: "white",
    type: "white",
  },
  {
    icon: Colorful,
    iconName: "Colorful",
    name: "colorful",
    text: "colorful",
    type: "colorful",
  },
];

const ArrivalAtFuneral = [
  {
    text: "Traditional Transport (Horse)",
  },
  {
    text: "Other",
  },
];

const INITIAL_STATE = {
  funeralLocationIndex: -1,
  funeralLocation: "",
  carryInFuneralIndex: -1,
  carryInFuneral: "",
  dressCodeForCeremonyIndex: -1,
  dressCodeForCeremony: "",
  arrivalAtFuneralIndex: -1,
  arrivalAtFuneral: "",
  thoughtsOnAshScattering: "",
  extraThoughts: "",
  otherThoughts: "",
  carryCoffin: "",
};

const Page3 = ({ setPageNumber, pageNumber }) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(INITIAL_STATE);

  const beforeTheService = useSelector(selectBeforeTheFuneral);
  const { serviceInYourName } = useSelector(
    (state) => state.form.typeOfFuneral
  );
  useEffect(() => {
    setUserData(beforeTheService);
  }, []);

  const backClickHandler = (e) => {
    e.preventDefault();
    setPageNumber(pageNumber - 1);
  };

  const clickHandler = (e) => {
    e.preventDefault();

    // if (serviceInYourName === "Yes") {
    setPageNumber(pageNumber + 1);
    // } else setPageNumber(pageNumber + 2);
    dispatch(setBeforeService(userData));
  };

  return (
    <div className="form_right_c_main text-white">
      <div className="form_right_c">
        <div className="form_right_c_a border-b border-[#CDCDCD] ">
          <h1 className="text-[#FFFFFF] text-4xl font-semibold">
            Step 2 : Before the service
          </h1>
          <p className="text-[#FFFFFF] text-base mt-5">
            All the fields are obligatory for filling in
          </p>
        </div>
        {serviceInYourName === "Yes" || serviceInYourName === "" ? (
          <>
            <h2 className="ert">
              Where would you like your funeral service/ceremony to be?
            </h2>
            <FormCheckButton
              formObject={FuneralLocation}
              modifyType={"funeralLocation"}
              userData={userData}
              setUserData={setUserData}
              optionType={"funeralLocationIndex"}
            />
            {userData.funeralLocation === FuneralLocation[0].text && (
              <>
                <h2 className="ert">Do you have any preferred Woodland ?</h2>
                <TextField
                  placeHolder={"Answer Here"}
                  setUserData={setUserData}
                  userData={userData}
                  type={"text"}
                  updateField={"extraThoughts"}
                  extraStyles={{
                    color: "black",
                  }}
                />
              </>
            )}
            {userData.funeralLocation === FuneralLocation[1].text && (
              <>
                <h2 className="ert">Do you have any preferred Church ?</h2>
                <TextField
                  placeHolder={"Answer Here"}
                  setUserData={setUserData}
                  userData={userData}
                  type={"text"}
                  updateField={"extraThoughts"}
                  extraStyles={{
                    color: "black",
                  }}
                />
              </>
            )}
            {userData.funeralLocation === FuneralLocation[2].text && (
              <>
                <h2 className="ert">Do you have any preferred Cremeation ?</h2>
                <TextField
                  placeHolder={"Answer Here"}
                  setUserData={setUserData}
                  userData={userData}
                  type={"text"}
                  updateField={"extraThoughts"}
                  extraStyles={{
                    color: "black",
                  }}
                />
              </>
            )}
            {userData.funeralLocation === FuneralLocation[3].text && (
              <>
                <TextField
                  placeHolder={"Answer Here"}
                  setUserData={setUserData}
                  userData={userData}
                  type={"text"}
                  updateField={"otherThoughts"}
                  extraStyles={{
                    color: "black",
                    marginTop: "20px",
                  }}
                />
                <h2 className="ert">
                  Do you have any preferred location for your burial ?
                </h2>
                <TextField
                  placeHolder={"Answer Here"}
                  setUserData={setUserData}
                  userData={userData}
                  type={"text"}
                  updateField={"extraThoughts"}
                  extraStyles={{
                    color: "black",
                  }}
                />
              </>
            )}
            {serviceInYourName === "" && (
              <>
                <h2 className="ert">
                  Would you like the coffin to be carried into the ceremony?
                </h2>
                <FormCheckButton
                  formObject={CarryInFuneral}
                  modifyType={"carryInFuneral"}
                  userData={userData}
                  setUserData={setUserData}
                  optionType={"carryInFuneralIndex"}
                />
              </>
            )}
            {userData.carryInFuneral === "Yes" && (
              <>
                <h2 className="ert">If Yes, by whom?</h2>
                <TextField
                  placeHolder={"Answer Here"}
                  setUserData={setUserData}
                  userData={userData}
                  type={"text"}
                  updateField={"carryCoffin"}
                  extraStyles={{
                    color: "black",
                  }}
                />
              </>
            )}
            {serviceInYourName !== "" && (
              <>
                <h2 className="ert">
                  Any Thoughts On Where The Ashes Could Be Scattered ?
                </h2>
                <h3 className="mt-5 text-left w-[65%] mb-4">
                  If You don't mind please note that here
                </h3>
                <TextField
                  placeHolder={"Answer Here"}
                  setUserData={setUserData}
                  userData={userData}
                  type={"text"}
                  updateField={"thoughtsOnAshScattering"}
                  extraStyles={{
                    color: "black",
                  }}
                />
              </>
            )}
            <h2 className="ert">
              Would you like a dress code for the ceremony ?
            </h2>
            <FormCheckButtonType
              formObject={DressCode}
              modifyType={"dressCodeForCeremony"}
              userData={userData}
              setUserData={setUserData}
              optionType={"dressCodeForCeremonyIndex"}
              extraStyles={
                {
                  // display: "grid",
                  // gridGap: "10px",
                  // gridTemplateColumns: "repeat(2, 1fr)",
                  // gridTemplateRows: "repeat(2, 1fr)",
                }
              }
            />
            <h2 className="ert">
              How would you like to arrive at the funeral ?
            </h2>
            <FormCheckButton
              formObject={ArrivalAtFuneral}
              modifyType={"arrivalAtFuneral"}
              userData={userData}
              setUserData={setUserData}
              optionType={"arrivalAtFuneralIndex"}
            />
          </>
        ) : (
          <>
            <h2 className="ert">
              Any Thoughts On Where The Ashes Could Be Scattered ?
            </h2>
            <h3 className="mt-10 text-left w-[65%] mb-4">
              If You don't mind please note that here
            </h3>
            <TextField
              placeHolder={"Answer Here"}
              setUserData={setUserData}
              userData={userData}
              type={"text"}
              updateField={"thoughtsOnAshScattering"}
              extraStyles={{
                color: "black",
              }}
            />
          </>
        )}
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

export default Page3;
