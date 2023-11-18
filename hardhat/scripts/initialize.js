const { ethers } = require('hardhat');
const { ABI, ADDRESS } = require('./common');

async function main() {
    const [signer] = await ethers.getSigners();

    const weth = await ethers.getContractAt(ABI, ADDRESS, signer);
    
    const name = await weth.name();
    console.log('name is:', name);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
