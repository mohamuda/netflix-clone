import React from 'react'

export default function footer() {
  return (
    
    <div className="footer">
        <div className="footer__container">
            <div className="container__rowicons">
                <ul className="container__rowicons--items">
                <li><i className="fa-brands fa-facebook-f"></i></li>
                <li><i className="fa-brands fa-instagram"></i></li>
                <li><i className="fa-brands fa-youtube"></i></li>
                </ul>
            </div>
            <div className="container__rowlinks">
                <ul className="container__rowitems">
                <li>Audio Description</li>
                <li>investor Relations</li>
                <li>Legal Notices</li>
                </ul>
                <ul className="container__rowitems">
                <li>Help Centre</li>
                <li>Jobs</li>
                <li>Cookie Preferences</li>
                </ul>
                <ul className="container__rowitems">
                <li>Gift Cards</li>
                <li>Terms of Use</li>
                <li>Corporate Information</li>
                </ul>
                <ul className="container__rowitems">
                <li>Media Centre</li>
                <li>Privacy</li>
                <li>Contact Us</li>
                </ul>
            </div>
            <div className="container__rowbutton">
                <button className="container__row--button">
                <p>Service Code</p>
                </button>
            </div>
        </div>

    </div>

  )
}
