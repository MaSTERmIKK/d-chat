import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Layout from "./layout";
import { Provider } from "jotai";
import { useEffect } from "react";
import Moralis from "moralis";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "goerli";

function MyApp({ Component, pageProps }: AppProps) {
  const startMoralis = async () => {
    await Moralis.start({
      apiKey",
    });
  };
  useEffect(() => {
    startMoralis();
  }, []);
  return (
    <ThirdwebProvider activeChain={activeChain}>
      <Provider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThirdwebProvider>
  );
}

export default MyApp;
