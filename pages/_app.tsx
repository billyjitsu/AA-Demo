import type { AppProps } from "next/app";
import { ThirdwebProvider, coinbaseWallet, localWallet, metamaskWallet, paperWallet, smartWallet } from "@thirdweb-dev/react";
import { API_KEY, FACTORY_ADDRESS, CLIENT_ID } from "../constants/addresses";
import { BaseGoerli } from "@thirdweb-dev/chains";


import "../styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
//const activeChain = BaseGoerli;
 const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain}
    supportedWallets={[
    smartWallet({
      factoryAddress: FACTORY_ADDRESS,
      thirdwebApiKey: API_KEY,
      gasless: true,
      personalWallets: [coinbaseWallet(), metamaskWallet(), localWallet(), paperWallet({
        clientId: CLIENT_ID,
      }), ],

    }),

    paperWallet({
      clientId: CLIENT_ID,
    }),
    // coinbaseWallet(),
    // metamaskWallet(),
    // localWallet(),
    
  ]}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
