// Taker Overview Page
const TakerOverviewPage = {
    id: "taker",
    title: "Taker Module Overview",
    breadcrumb: "Get Started → Taker",
    content: `
        <div class="manual-card">
            <div class="page-header">
                <h2>Taker</h2>
                <div class="breadcrumb">Get Started → Taker</div>
            </div>
            <div class="content-body">
                
                <div class="info-box">
                    A Taker is a destination or endpoint that receives pricing data (quotes/ticks) from the bridge such as MT5, FIX API and/or Native clients. 
                    It represents a system, platform, or connector that consumes the liquidity.
                </div>
                
                <h3>Architecture</h3>
                <p>The Taker module sits between your trading engine and liquidity sources, providing intelligent order management and pricing optimization.</p>
                

                <p>
                    A Taker is responsible for:
                    <ul>
                        <li>Receiving and processing market data (quotes/ticks) from the bridge</li>
                        <li>Applying pricing rules (markups, spreads, throttling, etc.)</li>
                        <li>Publishing prices to downstream systems</li>
                        <li>Handling fallback logic when primary liquidity is unavailable</li>
                    </ul>
                </p>

                <h3>Core Components</h3>
                <ul>
                    <li><strong>Pricing Engine</strong> - Calculates markups, spreads and throttling</li>
                    <li><strong>Trading Router</strong> - Routes orders to optimal venues</li>
                    <li><strong>Drop Copy</strong> - Monitors inventory and exposure</li>
                </ul>
                
                <div class="footer-links">
                    
                </div>
            </div>
        </div>
    `
};

if (typeof window !== 'undefined') {
    window.Pages = window.Pages || {};
    window.Pages[TakerOverviewPage.id] = TakerOverviewPage;
    console.log("✅ Registered taker page:", TakerOverviewPage.id);
}