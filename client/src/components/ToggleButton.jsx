import React from "react";

function ToggleButton({ theme, toggleTheme }) {
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="theme-toggle"
        className="toggle-input"
        checked={theme === "dark-theme"}
        onChange={toggleTheme}
      />
      <label htmlFor="theme-toggle" className="toggle-label">
        <span className="toggle-ball"></span>
      </label>

      <style jsx>{`
        .toggle-container {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Hide checkbox */
        .toggle-input {
          display: none;
        }

        /* Outer track */
        .toggle-label {
          width: 50px;
          height: 26px;
          background: #ccc;
          border-radius: 50px;
          position: relative;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        /* The small circle */
        .toggle-ball {
          position: absolute;
          top: 3px;
          left: 3px;
          width: 20px;
          height: 20px;
          background: white;
          border-radius: 50%;
          transition: all 0.3s ease;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        }

        /* When checked (dark mode) */
        .toggle-input:checked + .toggle-label {
          background: lightblue; /* dark theme bg */
        }

        .toggle-input:checked + .toggle-label .toggle-ball {
          left: 27px;
          background: black; /* cyan glow */
          box-shadow: 0 0 10px #00d0ff;
        }

        /* Hover subtle effect */
        .toggle-label:hover .toggle-ball {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}

export default ToggleButton;
