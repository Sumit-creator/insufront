const Button = ({ text, logo, extraStyles, children, onClick }) => {
  return (
    <div className={""} style={extraStyles} onClick={onClick}>
      {logo ? <img src={logo} alt={text} /> : null}
      <div>{text}</div>
      {children}
    </div>
  );
};

export default Button;
