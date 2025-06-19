const Box = ({ char, color }) => {
  let borderHandler = {
    border: `3px solid ${color}`,
  };
  return (
    <div className="box" style={borderHandler}>
      {char}
    </div>
  );
};

export default Box;