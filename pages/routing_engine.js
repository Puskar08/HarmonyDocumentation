// Routing Engine Page
const RoutingEnginePage = {
    id: "routing-stp-bbook",
    title: "Routing: STP or B-Book? (Rule Engine)",
    breadcrumb: "Risk Management → Rule Engine",
    content: `
        <div class="manual-card">
            <div class="page-header">
                <h2>🧭 Routing Engine: STP vs B-Book</h2>
                <div class="breadcrumb">Risk Management → Rules</div>
            </div>
            <div class="content-body">
                <p>Conditional routing rules: if volume > threshold → STP to LP, else B-Book internalization. Full hybrid control.</p>
                <h3>✍️ Rule Configuration</h3>
                <ul>
                    <li>Define condition: volume, instrument, client group, time, or risk score</li>
                    <li>Set Action: STP (send to LP), B-Book (internal hedge), or Reject</li>
                    <li>Apply to specific symbols or all</li>
                </ul>
                <div class="info-box">📈 Typical use: STP orders above 5 lots, B-Book smaller orders for optimized liquidity.</div>
            </div>
        </div>
    `
};

if (typeof window !== 'undefined') {
    window.Pages = window.Pages || {};
    window.Pages[RoutingEnginePage.id] = RoutingEnginePage;
}