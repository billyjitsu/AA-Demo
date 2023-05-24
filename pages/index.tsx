import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
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
          <Web3Button
          contractAddress={"0x8B0Acf13633c77C36982825a289Ea1D449cb33e0"}
          action={(contract) => {
            contract.erc1155.claim(0, 1);
          }}
          onSuccess={async () => await alert("Claimed!")}
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
