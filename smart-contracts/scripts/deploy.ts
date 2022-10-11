import { ethers } from "hardhat";

async function main() {
  const NFTCollection = await ethers.getContractFactory("NFTCollection");
  const nftCollection = await NFTCollection.deploy();

  await nftCollection.deployed();

  console.log(`NFTCollection has been deployed at ${nftCollection.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
