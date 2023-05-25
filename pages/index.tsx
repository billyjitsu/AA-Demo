import {
  ConnectWallet,
  Web3Button,
  useAddress,
  useContract,
  useNFT,
  useOwnedNFTs,
  MediaRenderer,
} from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { NFT_ADDRESS } from "../constants/addresses";
import React from "react";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const address = useAddress();
  const { contract } = useContract(NFT_ADDRESS);
 // const { data } = useNFT(contract, 0); //Data of tokenID
  const { data: ownedNFTs, isLoading: loadingOwnedNFTs } = useOwnedNFTs(
    contract,
    address
  );
  const [transferAddress, setTransferAddress] = React.useState("");

  useEffect(() => {
    console.log("Owned NFTs", ownedNFTs?.length);
  }, [address, ownedNFTs]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="http://thirdweb.com/">BASE</a>!
        </h1>

        <div >
          <ConnectWallet />
        </div>

        <div >
          {!loadingOwnedNFTs &&
            ownedNFTs &&
            ownedNFTs.map((nft, index) => (
              <>
                
                <MediaRenderer
                  key={index}
                  src={nft.metadata.image}
                  className={styles.nftImage}
                />

                <input
                  type="text"
                  value={transferAddress}
                  onChange={(e) => setTransferAddress(e.target.value)}
                  placeholder="Enter address to transfer NFT"
                  className={styles.inputField}
                />
                { transferAddress && transferAddress.length > 0 && (
                <Web3Button
                  contractAddress={NFT_ADDRESS}
                  action={(contract) =>
                    contract.erc1155.transfer(
                      transferAddress,
                      nft.metadata.id,
                      1
                    )
                  }
                  onSubmit={() => setTransferAddress("")}
                  onError={(error) => alert(error.message)}
                >
                  Transfer
                </Web3Button>
                )}
              </>
            ))}

    

          {address && (!ownedNFTs || ownedNFTs.length < 1) && (
            <Web3Button
              contractAddress={NFT_ADDRESS}
              action={(contract) => {
                contract.erc1155.claim(0, 1);
              }}
              
              // onSuccess={() => alert("Claimed!")}
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
