// import React from "react";

// const Footer = () => (
//   <footer className="footer">
//     <p>&copy; 2024 StorX. All rights reserved.</p>
//     <p>Powered by Blockchain Technology.</p>
//   </footer>
// );

// export default Footer;

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} StorX - Decentralized Storage for the Future</p>
      {/* <p>© 2024 StorX. All rights reserved.</p> */}
      <p>Powered by Blockchain Technology. All rights reserved.</p>
      <div className="social-icons">
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-github"></i></a>
        <a href="#"><i className="fab fa-linkedin"></i></a>
      </div>
    </footer>
  );
};

export default Footer;
