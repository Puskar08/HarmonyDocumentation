// Maker Overview Page
const MakerOverviewPage = {
    id: "maker",
    title: "Maker Module Overview",
    breadcrumb: "Get Started → Maker",
    content: `
        <div class="manual-card">
            <div class="page-header">
                <h2>Maker</h2>
                <div class="breadcrumb">Get Started → Maker</div>
            </div>
            <div class="content-body">
                
                <div class="info-box">
                    A Maker is a liquidity provider that provides price quotes and liquidity. 
                    It represents a system, platform, or connector that supplies the liquidity.
                </div>
                
                <h3>Architecture</h3>
                <p>The Maker module sits between your trading engine and liquidity sources, providing intelligent order management and pricing optimization.</p>
                

                <p>
                    A Maker is responsible for:
                    <ul>
                        <li>Providing and processing market data (quotes/ticks) to the trading engine</li>
                        <li>Applying pricing rules (markups, spreads etc.)</li>
                        <li>Publishing prices to downstream systems</li>
                        <li>Handling fallback logic when primary liquidity is unavailable</li>
                    </ul>
                </p>

                <h3>Core Components</h3>
                <ul>
                    <li><strong>Pricing Engine</strong> - Calculates markups, spreads and throttling</li>
                    <li><strong>Trading Router</strong> - Routes orders to optimal venues</li>
                    <li><strong>Conversion Engine</strong> - Generate the synthetic symbols</li>
                    <li><strong>Pool Manager</strong> - Manages liquidity pools and their profiles</li>
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
    window.Pages[MakerOverviewPage.id] = MakerOverviewPage;
    console.log("✅ Registered maker page:", MakerOverviewPage.id);
}