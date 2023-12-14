import { useEffect, useState } from "react";
import FormCheckButton from "./FormCheckButton";
import FormCheckButtonType from "./FormCheckButtonType";

import Traditional from "../assets/coffins/Traditional.webp";
import Wicker from "../assets/coffins/wicker.webp";
import American from "../assets/coffins/American.webp";
import Envorimental from "../assets/coffins/Cardboard.webp";
import Personalised from "../assets/coffins/Personlised.webp";
import Button from "./Button";
import { FiArrowRightCircle } from "react-icons/fi";

import { useDispatch, useSelector } from "react-redux";
import { setTypeOfFuneral } from "../features/formAction";
import { selectTypeOfFuneral } from "../features/formSelector";
import './form.css'
const CeremonyType = [
  {
    text: "Religious",
  },
  {
    text: "Non-Religious",
  },
  {
    text: "Other",
  },
];

const FuneralType = [
  {
    text: "Traditional",
  },
  {
    text: "Celebratory",
  },
  {
    text: "Other",
  },
];

const CoffinType = [
  {
    icon: Traditional,
    iconName: "Traditional",
    name: "traditional",
    text: "Traditional",
    type: "traditional",
  },
  {
    icon: Wicker,
    iconName: "Wicker",
    name: "wicker",
    text: "Wicker",
    type: "wicker",
  },
  {
    icon: American,
    iconName: "American",
    name: "american",
    text: "American",
    type: "american",
  },
  {
    icon: Envorimental,
    iconName: "Envorimental",
    name: "envorimental",
    text: "Envorimental",
    type: "envorimental",
  },
  {
    icon: Personalised,
    iconName: "Personalised",
    name: "personalised",
    text: "Personalised",
    type: "personalised",
  },
];

const CoffinLocation = [
  {
    text: "Home",
  },
  {
    text: "Chapel of Rest (Funeral Parlour)",
  },
];

const DressingStyle = [
  {
    text: "My Own Clothes",
  },
  {
    text: "Robe",
  },
];

const ServiceInYourName = [
  {
    text: "Yes",
  },
  {
    text: "No",
  },
];

const INITIAL_STATE = {
  ceremonyTypeIndex: -1,
  ceremonyType: "",
  funeralIndex: -1,
  funeralType: "",
  additionalFuneralType: "",
  coffinTypeNumber: -1,
  coffinType: "",
  coffinLocationNumber: -1,
  coffinLocation: "",
  dressingStyleNumber: -1,
  dressingType: "",
  serviceInYourName: "",
  serviceInYourNameIndex: -1,
};

const Page2 = ({ setPageNumber, pageNumber }) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(INITIAL_STATE);
  const type = useSelector((state) => state.form.type);
  const typeOfFuneral = useSelector(selectTypeOfFuneral);

  useEffect(() => {
    setUserData(typeOfFuneral);
  }, []);

  const clickHandler = (e) => {
    e.preventDefault();
    if (
      (!userData.ceremonyType ||
        !userData.funeralType ||
        !userData.coffinType ||
        !userData.coffinLocation ||
        !userData.dressingType) &&
      type !== "bodyScience"
    ) {
      console.log(type);
      return;
    }
    setPageNumber(pageNumber + 1);
    dispatch(setTypeOfFuneral(userData));
  };

  return (
    <div className="form_right_c_main text-[#FFFFFF]">
      <div className="form_right_c ">
        <div className="form_right_c_a border-b border-[#CDCDCD] ">
          <h1 className="text-[#FFFFFF] text-4xl font-semibold">
            Step 1 : Select Ceremony Type
          </h1>
          <p className="text-[#FFFFFF] text-base mt-5">
            All the fields are obligatory for filling in
          </p>
        </div>
        {type === "bodyScience" && (
          <>
            <h2 className="ert ">
              Would You Like a Service In Your Memory ?
            </h2>
            <div className="w-[70%]">
            <FormCheckButton
              formObject={ServiceInYourName}
              modifyType={"serviceInYourName"}
              userData={userData}
              setUserData={setUserData}
              optionType={"serviceInYourNameIndex"}
              extraStyles={{
                minWidth: "100px",
              }}
            />
            </div>
          </>
        )}
        {((type === "bodyScience" && userData.serviceInYourName === "Yes") ||
          type !== "bodyScience") && (
          <>
            <h2 className="ert">
              What type of Ceremony do you want ?
            </h2>
            <div className="">
            <FormCheckButton
              formObject={CeremonyType}
              modifyType={"ceremonyType"}
              userData={userData}
              setUserData={setUserData}
              optionType={"ceremonyTypeIndex"}
            />
            </div>
            <h2 className="ert">
              What would you like your funeral to be ?
            </h2>
            <FormCheckButton
              formObject={FuneralType}
              modifyType={"funeralType"}
              userData={userData}
              setUserData={setUserData}
              optionType={"funeralIndex"}
            />
          </>
        )}
        {type !== "bodyScience" && (
          <>
            <h2 className="ert">
              What type of coffin do you want ?
            </h2>
            <FormCheckButtonType
              formObject={CoffinType}
              modifyType={"coffinType"}
              userData={userData}
              setUserData={setUserData}
              optionType={"coffinTypeNumber"}
              extraStyles={{
                // display: "grid",
                // gridGap: "10px",
                // gridTemplateColumns: "repeat(3, 1fr)",
                // gridTemplateRows: "repeat(2, 1fr)",
              }}
            />
            <h2 className="ert">
              Where would you like the coffin to be the night before the
              funeral?
            </h2>
            <FormCheckButton
              formObject={CoffinLocation}
              modifyType={"coffinLocation"}
              userData={userData}
              setUserData={setUserData}
              optionType={"coffinLocationNumber"}
            />
            <h2 className="ert">
              How would you like to be dressed?
            </h2>
            <FormCheckButton
              formObject={DressingStyle}
              modifyType={"dressingType"}
              userData={userData}
              setUserData={setUserData}
              optionType={"dressingStyleNumber"}
            />
          </>
        )}
        <div className="mt-7"></div>
        <Button
          text={"Save and continue"}
          extraStyles={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "25px",
            background:
              "linear-gradient(92.8deg, #FFA33C 2.8%, #DC6C05 99.98%)",
            color: "white",
            cursor: "pointer",
            borderRadius: "30px",
            marginTop: "20px",
            gap: "1rem",
            marginBottom: "20px",
          }}
          onClick={clickHandler}
        >
          <FiArrowRightCircle />
        </Button>
      </div>
    </div>
  );
};

export default Page2;
