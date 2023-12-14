import LOGO from "../assets/Logo.png";
import Button from "../components/Button";
import Tracker from "../components/Tracker";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Page1 from "../components/Page1";
import Page2 from "../components/Page2";
import { changePageNumber } from "../features/formAction";
import Page3 from "../components/Page3";
import Page4 from "../components/Page4";
import Page5 from "../components/Page5";
import Page6 from "../components/Page6";
import { selectForm } from "../features/formSelector";
import "./Home.css";
import Navbar from "../components/navbar/Navbar";
import Tracker_mob from "../components/Tracker_mob";
const FormPage = () => {
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(-1);

  useEffect(() => {
    dispatch(changePageNumber(pageNumber));
  }, [pageNumber]);

  const form = useSelector(selectForm);

  console.log(form);

  return (
    <div className="fome setbg bg-[#1D0D52]">
      {/* Navbar */}
      <Navbar />
      {/* Main div */}
      <div className="form_mo bg-[#200F52] border-b border-[#FFFFFF66]">
        <h1 className="text-[#BCB8C8] text-xl font-bold">
          Create your own send-off by fill this form in detail
        </h1>
        <Tracker_mob />
      </div>

      <div className="form_main">
        {/* left div */}
        <div className="form_left bg-[#200F52] border-r border-[#FFFFFF66] ">
          <h1 className="text-[#BCB8C8] text-xl font-bold">
            Create your own send-off by fill this form in detail
          </h1>
          <Tracker />
        </div>

        {/* right div */}
        {pageNumber === -1 ? (
          <Page1 setPageNumber={setPageNumber} pageNumber={pageNumber} />
        ) : null}
        {pageNumber === 0 ? (
          <Page2 setPageNumber={setPageNumber} pageNumber={pageNumber} />
        ) : null}
        {pageNumber === 1 ? (
          <Page3 setPageNumber={setPageNumber} pageNumber={pageNumber} />
        ) : null}
        {pageNumber === 2 ? (
          <Page4 setPageNumber={setPageNumber} pageNumber={pageNumber} />
        ) : null}
        {pageNumber === 3 ? (
          <Page5 setPageNumber={setPageNumber} pageNumber={pageNumber} />
        ) : null}
        {pageNumber === 4 ? (
          <Page6 setPageNumber={setPageNumber} pageNumber={pageNumber} />
        ) : null}
        {/* <div className="w-[65%] h-full bg-[#200F52] flex flex-col items-center justify-center">
          <div className="h-[60%] w-[80%] flex flex-col justify-evenly">
            <div className="w-[305px]">
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
                }}
              />
            </div>
            <h1 className="text-[#FFFFFF] text-2xl font-bold w-[60%]">
              First of all please choose one of the following
            </h1>
            <FormCheckButtonType
              formObject={FormPageObject}
              optionNumber={optionNumber}
              setOptionNumber={setOptionNumber}
            />
          </div>
        </div> */}
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

export default FormPage;
