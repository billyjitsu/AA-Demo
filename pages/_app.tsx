import type { AppProps } from "next/app";
// Import tools for wallets and the provider for the wallets
import { ThirdwebProvider, coinbaseWallet, localWallet, metamaskWallet, paperWallet, smartWallet } from "@thirdweb-dev/react";
import { API_KEY, FACTORY_ADDRESS, CLIENT_ID } from "../constants/addresses";
// Import chain support
import { BaseGoerli } from "@thirdweb-dev/chains";


import "../styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = BaseGoerli;
 //const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain}
    supportedWallets={[
    smartWallet({
      //Address of the Smart account factory you deployed
      factoryAddress: FACTORY_ADDRESS,
      //Your third web API Key you generated
      thirdwebApiKey: API_KEY,
      // You will be covering the gas for the user
      gasless: true,
      //Adding options for wallets to be used in the smart wallet
      //Paperwallet is an exteranl wallet option that requires a clientId
      personalWallets: [coinbaseWallet(), metamaskWallet(), localWallet(), ],

    }),

    // Wallets can also sit externally of the smart wallet (pay their own gas), They sit outside of the smart wallet brackes
    // but still within the supported wallets array
    
    // paperWallet({
    //   clientId: CLIENT_ID,
    // }),
     coinbaseWallet(),
    // metamaskWallet(),
    // localWallet(),
    
  ]}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
