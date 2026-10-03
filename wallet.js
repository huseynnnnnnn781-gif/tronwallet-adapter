const wallet = {
  connected: false,
  address: null,
  balance: 0
};

function getWalletStatus() {
  return wallet;
}

console.log("Wallet modülü yüklendi");
console.log(getWalletStatus());

export default wallet;