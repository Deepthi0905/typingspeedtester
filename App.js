import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [text, setText] = useState(""); // User input
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleChange = (e) => {
    if (text === "") {
      setStartTime(new Date());
    }
    setText(e.target.value);
  };

  const handleShowTime = () => {
    setEndTime(new Date());
  };

  const getTimeTaken = () => {
    if (startTime && endTime) {
      const seconds = Math.floor((endTime - startTime) / 1000);
      return `${seconds} seconds`;
    }
    return null;
  };

  const handleReset = () => {
    setText("");
    setStartTime(null);
    setEndTime(null);
  };

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <div className="top-buttons">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <h1>Typing Speed Tester</h1>

      <textarea
        className="input-box"
        placeholder="Start typing here..."
        value={text}
        onChange={handleChange}
      />

      <button className="result-btn" onClick={handleShowTime}>
        Show Time
      </button>

      {endTime && (
        <div className="result-box">
          <p>⏱ Time Taken: {getTimeTaken()}</p>
        </div>
      )}
    </div>
  );
};

export default App;
