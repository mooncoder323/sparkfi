import detectEthereumProvider from "@metamask/detect-provider";
import WalletConnectProvider from "@walletconnect/web3-provider";
import type { Dispatch } from "react";
import { toast } from "react-toastify";
import Web3 from "web3";
import type { JsonRpcPayload, JsonRpcResponse } from "web3-core-helpers";
import type { AbstractProvider } from "web3-core/types";
import type { ActionType } from "../store/types";

export declare class WalletConnectWeb3Provider
  extends WalletConnectProvider
  implements AbstractProvider
{
  sendAsync(
    payload: JsonRpcPayload,
    callback: (error: Error | null, result?: JsonRpcResponse) => void
  ): void;
}

function dispatchStates(
  dispatch: Dispatch<ActionType>,
  account: string,
  provider: any,
  web3: Web3
) {
  console.log("account", account, "isMetaMask", provider.isMetaMask);
  dispatch({ type: "SET_ACCOUNT", payload: account });
  dispatch({ type: "SET_PROVIDER", payload: provider });
  dispatch({ type: "SET_WEB3", payload: web3 });
  return { account, web3 };
}

export async function handleInjectedProvider(dispatch: Dispatch<ActionType>) {
  const injectedProvider: any = await detectEthereumProvider();
  let provider: any;

  if (injectedProvider) {
    console.log(`Injected web3 detected.`);
    provider = injectedProvider;
  } else {
    console.log(`No web3 instance injected, using Local web3.`);
    toast.error("Please install MetaMask first.", {
      position: "bottom-center",
      autoClose: 5000,
    });
    provider = new Web3.providers.HttpProvider("http://localhost:7545");
  }
  const web3 = new Web3(provider);
  // REF: https://docs.metamask.io/guide/getting-started.html#connecting-to-metamask
  const accounts = await provider.request({ method: "eth_requestAccounts" });

  // The following code seems not working if trigger disconnect from MetaMask Chrome extension
  provider.on("disconnect", (error: any) => {
    dispatch({ type: "CLEAR_STATE" });
    console.log(error);
  });

  return dispatchStates(dispatch, accounts[0], provider, web3);
}

export async function handleWalletConnect(dispatch: Dispatch<ActionType>) {
  const infuraProjectId = process.env.NEXT_PUBLIC_INFURA_PROJECT_ID;
  //  Create WalletConnect Provider
  const provider = new WalletConnectProvider({
    rpc: {
      4: `https://rinkeby.infura.io/v3/${infuraProjectId}`,
      80001: "https://rpc-mumbai.maticvigil.com/",
      1666700000: "https://api.s0.b.hmny.io",
      // ...
    },
  });

  // Enable session (triggers QR Code modal)
  await provider.enable();

  const web3 = new Web3(provider as WalletConnectWeb3Provider);
  const accounts = await web3.eth.getAccounts();

  provider.on("disconnect", (code: number, reason: string) => {
    dispatch({ type: "CLEAR_STATE" });
    console.log(code, reason);
  });

  return dispatchStates(dispatch, accounts[0], provider, web3);
}
