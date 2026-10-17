// Son işlemler modülü

async function getTransactions(address) {
  if (!address) {
    console.log("Cüzdan adresi bulunamadı.");
    return [];
  }

  try {
    console.log("Son işlemler alınıyor:", address);

    // TRONGrid API sorgusu buraya eklenecek
    const transactions = [];

    return transactions;
  } catch (error) {
    console.error("İşlemler alınamadı:", error.message);
    return [];
  }
}

export { getTransactions };
