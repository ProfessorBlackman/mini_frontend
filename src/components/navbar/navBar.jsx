import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

import PropTypes from "prop-types";

import './navBar.css'

export default function NavBar({navItems}) {

    const [activeItem, setActiveItem] = useState('')
    const [showNavBar, setShowNavBar] = useState(true);

    useEffect(() => {
        let prevScrollPos = window.scrollY;

        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 50;
            setShowNavBar(isVisible);
            prevScrollPos = currentScrollPos;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = (item) => {
        setActiveItem(item);
    };

    return (
        <div>
            {/* <>{children}</> */}
            <nav className={showNavBar ? 'navbar' : 'hidden'}>
                <ul  id="Ul-1">
                    <div className="nav-logo">
                        <img id="img-right" src="https://ik.imagekit.io/methuselah/Mini/Link.png?updatedAt=1709999273863" alt="logo"
                             width={128.55} height={90.89}/>
                    </div>
                    <div className="nav-div" id="first-list">
                        {navItems.map((navItem) => {
                            return (
                                <li key={navItem.id} onClick={() => handleClick(navItem.name)} className="nav-pages">
                                    <Link to={navItem.route}
                                          className={` Nav-Item ${activeItem === navItem.name ? 'Nav-Item-1' : ''}`}>
                                        {navItem.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </div>
                </ul>
            </nav>
        </div>
    );
}

NavBar.propTypes = {
    navItems: PropTypes.node.isRequired
}