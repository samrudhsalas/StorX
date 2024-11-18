import React from "react";
import "./About.css";  // Importing the About.css file

const About = () => {
  return (
    <div className="about">
      <h1>About StorX</h1>
      <p>
        StorX is an innovative decentralized application (dApp) built on the
        Ethereum blockchain, designed to provide a seamless and secure method of
        storing and retrieving files in a decentralized manner. Leveraging the
        power of Filecoin and blockchain technology, StorX ensures that data is
        stored in a way that is both private and tamper-proof, removing the need
        for traditional centralized storage systems.
      </p>
      
      <h2>Our Vision</h2>
      <p>
        The vision behind StorX is to revolutionize how data is stored and accessed
        by decentralizing the entire process. By providing users with control over
        their data, StorX aims to make cloud storage more secure, cost-efficient, and
        transparent. This approach will not only help protect personal data but also
        reduce the risks associated with centralized data storage systems.
      </p>

      <h2>Features</h2>
      <ul>
        <li><strong>Decentralized File Storage:</strong> Files are stored across multiple nodes, ensuring redundancy and security.</li>
        <li><strong>Blockchain Integration:</strong> Leveraging Ethereum and Filecoin for a transparent and immutable storage system.</li>
        <li><strong>IPFS Support:</strong> Use of IPFS (InterPlanetary File System) to retrieve and store files in a decentralized manner.</li>
        <li><strong>Secure File Retrieval:</strong> Users can retrieve their files via unique CIDs (Content Identifiers), ensuring file integrity and privacy.</li>
        <li><strong>User-Friendly Interface:</strong> Intuitive and easy-to-use platform for uploading and retrieving files without any blockchain technicalities.</li>
      </ul>

      <h2>Why StorX?</h2>
      <p>
        StorX provides a future-proof solution for the ever-growing need for
        decentralized storage. By using blockchain technology, it ensures that
        data storage is not only decentralized but also encrypted and secure.
        With its reliance on IPFS and Filecoin, users have access to a powerful
        system for storing large files without worrying about centralized
        service provider risks, downtime, or hidden fees.
      </p>

      <h2>How It Works</h2>
      <p>
        StorX allows users to upload their files to a decentralized network by
        pinning them to IPFS and associating each file with a unique CID. This
        CID can then be used to retrieve the file from the network securely,
        ensuring that no single point of failure exists. The Ethereum blockchain
        facilitates the secure transaction and authentication of the file uploads
        and retrievals, ensuring transparency and immutability.
      </p>

      <h2>Get Involved</h2>
      <p>
        If you're interested in contributing to StorX or learning more about the
        project, feel free to contact us. We're constantly looking for developers,
        designers, and enthusiasts who share our vision of a decentralized future.
      </p>
    </div>
  );
};

export default About;
