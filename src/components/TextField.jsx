const TextField = ({
  children,
  userData,
  updateField,
  placeHolder,
  setUserData,
  type,
  extraStyles,
}) => {
  const handleOnChange = (e) => {
    setUserData((prev) => {
      return { ...prev, [updateField]: e.target.value };
    });
  };

  return (
    <div
      className="relative rounded-xl shadow-sm w-[80%] mt-2"
      style={extraStyles}
    >
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-xl">
        {children}
      </div>
      <input
        className="form-input block w-full pl-10 pr-3 py-4 text-base leading-5 rounded-3xl transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        placeholder={placeHolder}
        type={type}
        value={userData["updateField"]}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default TextField;
