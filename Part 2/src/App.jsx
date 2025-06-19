import { useState, useEffect } from 'react'
import { getWordApi } from './api/getWordApi'
import { useActionListener, actionListener} from './hooks/useActionListener'
import { WORD_LENGTH } from './utils/consts'
import Box from './components/Box'
import Keyboard from './components/Keyboard'
import './App.scss';

function App() {
  const [letters, setLetters] = useState([]);
  const [borderColor, setBorderColor] = useState("black");

  useActionListener("KEY", (key) => {
    setLetters((prev) => {
      if (key === "BACKSPACE") {
        return prev.slice(0, -1);
      }
      if (key === "ENTER") {
        if (prev.length === WORD_LENGTH) {
          const word = prev.join("");
          getWordApi(word)
            .then((isValid) => {
              setBorderColor(isValid ? "green" : "red");
            })
            .catch(() => {
              setBorderColor("red");
            });
        }
        return prev;
      }
      if (prev.length >= WORD_LENGTH) return prev;
      return [...prev, key];
    });
  });

  const handleKeyClick = (key) => {
    actionListener.emit("KEY", key);
  };

  return (
    <div style={{ padding: 20 }}>
      <div className="boxes">
        {Array.from({ length: WORD_LENGTH }).map((_, i) => (
          <Box key={i} char={letters[i] || ""} color={borderColor} />
        ))}
      </div>
      <Keyboard onKey={handleKeyClick} />
    </div>
  );
}

export default App
