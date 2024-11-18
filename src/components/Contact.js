// import React, { useState } from "react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Message submitted successfully!");
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <div className="contact">
//       <h1>Contact Us</h1>
//       <form onSubmit={handleSubmit}>
//         <label>Name:</label>
//         <input
//           type="text"
//           value={formData.name}
//           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//           required
//         />

//         <label>Email:</label>
//         <input
//           type="email"
//           value={formData.email}
//           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//           required
//         />

//         <label>Message:</label>
//         <textarea
//           value={formData.message}
//           onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//           required
//         ></textarea>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import "./Contact.css"; // Assuming you create a Contact.css file for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />

        <label>Message:</label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
