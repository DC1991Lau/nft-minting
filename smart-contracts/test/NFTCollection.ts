import { expect } from "chai";
import { ethers } from "hardhat";

describe("BadgeToken contract", function () {
  let NFTCollection;
  let token721: any;
  let _name = "NFTCollection";
  let _symbol: any = "NFTC";
  let account1: any, otheraccounts;

  beforeEach(async function () {
    NFTCollection = await ethers.getContractFactory("NFTCollection");
    [account1, ...otheraccounts] = await ethers.getSigners();

    token721 = await NFTCollection.deploy();
  });

  // You can nest describe calls to create subsections.
  describe("Deployment", function () {
    it("Should has the correct name and symbol ", async function () {
      expect(await token721.name()).to.equal(_name);
      expect(await token721.symbol()).to.equal(_symbol);
    });

    it("Should mint a token with token ID 0 and return the TokenURI", async function () {
      const address1 = account1.address;
      await token721.safeMint(
        address1,
        "https://image.shutterstock.com/image-photo/backup-data-male-hand-touching-600w-1805545540.jpg"
      );
      expect(await token721.tokenURI(0)).to.equal(
        "https://image.shutterstock.com/image-photo/backup-data-male-hand-touching-600w-1805545540.jpg"
      );
    });
  });
});
