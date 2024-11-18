// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StorX {
    string private storedCID;

    function storeFile(string memory cid) public {
        storedCID = cid;
    }

    function retrieveFile() public view returns (string memory) {
        return storedCID;
    }
}
