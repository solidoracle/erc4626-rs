const { ethers } = require('hardhat');
const { ABI_VAULT, ADDRESS_VAULT, ABI_WETH, ADDRESS_WETH } = require('./common');
const chai = require('chai');
const { expect } = chai;

async function main() {
    const [signer] = await ethers.getSigners();

    const vault = await ethers.getContractAt(ABI_VAULT, ADDRESS_VAULT, signer);
    const weth = await ethers.getContractAt(ABI_WETH, ADDRESS_WETH, signer);

    await vault.setAsset(weth.target);

    const weth_address = await vault.asset();
    expect(weth_address).to.equal(ADDRESS_WETH);
   
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
