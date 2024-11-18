// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import UploadRetrieve from "./pages/UploadRetrieve";
// import About from "./components/About";
// import Contact from "./components/Contact";

// const App = () => {
//   return (
//     <Router>
//       <div className="app">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/upload" element={<UploadRetrieve />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import UploadRetrieve from "./pages/UploadRetrieve";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/uploadretrieve" element={<UploadRetrieve />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
