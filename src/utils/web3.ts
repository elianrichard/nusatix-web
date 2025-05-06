import {
  BrowserProvider,
  formatUnits,
  parseEther,
  Contract,
  type BigNumberish,
  type ContractTransaction,
  type BaseContract,
} from "ethers";
import ABI from "@/static/constants/Tix.json";
import type { TWeb3Account } from "@/store/useWeb3Store";

interface TixContract extends BaseContract {
  payToMint(
    to: string,
    uri: string,
    value: BigNumberish,
    overrides?: {
      value?: BigNumberish;
    },
  ): Promise<ContractTransaction>;
  isContentOwned(uri: string): Promise<boolean>;
}

export const getWebEthereum = () => {
  if (!window.ethereum) {
    alert("You don't have MetaMask installed!");
    return null;
  }
  return window.ethereum;
};

export const getWeb3BrowserProvider = () => {
  const web3 = getWebEthereum();
  if (!web3) return null;
  const provider = new BrowserProvider(web3);
  return provider;
};

export const requestEthereumChainSwitch = async () => {
  const provider = getWeb3BrowserProvider();
  if (!provider) return;
  const chainId = await provider.getNetwork();
  if (chainId.chainId !== BigInt(0x7a69)) {
    await provider.send("wallet_switchEthereumChain", [{ chainId: "0x7A69" }]);
  }
};

export const getWeb3Signer = async () => {
  const provider = getWeb3BrowserProvider();
  if (!provider) return null;
  const signer = await provider.getSigner();
  return signer;
};

export const getWeb3Address = async () => {
  const signer = await getWeb3Signer();
  if (!signer) return null;
  const address = await signer.getAddress();
  return address;
};

export const getWeb3Balance = async () => {
  const provider = getWeb3BrowserProvider();
  const address = await getWeb3Address();
  if (!provider || !address) return null;
  const balance = await provider.getBalance(address);
  return formatUnits(balance);
};

export const getWeb3Account = async (): Promise<TWeb3Account | null> => {
  const balance = await getWeb3Balance();
  const address = await getWeb3Address();
  await requestEthereumChainSwitch();
  if (!address || !balance) return null;
  return { address, balance };
};

export const signInWeb3Account = async (): Promise<TWeb3Account | null> => {
  const provider = getWeb3BrowserProvider();
  if (!provider) return null;
  await provider.send("wallet_requestPermissions", [{ eth_accounts: {} }]);
  await requestEthereumChainSwitch();
  return await getWeb3Account();
};

export const getWeb3Contract = async () => {
  const provider = getWeb3BrowserProvider();
  const signer = await getWeb3Signer();
  if (!provider || !signer) return null;
  const contract = new Contract(
    "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    ABI.abi,
    signer,
  ) as unknown as TixContract;

  return contract;
};

export const mintTicket = async (uri: string) => {
  const contract = await getWeb3Contract();
  const signer = await getWeb3Signer();
  if (!contract || !signer) return null;

  const address = await contract.getAddress();
  try {
    const tx = await contract.payToMint?.(address, uri, parseEther("0.05"), {
      value: parseEther("0.05"), // passed as ETH with transaction
    });

    return tx;
  } catch (error) {
    console.error("Error minting ticket:", error);
    return null;
  }
};

export const getMintedTicketsStatus = async (uri: string) => {
  const contract = await getWeb3Contract();
  if (!contract) return null;
  try {
    const isOwned = await contract.isContentOwned?.(uri);
    return isOwned;
  } catch (error) {
    console.error("Error checking ticket status:", error);
    return null;
  }
};

export const getMintedTicketTransactionStatus = async (txHash: string) => {
  const provider = getWeb3BrowserProvider();
  if (!provider) return null;
  await provider.waitForTransaction(txHash);
};
