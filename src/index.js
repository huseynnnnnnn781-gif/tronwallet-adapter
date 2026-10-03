import config from "./config.js";
import wallet from "./wallet.js";
console.log("TronWallet Adapter Başlatıldı");

const app = {
  name: "TronWallet Adapter",
  version: "0.1.0",
  status: "development"
};

console.log(app);

// Wallet kontrol modülü
function checkWallet() {
  const wallet = {
    connected: false,
    address: null,
    balance: 0
  };

  console.log("Wallet Durumu:");
  console.log(wallet);

  return wallet;
}

checkWallet();

console.log("Config:");
console.log(config);

console.log("Wallet:");
console.log(wallet);