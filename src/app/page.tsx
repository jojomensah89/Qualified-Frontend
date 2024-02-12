"use client";

import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function App() {
  const account = useAccount();
  console.log(account);

  return (
    <>
      <ConnectButton />
    </>
  );
}

export default App;
