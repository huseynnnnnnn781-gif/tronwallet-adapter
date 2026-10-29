import config from "./config.js";
import wallet, { connectWallet } from "./wallet.js";
import { getTransactions } from "./transactions.js";

console.log("TronWallet Adapter Başlatıldı");

const app = {
  name: "TronWallet Adapter",
  version: "0.1.0",
  status: "development"
};

console.log(app);

console.log("Config:");
console.log(config);

console.log("Wallet:");
console.log(wallet);

async function startApp() {
  const connectedWallet = await connectWallet();

  console.log("Adres:", connectedWallet.address);
  console.log("Bakiye:", connectedWallet.balance, "TRX");

  const transactions = await getTransactions(connectedWallet.address);
  console.log("Son işlemler:", transactions);
}

startApp();



