import {useState} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import "./navBar.css";
import {GiHamburgerMenu} from "react-icons/gi";
import {CgCloseR} from "react-icons/cg";

export default function NavBar({navItems}) {
    const [activeItem, setActiveItem] = useState("");
    const [showMenu, setShowMenu] = useState(false);

    const handleClick = (item) => {
        setActiveItem(item);
    };

    return (
        <div>
            <nav className={showMenu ? "open-navbar" : "navbar"}>
                {!showMenu ? <div className="nav-logo">
                    <img
                        id="img-right"
                        src="https://ik.imagekit.io/methuselah/Mini/icons/Component%203.svg?updatedAt=1710942935127"
                        alt="logo"
                    />
                </div> : <div></div>}
                <div className="nav-items-container">
                    <button className="menu-icon" onClick={() => setShowMenu(!showMenu)}>
                        {!showMenu ? <GiHamburgerMenu size={40}/> : <CgCloseR size={40}/>}
                    </button>
                    <ul className={`nav-items ${showMenu ? "show" : ""}`}>
                        {navItems.map((navItem) => {
                            return (
                                <li
                                    key={navItem.id}
                                    onClick={() => handleClick(navItem.name)}
                                    className="nav-pages"
                                >
                                    <Link
                                        to={navItem.route}
                                        className={` Nav-Item ${
                                            activeItem === navItem.name ? "Nav-Item-1" : ""
                                        }`}
                                    >
                                        {navItem.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </div>
    );
}

NavBar.propTypes = {
    navItems: PropTypes.array.isRequired,
};
