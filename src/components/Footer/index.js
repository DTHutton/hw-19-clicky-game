import React from "react"
import "./style.css"

const Footer = props => {
    return (
        <div>
            <footer className="page-footer">
                <div className="footer-copyright">
                    <p className="copywrite-text">© Clicky Game by Derek Hutton</p>

                    <a className="repo-link" href="https://github.com/DTHutton/hw-19-clicky-game">
                        GitHub Repo
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default Footer