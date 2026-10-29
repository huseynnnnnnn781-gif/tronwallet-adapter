// Son işlemler modülü

async function getTransactions(address) {
  if (!address) {
    console.log("Cüzdan adresi bulunamadı.");
    return [];
  }

  try {
    const safeAddress = encodeURIComponent(address);

    const url =
      `https://api.shasta.trongrid.io/v1/accounts/${safeAddress}/transactions\` +
      `?only_confirmed=true&limit=5&order_by=block_timestamp,desc`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`API hatası: ${response.status}`);
    }

    const result = await response.json();
    const transactions = result.data || [];

    console.log("İşlem sayısı:", transactions.length);

    return transactions;
  } catch (error) {
    console.error("İşlemler alınamadı:", error.message);
    return [];
  }
}

export { getTransactions };
