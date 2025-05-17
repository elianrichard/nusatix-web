"use client";

import { useCallback, useEffect, useRef } from "react";
import { LocalStorageKeyEnum } from "@/static/constants/local-storage";
import useWeb3Store, { Web3StoreStatusEnum } from "@/store/useWeb3Store";
import { getLocalStorage, removeLocalStorage } from "@/utils/local-storage";
import { getWeb3Account } from "@/utils/web3";

export default function useInitializeWeb3() {
  const connectWeb3Wallet = useWeb3Store((state) => state.connectWallet);
  const setWeb3Status = useWeb3Store((state) => state.setStatus);
  const isRendered = useRef(false);

  const handleInitializeWeb3 = useCallback(async () => {
    if (!window.ethereum) {
      setWeb3Status(Web3StoreStatusEnum.METAMASK_UNINSTALLED);
      return;
    }

    const localAccount = getLocalStorage(
      LocalStorageKeyEnum.WEB3_ACCOUNT_ADDRESS,
    );
    const account = await getWeb3Account();

    if (localAccount && account) {
      connectWeb3Wallet(account);
      setWeb3Status(Web3StoreStatusEnum.CONNECTED);
      return;
    }

    removeLocalStorage(LocalStorageKeyEnum.WEB3_ACCOUNT_ADDRESS);
    setWeb3Status(Web3StoreStatusEnum.DISCONNECTED);
  }, [connectWeb3Wallet, setWeb3Status]);

  useEffect(() => {
    if (isRendered.current) return;
    isRendered.current = true;
    void handleInitializeWeb3();
  }, [handleInitializeWeb3]);
}
