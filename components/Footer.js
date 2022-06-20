import React from "react";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-container__footer-image">
        <img src="/images/01footer.svg"></img>
        <img src="/images/01copyright.svg"></img>
      </div>
      <div className="footer-container__navigation-socials">
        <h3 className="footer-container__footer-navigation-list-title">Socials</h3>
        <h3 className="footer-container__footer-navigation-list">Twitter</h3>
        <h3 className="footer-container__footer-navigation-list">LinkedIn</h3>
        <h3 className="footer-container__footer-navigation-list">Pinterest</h3>
      </div>

      <div className="footer-container__navigation-information">
        <h3 className="footer-container__footer-navigation-list-title">Information</h3>
        <h3 className="footer-container__footer-navigation-list">About Us</h3>
        <h3 className="footer-container__footer-navigation-list">Help</h3>
        <h3 className="footer-container__footer-navigation-list">Carrers</h3>
      </div>
    </div>
  );
}

export default Footer;
