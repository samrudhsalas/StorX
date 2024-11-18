// import React, { useState } from "react";
// import axios from "axios";

// const pinataApiKey = "ac0157a8c7f1c07366a4";
// const pinataSecretApiKey = "c03beb501244d3f6485c3cea26b50e6341638c167b8af0eb32cce4cbb6df910b";

// const UploadRetrieve = () => {
//   const [file, setFile] = useState(null);
//   const [cid, setCid] = useState("");

//   const handleUpload = async () => {
//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const response = await axios.post(
//         "https://api.pinata.cloud/pinning/pinFileToIPFS",
//         formData,
//         {
//           headers: {
//             pinata_api_key: pinataApiKey,
//             pinata_secret_api_key: pinataSecretApiKey,
//           },
//         }
//       );
//       setCid(response.data.IpfsHash);
//       alert("File uploaded successfully!");
//     } catch (error) {
//       alert("File upload failed.");
//     }
//   };

//   const handleRetrieve = () => {
//     if (!cid) {
//       alert("Please provide a valid CID.");
//       return;
//     }
//     window.open(`https://gateway.pinata.cloud/ipfs/${cid}`, "_blank");
//   };

//   return (
//     <div className="upload-retrieve">
//       <h2>Upload File</h2>
//       <input type="file" onChange={(e) => setFile(e.target.files[0])} />
//       <button onClick={handleUpload}>Upload</button>

//       <h2>Retrieve File</h2>
//       <input
//         type="text"
//         placeholder="Enter CID"
//         value={cid}
//         onChange={(e) => setCid(e.target.value)}
//       />
//       <button onClick={handleRetrieve}>Retrieve</button>
//     </div>
//   );
// };

// export default UploadRetrieve;

// import React, { useState } from "react";
// import axios from "axios";

// const pinataApiKey = "ac0157a8c7f1c07366a4";
// const pinataSecretApiKey = "c03beb501244d3f6485c3cea26b50e6341638c167b8af0eb32cce4cbb6df910b";

// const UploadRetrieve = () => {
//   const [file, setFile] = useState(null);
//   const [cid, setCid] = useState("");

//   const handleUpload = async () => {
//     if (!file) {
//       alert("Please select a file before uploading.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const response = await axios.post(
//         "https://api.pinata.cloud/pinning/pinFileToIPFS",
//         formData,
//         {
//           headers: {
//             pinata_api_key: pinataApiKey,
//             pinata_secret_api_key: pinataSecretApiKey,
//           },
//         }
//       );
//       setCid(response.data.IpfsHash);
//       alert("File uploaded successfully! CID: " + response.data.IpfsHash);
//     } catch (error) {
//       alert(`File upload failed: ${error.response?.data || error.message}`);
//     }
//   };

//   const handleRetrieve = () => {
//     if (!cid) {
//       alert("Please provide a valid CID.");
//       return;
//     }

//     const url = `https://gateway.pinata.cloud/ipfs/${cid}`;
//     window.open(url, "_blank");
//   };

//   return (
//     <div className="upload-retrieve">
//       <h2>Upload File</h2>
//       <input
//         type="file"
//         onChange={(e) => setFile(e.target.files[0])}
//       />
//       <button onClick={handleUpload}>Upload</button>

//       <h2>Retrieve File</h2>
//       <input
//         type="text"
//         placeholder="Enter CID"
//         value={cid}
//         onChange={(e) => setCid(e.target.value)}
//       />
//       <button onClick={handleRetrieve}>Retrieve</button>
//     </div>
//   );
// };

// export default UploadRetrieve;


import React, { useState } from "react";
import axios from "axios";
import "./UploadRetrieve.css"; // Assuming you create a separate CSS file

const pinataApiKey = "ac0157a8c7f1c07366a4";
const pinataSecretApiKey = "c03beb501244d3f6485c3cea26b50e6341638c167b8af0eb32cce4cbb6df910b";

const UploadRetrieve = () => {
  const [file, setFile] = useState(null);
  const [cid, setCid] = useState("");

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file before uploading.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        formData,
        {
          headers: {
            pinata_api_key: pinataApiKey,
            pinata_secret_api_key: pinataSecretApiKey,
          },
        }
      );
      setCid(response.data.IpfsHash);
      alert("File uploaded successfully! CID: " + response.data.IpfsHash);
    } catch (error) {
      alert(`File upload failed: ${error.response?.data || error.message}`);
    }
  };

  const handleRetrieve = () => {
    if (!cid) {
      alert("Please provide a valid CID.");
      return;
    }

    const url = `https://gateway.pinata.cloud/ipfs/${cid}`;
    window.open(url, "_blank");
  };

  return (
    <div className="upload-retrieve-container">
      <div className="upload-retrieve">
        <h2>Upload File</h2>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button onClick={handleUpload}>Upload</button>

        <h2>Retrieve File</h2>
        <input
          type="text"
          placeholder="Enter CID"
          value={cid}
          onChange={(e) => setCid(e.target.value)}
        />
        <button onClick={handleRetrieve}>Retrieve</button>
      </div>
    </div>
  );
};

export default UploadRetrieve;
