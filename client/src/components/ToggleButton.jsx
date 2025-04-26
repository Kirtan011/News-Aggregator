// src/components/ToggleButton.js
import React from "react";

function ToggleButton({ theme, toggleTheme }) {
    return (
        <div className="theme-toggle-container">
            <input 
                type="checkbox" 
                className="checkbox" 
                id="checkbox" 
                checked={theme === "dark-theme"} // <-- important: checked = dark-theme now
                onChange={toggleTheme} 
            />
            <label htmlFor="checkbox" className="checkbox-label">
                <i className="fas fa-sun"></i> {/* left icon */}
                <i className="fas fa-moon"></i> {/* right icon */}
                <span className="ball"></span>
            </label>

    
            <style jsx>{`
                .theme-toggle-container {
                    display: flex;
                    align-items: center;
                }

                .checkbox {
                    display: none;
                }

                .checkbox-label {
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    position: relative;
                    width: 60px;
                    height: 30px;
                    background: #444;
                    border-radius: 25px;
                    padding: 0px;
                    padding-bottom:5px;
                    box-sizing: border-box;
                }

                .checkbox-label .ball {
                    width: 20px;
                    height: 20px;
                    background-color: #fff;
                    border-radius: 10%;
                    transition: 0.3s;
                    position: relative;
                    left: 0;
                }

                .checkbox:checked + .checkbox-label .ball {
                    transform: translateX(28px);
                    background-color: #ff9800;
                }

                .checkbox-label i {
                    position: absolute;
                    font-size: 16px;
                }

                .checkbox-label i.fa-sun {
                    left: 8px;
                    color: yellow;
                }

                .checkbox-label i.fa-moon {
                    right: 8px;
                    color: white;
                }
            `}</style>
        </div>
    );
}

export default ToggleButton;
