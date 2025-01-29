document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll for navigation buttons
    document.querySelectorAll(".cta-button").forEach(button => {
        button.addEventListener("click", function () {
            const targetId = this.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Example API call for updating live price and market cap (Placeholder)
    async function fetchCryptoData() {
        try {
            let response = await fetch("https://api.dexscreener.com/latest/dex/pair/solana/HanoCoin");
            let data = await response.json();
            if (data && data.pairs) {
                document.getElementById("price").textContent = `$${data.pairs[0].priceUsd}`;
                document.getElementById("marketCap").textContent = `$${data.pairs[0].marketCap}`;
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    // Fetch data every 30 seconds
    setInterval(fetchCryptoData, 30000);
    fetchCryptoData();
});
