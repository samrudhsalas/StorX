const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    sepolia: {
      provider: () => new HDWalletProvider(
        'matrix tip casino term wealth exit town salon steel ten local inflict', // Replace with your MetaMask seed phrase or private key
        'https://eth-sepolia.g.alchemy.com/v2/BRx95dqNuQoatCFoZUwbJNKgOg8RCuUM' // Replace with your Alchemy Sepolia RPC URL
      ),
      network_id: 11155111, // Sepolia testnet ID
      gas: 4500000, // Adjust gas limit as needed
      gasPrice: 10000000000 // Adjust gas price as needed
    }
  },
  mocha: {
    timeout: 100000 // Increase timeout for tests if necessary
  },
  compilers: {
    solc: {
      version: "0.8.20", // Match the Solidity version you're using
    }
  }
};
