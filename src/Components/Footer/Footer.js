import React from "react";
import "./Footer.css";
import ContactCard from "../ContactCard/ContactCard";

function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_phone_email">
        <div className="footer_phone"> (956) 258-5021</div>
        <div className="footer_emails">
            <p className="email1">
          y.gofer@gofermotors.com </p>
          <div className="email2">
          sales@gofermotors.com
          </div>
        </div>
      </div>

      <div className="footer_address">
        {" "}
        1703 N Tower rd , Alamo, TX, United States, Texas{" "}
        <iframe className="footer_map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92265.82730219417!2d-98.18015711525887!3d26.175268829853575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86659fa4d80bf873%3A0x8c49f9589c8000d0!2s1703%20N%20Tower%20Rd%2C%20Alamo%2C%20TX%2078516!5e0!3m2!1sen!2sus!4v1696102097164!5m2!1sen!2sus" 
                    width="600" 
                    height="450" 
                    style={{ border: "0" }} 
                    allowFullScreen 
                    loading="lazy" 
                    title="Gofer Motors Location" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
      </div>

      <div className="footer_hours_days">
          <p className="footer_days">Monday - Friday</p>
        <p className="footer_hours">9:00am - 6:00pm</p>
          <p className="footer_days" >Saturday</p>
        <p className="footer_hours">9:00am - 3:00pm</p>
          <p className="footer_days">Sunday</p>
        <p className="footer_hours">Closed</p>
      </div>

      <p className="privacy_rights">
        © 2023 Gofer Motors LLC. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
