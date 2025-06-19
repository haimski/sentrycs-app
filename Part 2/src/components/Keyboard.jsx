const Keyboard = ({ onKey }) => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  // Define keyboard rows similar to a real keyboard layout
  const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];

  return (
    <div className="keyboard-wrapper">
      {rows.map((row, rowIdx) => (
        <div key={rowIdx} className="keyboard-keys" style={{ display: "flex", justifyContent: "center", marginBottom: 4 }}>
          {rowIdx === 2 && (
            <>
               <button onClick={() => onKey("ENTER")} className="enter-key">
                Enter
              </button>
            </>
          )}
          {row.map((c) => (
            <button key={c} onClick={() => onKey(c)} className="letter-key">
              {c}
            </button>
          ))}
          {rowIdx === 2 && (
            <>
              <button onClick={() => onKey("BACKSPACE")} className="backspace-key">
                Backspace
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;