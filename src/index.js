import config from "./config.js";
import wallet, { connectWallet } from "./wallet.js";

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

connectWallet();
