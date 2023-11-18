const { ethers } = require('hardhat');
const { ABI, ADDRESS } = require('./common');

async function main() {
    const [signer] = await ethers.getSigners();

    const vault = await ethers.getContractAt(ABI, ADDRESS, signer);
    

    const amountToDeposit = ethers.parseEther("0.000000000000001");

    await vault.deposit(amountToDeposit);

    const balance = await vault.balanceOf(signer.address);
    console.log('balance is:', balance);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
