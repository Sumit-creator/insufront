import { useState } from "react";

const FormCheckButton = ({
  formObject,
  userData,
  setUserData,
  modifyType,
  optionType,
  extraStyles,
}) => {
  const clickHandler = (index) => {
    setUserData((prev) => {
      return {
        ...prev,
        [modifyType]: formObject[index].text,
        [optionType]: index,
      };
    });
  };
  const optionNumber = userData[optionType];
  return (
    <div
      className="fl"
      style={extraStyles}
    >
      {formObject.map((obj, index) => {
        if (index === optionNumber) {
          return (
            <div
              className=""
              style={{
                height: "69px",
                minWidth: "200px",
                background:
                  "linear-gradient(92.8deg, #FFA33C 2.8%, #DC6C05 99.98%)",
                boxShadow: "0px 20px 60px 30px rgba(243, 145, 41, 0.12)",
                borderRadius: "80px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                padding: "10px 15px",
              }}
            >
              <input
                checked={true}
                id="bordered-radio-2"
                type="radio"
                value=""
                name="bordered-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mr-3"
              ></input>

              <div className="text-white text-center">{obj.text}</div>
            </div>
          );
        } else {
          return (
            <div
              className=""
              style={{
                height: "69px",
                minWidth: "200px",
                background: "#FAFAFA",
                border: "3px solid #FFFFFF",
                borderRadius: "80px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                padding: "10px 15px",
              }}
              onClick={(e) => clickHandler(index)}
            >
              <input
                id="bordered-radio-1"
                type="radio"
                value=""
                name="bordered-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mr-3"
              ></input>

              <div className="text-[#413A7F] text-center">{obj.text}</div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default FormCheckButton;
