import Link from "next/link";
import Button from "@/components/Button";
import useConnectionWeb3 from "@/hooks/useConnectionWeb3";
import useWeb3Store, { Web3StoreStatusEnum } from "@/store/useWeb3Store";
import { simplifyAddress } from "@/utils/string";

const ConnectButton = () => {
  const web3Status = useWeb3Store((state) => state.status);
  const web3Account = useWeb3Store((state) => state.account);

  const { connectWalletHandler, disconnectWalletHandler } = useConnectionWeb3();

  switch (web3Status) {
    case Web3StoreStatusEnum.METAMASK_UNINSTALLED:
      return (
        <Link href={"https://metamask.io/download"} target="_blank">
          <Button>Install Metamask</Button>
        </Link>
      );
    case Web3StoreStatusEnum.DISCONNECTED:
    case Web3StoreStatusEnum.ERROR:
      return <Button onClick={connectWalletHandler}>Connect Wallet</Button>;
    case Web3StoreStatusEnum.CONNECTED:
    case web3Account:
      return (
        <div className="flex items-center gap-4">
          <div className="flex flex-col gap-0">
            <p>{simplifyAddress(web3Account?.address)}</p>
            <p>Balance: {web3Account?.balance}</p>
          </div>
          <Button onClick={disconnectWalletHandler}>Logout</Button>
        </div>
      );
    default:
      return null;
  }
};
export default ConnectButton;
