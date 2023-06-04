## Account Abstraction Demo

Demo showing the ability to have two user experiences on your DAPP. Transaction paid by the user (using Coinbase Wallet) and transaction covered by the host (having Coinbase Wallet, Metamask, Paper Wallet and Thirdweb's Guest Wallet as options).

This repo will connect you to existing NFT and smart contracts deployed on BASE network. 
You must **generate your own API Key** from the [ThirdWeb](https://thirdweb.com/) dashboard for the Smart Wallet functions to work.

The "Client ID" is generated from Paper Wallet to add in external wallet functionality such as using your Gmail as a wallet.  You can get this ID from https://withpaper.com/.  *It is not necessary to use this and can be commented out in the code, adding is as an option to see the capabilities of what can be done.



## Getting Started

Create a project using this example:

```bash
npx thirdweb create --template next-typescript-starter
```

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

On `pages/_app.tsx`, you'll find our `ThirdwebProvider` wrapping your app, this is necessary for our [hooks](https://portal.thirdweb.com/react) and
[UI Components](https://portal.thirdweb.com/ui-components) to work.

### Deploy to IPFS

Deploy a copy of your application to IPFS using the following command:

```bash
yarn deploy
```

## Learn More

To learn more about thirdweb and Next.js, take a look at the following resources:

- [thirdweb React Documentation](https://docs.thirdweb.com/react) - learn about our React SDK.
- [thirdweb TypeScript Documentation](https://docs.thirdweb.com/typescript) - learn about our JavaScript/TypeScript SDK.
- [thirdweb Portal](https://docs.thirdweb.com) - check our guides and development resources.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

You can check out [the thirdweb GitHub organization](https://github.com/thirdweb-dev) - your feedback and contributions are welcome!

## Join our Discord!

For any questions, suggestions, join our discord at [https://discord.gg/thirdweb](https://discord.gg/thirdweb).
