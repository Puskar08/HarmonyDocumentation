// Taker Configuration Page
const TakerConfigurationPage = {
    id: "taker-configuration",
    title: "Taker Configuration",
    breadcrumb: "Get Started → Taker → Configuration",
    content: `
        <div class="manual-card">
            <div class="page-header">
                <h2>⚙️ Taker Configuration</h2>
                <div class="breadcrumb">Get Started → Taker → Configuration</div>
            </div>
            <div class="content-body">
                <p>Step-by-step guide to configure the Taker module.</p>
                
                <h3>Prerequisites</h3>
                <ul>
                    <li>Harmony Bridge Core installed and running</li>
                    <li>API access to liquidity providers</li>
                    <li>Administrator privileges</li>
                </ul>
                
                <h3>Configuration Steps</h3>
                <ol>
                    <li>Navigate to <strong>Settings → Taker Module</strong></li>
                    <li>Enable Taker module toggle</li>
                    <li>Configure basic parameters:
                        <ul>
                            <li>Base spread (default: 0.5 pips)</li>
                            <li>Maximum position size</li>
                            <li>Inventory limits</li>
                        </ul>
                    </li>
                    <li>Set up pricing rules (see <a href="#" data-page="taker-pricing" class="quick-link">Taker Pricing Rules</a>)</li>
                    <li>Configure liquidity sources</li>
                    <li>Save and restart the engine</li>
                </ol>
                
                <div class="info-box">
                    💡 <strong>Tip:</strong> Start with conservative settings and gradually optimize based on performance metrics.
                </div>
            </div>
        </div>
    `
};

if (typeof window !== 'undefined') {
    window.Pages = window.Pages || {};
    window.Pages[TakerConfigurationPage.id] = TakerConfigurationPage;
    console.log("✅ Registered taker-configuration page:", TakerConfigurationPage.id);
}