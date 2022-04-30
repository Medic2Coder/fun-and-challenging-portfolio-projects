import React from 'react';
import "./Nav.css";

function Nav() {
    return (
        <div className="nav">
            <img className="nav__logo"
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/NETFLIX_logo.svg/1024px-NETFLIX_logo.svg.png"
                 alt="Netflix Logo"
            />

            <img className="nav__avatar"
                 src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
                 alt="Netflix Avatar"
            />

        </div>
    );
}

export default Nav;