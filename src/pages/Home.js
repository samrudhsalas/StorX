// import React from "react";

// const Home = () => (
//   <div className="home">
//     <h1>Welcome to StorX</h1>
//     <p>Decentralized file storage made simple and secure.</p>
//   </div>
// );

// export default Home;

import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Welcome to StorX</h1>
        <p>Decentralized storage powered by blockchain.</p>
        <div className="hero-buttons">
          <button className="btn-glow">Get Started</button>
          <button className="btn-glow">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
