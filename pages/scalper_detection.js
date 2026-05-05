// Scalper Detection Page
const ScalperDetectionPage = {
    id: "scalper-detection",
    title: "Scalper Detection & Actions",
    breadcrumb: "Risk → Scalper Protection",
    content: `
        <div class="manual-card">
            <div class="page-header">
                <h2>🛡️ Scalper Detection & Actions</h2>
                <div class="breadcrumb">Risk → Scalper Protection</div>
            </div>
            <div class="content-body">
                <p>Set minimum trade interval (seconds). Actions: reject trade, add spread, log alerts, or flag user.</p>
                <h3>Detection Settings</h3>
                <ul>
                    <li><strong>Minimum trade interval:</strong> 3 seconds default, configurable</li>
                    <li><strong>Consecutive trades within interval:</strong> triggers action</li>
                    <li><strong>Action:</strong> add spread (e.g., +2 pips) / reject / warn</li>
                </ul>
                <div class="info-box">📊 Reporting: All scalper alerts are logged and available in the Analytics dashboard.</div>
            </div>
        </div>
    `
};

if (typeof window !== 'undefined') {
    window.Pages = window.Pages || {};
    window.Pages[ScalperDetectionPage.id] = ScalperDetectionPage;
}