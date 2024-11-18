// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => (
//   <nav className="navbar">
//     <h1>StorX</h1>
//     <ul>
//       <li><Link to="/">Home</Link></li>
//       <li><Link to="/upload">Upload/Retrieve</Link></li>
//       <li><Link to="/about">About</Link></li>
//       <li><Link to="/contact">Contact</Link></li>
//     </ul>
//   </nav>
// );

// export default Navbar;

import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">StorX</div>
      <ul className="navbar-menu">
        <li><a href="/">Home</a></li>
        <li><a href="/uploadretrieve">Upload/Retrieve</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

