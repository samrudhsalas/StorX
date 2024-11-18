Here’s a detailed README file for your **StorX - Decentralized File Storage** project:

---

# **StorX - Decentralized File Storage**

**StorX** is a decentralized file storage application powered by blockchain. It allows users to upload files securely, store their hashes on the blockchain, and retrieve the files when needed. This project integrates **Ethereum blockchain** (via Alchemy), **MetaMask**, and **Pinata** for decentralized file storage and retrieval.

---

## **Features**
- **Upload Files**: Store file hashes on the blockchain while uploading files to Pinata's IPFS network.
- **Retrieve Files**: Retrieve file hashes from the blockchain and access files stored on IPFS.
- **MetaMask Integration**: Seamlessly connect and interact with the blockchain via MetaMask.
- **Decentralized and Secure**: Files are stored securely on IPFS, and hashes are stored immutably on the blockchain.
- **Futuristic UI**: An attractive, futuristic UI for easy navigation and interaction.

---

## **Prerequisites**
Before you begin, ensure you have the following installed:
- **Node.js** (v18 or later)
- **npm** (comes with Node.js)
- **MetaMask** (browser extension)
- **Truffle** (for smart contract deployment)
- **Alchemy Account** (to interact with Ethereum blockchain)
- **Pinata Account** (for file storage on IPFS)

---

## **Project Structure**
```
StorX/
├── public/
│   ├── index.html
│   └── blockchain-bg.jpg
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── About.js
│   │   ├── Contact.js
│   ├── pages/
│   │   ├── Home.js
│   │   └── UploadRetrieve.js
│   ├── contracts/
│   │   ├── StorX.json
│   ├── App.js
│   ├── futuristic.css
│   ├── index.js
├── contracts/
│   ├── StorX.sol
├── truffle-config.js
├── package.json
└── README.md
```

---

## **Getting Started**

### **Step 1: Clone the Repository**
```bash
git clone https://github.com/your-repo/StorX.git
cd StorX
```

---

### **Step 2: Install Dependencies**
Navigate to the project directory and install the required dependencies:
```bash
npm install
```

---

### **Step 3: Smart Contract Deployment**
1. Compile the smart contract:
   ```bash
   truffle compile
   ```

2. Deploy the smart contract to the Sepolia testnet:
   ```bash
   truffle migrate --network sepolia
   ```

3. Copy the deployed contract’s address and update it in the `UploadRetrieve.js` file:
   ```javascript
   const contractAddress = 'YOUR_DEPLOYED_CONTRACT_ADDRESS';
   ```

---

### **Step 4: Configure API Keys**
1. Replace your **Pinata API Key** and **Secret** in `UploadRetrieve.js`:
   ```javascript
   const pinataApiKey = 'YOUR_PINATA_API_KEY';
   const pinataSecretApiKey = 'YOUR_PINATA_SECRET_API_KEY';
   ```

2. Update the **Alchemy URL** for the Sepolia network in `truffle-config.js`:
   ```javascript
   sepolia: {
     provider: () => new HDWalletProvider(mnemonic, "https://eth-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_API_KEY"),
     network_id: 11155111,
   },
   ```

---

### **Step 5: Run the Frontend**
Start the development server:
```bash
npm start
```

The application will run at [http://localhost:3000](http://localhost:3000).

---

## **Usage**

1. **Connect to MetaMask**:
   - Click the **Connect Wallet** button on the homepage.
   - Ensure you're connected to the Sepolia testnet.

2. **Upload Files**:
   - Navigate to the "Upload & Retrieve" page.
   - Choose a file to upload and approve the transaction via MetaMask.
   - Once uploaded, you’ll see the file's hash stored on the blockchain.

3. **Retrieve Files**:
   - Click the **Retrieve File** button to fetch the file hash from the blockchain.
   - Use the hash to view/download the file from Pinata’s IPFS gateway.

4. **About & Contact Pages**:
   - Learn more about the project and find contact details on respective pages.

---

## **Smart Contract**

The `StorX.sol` contract provides the following functionality:
- **storeFile(string memory _fileHash)**: Stores the file hash on the blockchain.
- **retrieveFile() public view returns (string memory)**: Retrieves the last stored file hash.

---

## **Technologies Used**
- **Frontend**: React.js, React Router
- **Smart Contracts**: Solidity, Truffle
- **Blockchain**: Ethereum (Sepolia Testnet via Alchemy)
- **Storage**: Pinata (IPFS)
- **Wallet Integration**: MetaMask

---

## **Troubleshooting**

1. **Error: Contract not deployed**  
   Ensure the smart contract is deployed to the Sepolia network, and the contract address is updated in `UploadRetrieve.js`.

2. **MetaMask: User denied transaction signature**  
   Double-check the transaction details and ensure you're on the Sepolia network.

3. **File upload fails**  
   Verify your Pinata API keys are correct and active.

4. **React errors related to imports**  
   Ensure all files, especially `StorX.json`, are in the correct directories.

---

## **Future Improvements**
- Add multi-user support for file management.
- Implement encryption for secure file storage.
- Add support for additional blockchain networks.

---

## **Contributing**
Contributions are welcome! Feel free to fork the repository and submit pull requests.

---

## **License**
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## **Contact**
For further inquiries, feel free to reach out:
- **Email**: samrudhsalas@gmail.com
- **GitHub**: [Your GitHub Profile](https://github.com/samrudhsalas)

--- 

This README should cover all necessary details about the project, including setup, usage, and troubleshooting!
