import { ethers } from "hardhat";

async function main() {
   const setterGetter = await ethers.deployContract("SetterGetter");

  await setterGetter.waitForDeployment();

  console.log(
    `SetterGetter deployed to ${setterGetter.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
