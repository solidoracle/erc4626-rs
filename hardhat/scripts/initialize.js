const { ethers } = require('hardhat');
const { ABI, ADDRESS } = require('./common');

async function main() {
    const [signer] = await ethers.getSigners();

    const counter = await ethers.getContractAt(ABI, ADDRESS, signer);
    
    const number = await counter.number();
    console.log('nuber is:', number);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
