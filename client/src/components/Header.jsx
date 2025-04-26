import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import countries from "./Countries";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';
import ToggleButton from "./ToggleButton"; // <- Import the new ToggleButton component

function Header() {
    const [active, setActive] = useState(false);
    const [showCountryDropdown, setShowCountryDropdown] = useState(false);
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

    const [theme, setTheme] = useState("light-theme");
    const category = ["business", "entertainment", "general", "health", "science", "Sports", "technology"];

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    function toggleTheme(event) {
        setTheme(event.target.checked ? "dark-theme" : "light-theme");
    }
    
    return (
        <header>
            <nav className="fixed top-0 left-0 w-full h-20 bg-gray-800 z-10 flex items-center justify-around">
                <h3 className="relative heading font-extrabold md:basis-1/6 text-5xl xs:basis-4/12 z-50 mb-5 mt-5">SPLICER</h3>

                <ul className={active ? "nav-ul flex gap-11 md:gap-14 xs:gap-12 lg:basis-3/6 md:basis-4/6 md:justify-end active" : "nav-ul flex gap-14 lg:basis-3/6 md:basis-4/6 justify-end"}>
                    <li>
                        <Link className="no-underline font-semibold" to="/" onClick={() => { setActive(!active); }}>
                            All News
                        </Link>
                    </li>
                    <li className="dropdown-li">
                        <Link className="no-underline font-semibold flex items-center gap-3" onClick={() => { setShowCategoryDropdown(!showCategoryDropdown); setShowCountryDropdown(false); }}>
                            Top-Headlines <FontAwesomeIcon className={showCategoryDropdown ? "down-arrow-icon down-arrow-icon-active" : "down-arrow-icon"} icon={faCircleArrowDown} />
                        </Link>
                        <ul className={showCategoryDropdown ? "dropdown p-2 show-dropdown w-40" : "dropdown p-2 w-40"}>
                            {category.map((element, index) => (
                                <li key={index} onClick={() => { setShowCategoryDropdown(!showCategoryDropdown); }}>
                                    <Link to={"/top-headlines/" + element} className="flex gap-3 capitalize" onClick={() => { setActive(!active); }}>
                                        {element}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li className="dropdown-li">
                        <Link className="no-underline font-semibold flex items-center gap-2" onClick={() => { setShowCountryDropdown(!showCountryDropdown); setShowCategoryDropdown(false); }}>
                            Country <FontAwesomeIcon className={showCountryDropdown ? "down-arrow-icon down-arrow-icon-active" : "down-arrow-icon"} icon={faCircleArrowDown} />
                        </Link>
                        <ul className={showCountryDropdown ? "dropdown p-2 show-dropdown" : "dropdown p-2"}>
                            {countries.map((element, index) => (
                                <li key={index} onClick={() => { setShowCountryDropdown(!showCountryDropdown); }}>
                                    <Link to={"/country/" + element?.iso_2_alpha} className="flex gap-3" onClick={() => { setActive(!active); }}>
                                        <img
                                            src={element?.png}
                                            srcSet={`https://flagcdn.com/32x24/${element?.iso_2_alpha}.png 2x`}
                                            alt={element?.countryName}
                                        />
                                        <span>{element?.countryName}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li>
                        {/* Use the ToggleButton */}
                        <ToggleButton theme={theme} toggleTheme={toggleTheme} />
                    </li>
                </ul>
                <div className={active ? "ham-burger z-index-100 ham-open" : "ham-burger z-index-100"} onClick={() => { setActive(!active); }}>
                    <span className="lines line-1"></span>
                    <span className="lines line-2"></span>
                    <span className="lines line-3"></span>
                </div>
            </nav>

        </header>
    );
}

export default Header;
