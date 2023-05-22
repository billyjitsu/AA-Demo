import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="http://thirdweb.com/">thirdweb</a>!
        </h1>

        <div className={styles.connect}>
          <ConnectWallet />
        </div>

        <div className={styles.connect}>
          <Web3Button
          contractAddress={"0x7Fc61eBCc06e324f04Ad2Fe0d25C44Ae79101208"}
          //action={(contract) => contract.erc721.claim(1)}
          action={(contract) => {
            contract.erc1155.lazyMint(1, "ipfs://Qmcny3J5yGpWjJsvR92DQAZcHYWLDep6GdgdKJTRxU1qyo", "0x0");
          }}
          onSuccess={() => alert("Claimed!")}
          onError={(error) => alert(error.message)}
          >
            Mint
          </Web3Button>
        </div>


        
      </main>
    </div>
  );
};

export default Home;
