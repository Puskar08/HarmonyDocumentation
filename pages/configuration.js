// Configuration Overview Page
const ConfigurationPage = {
    id: "configuration",
    title: "Configuration Module Overview",
    breadcrumb: "Get Started → Configuration",
    content: `
        <div class="manual-card">
            <div class="page-header">
                <h2>Configuration</h2>
                <div class="breadcrumb">Get Started → Configuration</div>
            </div>
            <div class="content-body">
                
                <div class="info-box">
                    In Configuration we configure a set of settings that define how the bridge should behave.
                    Here we will configure various parameters like market sessions, event sessions, bridge symbols and all the connectors.
                </div>
                
                <h3>Architecture</h3>
                <p>This is the main configurations section for the harmony bridge. The operation of the bridge is defined by these settings.</p>
                

                <p>
                    A Configuration is responsible for:
                    <ul>
                        <li>Setting up the market and event sessions</li>
                        <li>Registering bridge symbols</li>
                        <li>Configuring connectors and integrations</li>
                    </ul>
                </p>

                <h3>Core Components</h3>
                <ul>
                    <li><strong>Market Sessions</strong> - Defines the trading hours and conditions for different markets</li>
                    <li><strong>Event Sessions</strong> - Defines the timing and rules for market events</li>
                    <li><strong>Bridge Symbols</strong> - Represents the financial instruments available through the bridge</li>
                    <li><strong>Connectors</strong> - Facilitate communication with external systems and liquidity sources</li>
                    <li><strong>Integrations</strong> - Enable seamless interaction with various third-party platforms</li>
                </ul>
                
                <div class="footer-links">
                    
                </div>
            </div>
        </div>
    `
};

if (typeof window !== 'undefined') {
    window.Pages = window.Pages || {};
    window.Pages[ConfigurationPage.id] = ConfigurationPage;
    console.log("✅ Registered configuration page:", ConfigurationPage.id);
}