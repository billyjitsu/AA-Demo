import type { AppProps } from "next/app";
import { ThirdwebProvider, coinbaseWallet, localWallet, metamaskWallet, paperWallet, smartWallet } from "@thirdweb-dev/react";
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
      factoryAddress: '0xB9363F27ac474A8Dd250cC02e28aC18c3b5E7c5F',
      thirdwebApiKey: '6553f9f9a0b9ac8020484929cbc5a9ce7d2ca88c266b83d9f9b0aef08cc7c7cba31860772381f86f1c751dbb1148ea9e0fe9d9f21daa0bdb834f7012535ec786',
      gasless: true,
      personalWallets: [coinbaseWallet(), metamaskWallet(), localWallet(), paperWallet({
        clientId: '675a1c42-9260-42c4-9d00-23aaaf3c4080',
      }), ],

    }),

    paperWallet({
      clientId: '675a1c42-9260-42c4-9d00-23aaaf3c4080',
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
