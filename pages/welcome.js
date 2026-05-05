// Welcome Page - Landing/Home page
const WelcomePage = {
    id: "welcome",
    title: "Welcome to Harmony Bridge",
    breadcrumb: "Home",
    content: `
        <div class="manual-card">
            <div class="page-header">
                <h2>Harmony Bridge Help Portal</h2>
                <div class="breadcrumb">Welcome</div>
            </div>
            <div class="content-body">
                <p><strong>Harmony Bridge</strong> is a next-generation trading bridge & aggregation platform that connects MT4/MT5 brokers to multiple liquidity providers, sophisticated routing engines, and smart order management. Designed for low latency, full transparency, and flexibility.</p>
                
                <div class="info-box">
                    🔍 <strong>Quick Tip</strong> — Harmony Bridge provides real-time symbol mapping, STP/B-Book hybrid routing, scalper detection, spread control, and advanced reporting.
                </div>
                <h3>🔹 TRADERS & INTEGRATION</h3>
                <ul>
                    <li>Multi-Platform Servers (MT4/MT5/ cTrader)</li>
                    <li>Multi-Channel Connection & Gateways</li>
                    <li>Plugins / Custom Adapters</li>
                </ul>
                <h3>🔹 HARMONY CORE SERVICES</h3>
                <ul>
                    <li>Trade Processor & Aggregator</li>
                    <li>Rule-based Order Flow & B-Book Provider</li>
                    <li>Synthetic Symbol Engine & HTML5 UI</li>
                </ul>
                <div class="footer-links">
                    <span class="quick-link" data-page="symbol-map-config">Get Started</span>
                    <span class="quick-link" data-page="knowledgebase">Knowledge Base</span>
                    <span class="quick-link" data-page="uiguide">UI Help</span>
                    <span class="quick-link" data-page="contact">Contact us</span>
                </div>
            </div>
        </div>
    `
};

// Register this page (will be collected by main app)
if (typeof window !== 'undefined') {
    window.Pages = window.Pages || {};
    window.Pages[WelcomePage.id] = WelcomePage;
}