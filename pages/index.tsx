import {
  ConnectWallet,
  Web3Button,
  useAddress,
  useDisconnect,
  useContract,
  useNFT,
  useOwnedNFTs,
} from "@thirdweb-dev/react";
import type { NextPage } from "next";
import { NFT_ADDRESS } from "../constants/addresses";
import React from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const address = useAddress();
  const disconnect = useDisconnect();
  const { contract } = useContract(NFT_ADDRESS);
  const { data } = useNFT(contract, 0); //Data of tokenID
  const { data: ownedNFTs, isLoading: loadingOwnedNFTs } = useOwnedNFTs(
    contract,
    address
  );
  const [transferAddress, setTransferAddress] = React.useState("");

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="http://thirdweb.com/">BASE</a>!
        </h1>

        <div className={styles.connect}>
          <ConnectWallet />
        </div>

        <div className={styles.connect}>
          {!loadingOwnedNFTs &&
            ownedNFTs &&
            ownedNFTs.map((nft, index) => (
              <>
                <img
                  key={index}
                  src={nft.metadata.image}
                  alt={nft.metadata.name}
                  className={styles.nftImage}
                />

                <input
                  type="text"
                  value={transferAddress}
                  onChange={(e) => setTransferAddress(e.target.value)}
                  placeholder="Enter address to transfer NFT"
                  className={styles.inputField}
                />

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
                  // onSuccess={() =>
                  //     toast({
                  //     title: 'Transfer Completed.',
                  //     description: "Your element has been transferred.",
                  //     status: 'success',
                  //     duration: 9000,
                  //     isClosable: true,
                  // })
                  // }
                >
                  Transfer
                </Web3Button>
              </>
            ))}

          {address && !ownedNFTs && (
            <Web3Button
              contractAddress={NFT_ADDRESS}
              action={(contract) => {
                contract.erc1155.claim(0, 1);
              }}
              //onSuccess={async () => await alert("Claimed!")}
              onError={(error) => alert(error.message)}
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
