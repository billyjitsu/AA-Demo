import {
  // Ability to connect all wallets
  ConnectWallet,
  // Built in hook to call functions to the blockchain
  Web3Button,
  // Get the address of the wallet connected
  useAddress,
  // Get the contract info from the addres provided
  useContract,
  // Hook that will allow us to read the content of the wallet
  useOwnedNFTs,
  // Tool used to display images/media from the blockchain
  MediaRenderer,
} from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { NFT_ADDRESS } from "../constants/addresses";
import React from "react";
import { useEffect } from "react";

const Home: NextPage = () => {
  // Use hooks to get values
  const address = useAddress();
  const { contract } = useContract(NFT_ADDRESS);
  const { data: ownedNFTs, isLoading: loadingOwnedNFTs } = useOwnedNFTs(
    contract,
    address
  );
  const [transferAddress, setTransferAddress] = React.useState("");

  //Just the wallet for any owned NFTs
  useEffect(() => {
    console.log("Owned NFTs", ownedNFTs?.length);
  }, [address, ownedNFTs]);

  return (
    <div className="bg-black min-h-screen  p-4">
      <main className="flex flex-col items-center text-center justify-center">
        <h1 className="text-5xl text-white font-bold md:text-7xl leading-tighter tracking-tighter mt-8 md:mt-24 mb-3">
          Welcome
        </h1>
        <h1 className="text-3xl text-white font-bold md:text-5xl leading-tighter tracking-tighter mb-4">
          Claim your NFT on{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-200">
            BASE
          </span>
        </h1>

        <div>
          <ConnectWallet />
        </div>

        <div className="flex flex-col items-center space-y-4 mt-8">
          {!loadingOwnedNFTs &&
            ownedNFTs &&
            ownedNFTs.map((nft, index) => (
              <>
                {/* Display NFTs in Wallet */}
                <MediaRenderer className="w-1/4 md:w-full"
                  key={index}
                  src={nft.metadata.image}
                />

                <input
                  type="text"
                  value={transferAddress}
                  onChange={(e) => setTransferAddress(e.target.value)}
                  placeholder="Enter address"
                  className="text-center"
                />
                  {/* Hook to run a transfer function on your contract.  Connects to contract.typeofcontract.function(with function parameters) */}
                  {/* In this case, we are sending to the address set in the input, the tokenID of the NFT, the amount of 1 */}
                  <Web3Button
                    contractAddress={NFT_ADDRESS}
                    action={(contract) => contract.erc1155.transfer(transferAddress, nft.metadata.id, 1)}
                    onSubmit={() => setTransferAddress("")}
                    onError={(error) => alert(error.message)}
                  >
                    Transfer
                  </Web3Button>
              
              </>
            ))}


          {/* Hook to run a claim function on your contract.  Connects to contract.typeofcontract.function(with function parameters) */}
          {/* In this case, we are claiming tokenID 0 and recieving 1 of them */}
          {address && (!ownedNFTs || ownedNFTs.length < 1) && (
            <Web3Button
              contractAddress={NFT_ADDRESS}
              action={(contract) => contract.erc1155.claim(1, 1)}
              onError={(error) => console.log(error.message)}
            >
              Mint
            </Web3Button>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
