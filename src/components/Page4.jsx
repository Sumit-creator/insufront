import { useEffect, useState } from "react";
import FormCheckButton from "./FormCheckButton";
import FormCheckButtonType from "./FormCheckButtonType";

import Charity from "../assets/page4/charity.png";
import Flowers from "../assets/page4/flowers.png";

import Button from "./Button";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

import { useDispatch, useSelector } from "react-redux";
import { selectTheService } from "../features/formSelector";
import { setTheService } from "../features/formAction";
import './form.css';
const SongsHymns = [
  {
    text: "Yes",
  },
  {
    text: "No",
  },
];

const ExtraWords = [
  {
    text: "Yes",
  },
  {
    text: "No",
  },
];

const Donations = [
  {
    icon: Flowers,
    iconName: "Flowers",
    name: "flowers",
    text: "flowers",
    type: "flowers",
  },
  {
    icon: Charity,
    iconName: "Charity",
    name: "charity",
    text: "charity",
    type: "charity",
  },
];

const INITIAL_STATE = {
  songsHymnsIndex: -1,
  songsHymns: "",
  extraWordsIndex: -1,
  extraWords: "",
  donationsIndex: -1,
  donations: "",
};

const Page4 = ({ setPageNumber, pageNumber }) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(INITIAL_STATE);

  const theService = useSelector(selectTheService);

  useEffect(() => {
    setUserData(theService);
  }, []);

  const backClickHandler = (e) => {
    e.preventDefault();
    setPageNumber(pageNumber - 1);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    if (!userData.songsHymns || !userData.extraWords || !userData.donations) {
      return;
    }
    setPageNumber(pageNumber + 1);
    dispatch(setTheService(userData));
  };

  return (
    <div className="form_right_c_main text-white">
      <div className="form_right_c">
        <div className="border-b border-[#CDCDCD] form_right_c_a">
          <h1 className="text-[#FFFFFF] text-4xl font-semibold">
            Step 3 : The Service
          </h1>
          <p className="text-[#FFFFFF] text-base mt-5">
            All the fields are obligatory for filling in
          </p>
        </div>
        <h2 className="ert">
          Are there any songs, hymns, readings or other music you'd like at your
          funeral?
        </h2>
        <FormCheckButton
          formObject={SongsHymns}
          modifyType={"songsHymns"}
          userData={userData}
          setUserData={setUserData}
          optionType={"songsHymnsIndex"}
          extraStyles={{
            width: "40%",
          }}
        />
        <h2 className="ert">
          Is there anyone you'd particularly like to say a few words?
        </h2>
        <FormCheckButton
          formObject={ExtraWords}
          modifyType={"extraWords"}
          userData={userData}
          setUserData={setUserData}
          optionType={"extraWordsIndex"}
          extraStyles={{
            width: "40%",
          }}
        />
        <h2 className="ert">
          Would you prefer flowers or charity donations?
        </h2>
        <div className="form_d">
        <FormCheckButtonType
          formObject={Donations}
          modifyType={"donations"}
          userData={userData}
          setUserData={setUserData}
          optionType={"donationsIndex"}
          extraStyles={{
            // display: "grid",
            // gridGap: "10px",
            // gridTemplateColumns: "repeat(2, 1fr)",
            // gridTemplateRows: "repeat(1, 1fr)",
             

          }}
          
        />
        </div>
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

export default Page4;
