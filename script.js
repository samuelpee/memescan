function scanToken() {
  const contractAddress = document.getElementById("contractAddress").value;
  const resultDiv = document.getElementById("result");
  const analysisMessage = document.getElementById("analysisMessage");
  const tokenInfoDiv = document.getElementById("tokenInfo");
  const riskBreakdownDiv = document.getElementById("riskBreakdown");

  if (!contractAddress) {
    alert("Please enter a contract address!");
    return;
  }

  // Simulate fetching token data and risk analysis
  const isGoodBuy = Math.random() > 0.5; // Simulate good/risky

  // Fetch token info (for demo purposes, using mock data)
  const tokenInfo = {
    name: "Meme Token",
    symbol: "MEME",
    totalSupply: 1000000,
  };

  // Display token info
  tokenInfoDiv.innerHTML = `
    <h3>Token Information</h3>
    <p><strong>Name:</strong> ${tokenInfo.name}</p>
    <p><strong>Symbol:</strong> ${tokenInfo.symbol}</p>
    <p><strong>Total Supply:</strong> ${tokenInfo.totalSupply}</p>
  `;

  // Simulate risk breakdown
  const riskMetrics = {
    liquidity: isGoodBuy ? "High" : "Low",
    devWallet: isGoodBuy ? "Diversified" : "Concentrated",
    priceVolatility: isGoodBuy ? "Low" : "High",
  };

  // Display risk breakdown
  riskBreakdownDiv.innerHTML = `
    <h3>Risk Breakdown</h3>
    <p><strong>Liquidity:</strong> ${riskMetrics.liquidity}</p>
    <p><strong>Developer Wallet Concentration:</strong> ${riskMetrics.devWallet}</p>
    <p><strong>Price Volatility:</strong> ${riskMetrics.priceVolatility}</p>
  `;

  // Display result
  resultDiv.classList.remove("hidden");
  if (isGoodBuy) {
    analysisMessage.textContent = `The token with contract address ${contractAddress} seems like a good buy!`;
    analysisMessage.className = "good";
  } else {
    analysisMessage.textContent = `The token with contract address ${contractAddress} is risky, proceed with caution!`;
    analysisMessage.className = "risky";
  }

  // Add to recent scans (mock demo)
  const recentTokensList = document.getElementById("recentTokensList");
  const li = document.createElement("li");
  li.textContent = contractAddress;
  recentTokensList.appendChild(li);
}

// Simulate wallet connection for future token scanning
function connectWallet() {
  alert("Wallet connected!");
}
