import type { AppProps } from "next/app";
import { ThirdwebProvider, coinbaseWallet, localWallet, metamaskWallet, paperWallet } from "@thirdweb-dev/react";
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
    paperWallet({
      clientId: '675a1c42-9260-42c4-9d00-23aaaf3c4080',
    }),
    coinbaseWallet(),
    metamaskWallet(),
    localWallet(),
    
  ]}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
