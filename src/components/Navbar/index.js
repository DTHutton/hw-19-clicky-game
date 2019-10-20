import React from "react"
import "./style.css"

const Navbar = props => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo right">Clicky Game</a>
                <div className="left">Score</div>
                <div className="center">Instructions</div>
            </div>
        </nav>
    )
}

export default Navbar