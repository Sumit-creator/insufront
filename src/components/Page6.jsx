import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import TextField from "./TextField";

import { MdOutlineAccountCircle } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { FiArrowRightCircle } from "react-icons/fi";
import Button from "./Button";
import { createNewForm } from "../features/formSlice";
import { selectForm } from "../features/formSelector";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import './form.css';
const INITIAL_STATE = {
  name: "",
  surName: "",
  email: "",
};

const Page6 = ({ setPageNumber, pageNumber }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(INITIAL_STATE);
  const [isChecked, setIsChecked] = useState(false);

  const form = useSelector(selectForm);
  const loading = useSelector((state) => state.form.loading);
  const error = useSelector((state) => state.form.error);
  const send = useSelector((state) => state.form.send);
  const handleCheckState = () => {
    setIsChecked(!isChecked);
  };

  // const theEmailResults

  useEffect(() => {
    if (send) {
      navigate("/form/thankYou");
    }
    if (error) {
      toast.error("There ocurred some unknown error!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }, [loading]);

  const backClickerHandler = (e) => {
    e.preventDefault();
    setPageNumber(pageNumber - 1);
  };

  const clickHandler = (e) => {
    e.preventDefault();

    // setPageNumber(pageNumber + 1);
    // console.log(form);
    // setDataFormat({ ...form, ...userData });
    if (isChecked) {
      dispatch(createNewForm({ ...form, ...userData }));
      // navigate("/form/thankYou");
    }
  };

  return (
    <div className="form_right_c_main text-white p26 ">
      <div className="form_right_c">
        <div className="border-b border-[#CDCDCD] form_right_c_a">
          <h1 className="text-[#FFFFFF] text-2xl font-bold">
            You've now completed your Perfect Send-Off
          </h1>
          <p className="text-[#FFFFFF] text-base mt-5">
            We are almost finished, please provide your contact information.
          </p>
        </div>
        <h2 className="mt-16">Enter Your First Name</h2>
        <TextField
          placeHolder={"John"}
          setUserData={setUserData}
          userData={userData}
          type={"text"}
          updateField={"name"}
          extraStyles={{
            color: "black",
          }}
        >
          <MdOutlineAccountCircle />
        </TextField>
        <h2 className="mt-16">Enter Your Surname</h2>
        <TextField
          placeHolder={"John"}
          setUserData={setUserData}
          userData={userData}
          type={"text"}
          updateField={"surName"}
          extraStyles={{
            color: "black",
          }}
        >
          <MdOutlineAccountCircle />
        </TextField>
        <h2 className="mt-16">Enter your Email Address</h2>
        <TextField
          placeHolder={"Johnlewis@gmail.com"}
          setUserData={setUserData}
          userData={userData}
          type={"text"}
          updateField={"email"}
          extraStyles={{
            color: "black",
          }}
        >
          <HiOutlineMail />
        </TextField>
        {/*  */}
        <div className="relative flex items-start mt-5 mb-5">
          <div className="relative rounded-md shadow-sm">
            <input
              id="checkbox"
              type="checkbox"
              className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              checked={isChecked}
              onChange={handleCheckState}
            />
          </div>
          <label htmlFor="checkbox" className="ml-3 block text-sm leading-5 ">
            Unless you opt out , xyz will use your personal information to email
            you a copy of your Perfect Send-Off. Please uncheck this box if you
            don’t want to receive related emails from us in the future.
          </label>
        </div>
        <div className="form_right_f_btn">
        <Button
          text={"Submit Form"}
          extraStyles={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "15px",
            background: "#24A87D",
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

export default Page6;
