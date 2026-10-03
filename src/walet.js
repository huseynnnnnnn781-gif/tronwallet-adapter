const wallet = {
  connected: false,
  address: null,
  balance: 0
};

async function connectWallet() {
  try {
    const provider = window.tron;

    if (!provider) {
      throw new Error("TronLink bulunamadı");
    }

    const accounts = await provider.request({
      method: "eth_requestAccounts"
    });

    const tronWeb = provider.tronWeb;

    if (!tronWeb || !accounts[0]) {
      throw new Error("Cüzdan bağlantısı kurulamadı");
    }

    wallet.connected = true;
    wallet.address = accounts[0];

    const balanceSun = await tronWeb.trx.getBalance(wallet.address);
    wallet.balance = tronWeb.fromSun(balanceSun);

    console.log("TronLink bağlandı:", wallet);
    return wallet;
  } catch (error) {
    console.error("TronLink bağlantı hatası:", error.message);
    return wallet;
  }
}

export { connectWallet };
export default wallet;