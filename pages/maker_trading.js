//Maker Trading Page
const MakerTrading = {
    id: "maker-trading",
    title: "Maker Trading",
    breadcrumb: "Get Started → Maker → Trading",
    content: `
        <div class="manual-card">
            <div class="page-header">
                <h2>Trading</h2>
                <div class="breadcrumb">Get Started → Maker → Trading</div>
            </div>
            <div class="content-body">
                <p>This section is for configuring the trading behavior of the provider and similar to the pricing page but the rules configured here works for the trading behaviour.</p>
                <p>Trading page displays all the symbols that are already configured for the selected provider (at the top right corner), 
                    along with their trading configuration details such as spreads, step size, and min max amount available for trading.
                </p>
                <div class="architecture-diagram">
                    <img src="./images/maker_trading_ss.png" alt="Maker Trading Diagram" class="architecture-image">
                </div>

                <p>
                    Trading behavior of individual symbols need to be configured for each provider.
                    This includes setting up markups, and the position size to be accepted for a particular symbol by the provider.
                    Each symbol can have its own unique trading configuration, allowing for granular control over how and where the trades are executed.
                </p>

                <h4>Steps to Configure Provider Trading behavior</h4>

                <div class = "architecture-diagram">
                    <img src="./images/maker_trading_setup_ss.png" alt="Maker Trading Configuration Diagram" class="architecture-image">
                </div>

                <ol>
                    <li>Navigate to Provider Trading page</strong></li>
                    <li>Select the provider in which you want to add trading rule, from the top right corner</li>
                    <li>Click on "Add" button, it will open the trading rule configuration modal</li>
                        <ul>
                            <li><strong>Enabled</strong> - Toggle to enable or disable the trading rule</li>
                            <li><strong>Symbol</strong> - Select the symbol to configure trading (Bridge Symbol)</li>
                            <li><strong>Alias</strong> - Define an alias for the symbol (name of the symbol in the provider platform and need to be same as the alias name in provider pricing)</li>
                            <li><strong>Bid Markup</strong> - Add a fixed amount (in points) to the bid price</li>
                            <li><strong>Offer Markup</strong> - Add a fixed amount (in points) to the offer price</li>
                            <li><strong>Step Size</strong> - Specify the step size for the symbol (size must be in amount not lots)</li>
                            <li><strong>Min.Size</strong> - Specify the minimum order size accepted by the provider (size must be in amount not lots)</li>
                            <li><strong>Max.Size</strong> - Specify the maximum order size accepted by the provideer (size must be in amount not lots)</li>
                        </ul>
                    </li>
                    <li>Add the configuration and monitor the trading behavior</li>
                </ol>

                <h4>Editing Existing Trading Rules</h4>
                <p>
                    To edit an existing trading rule, click on the "Edit" button next to the rule you want to modify. 
                    This will open the trading rule configuration modal with the current settings pre-filled. 
                    You can make changes to any of the fields except for the symbol field, which is not editable once a trading rule is created.
                    After making the necessary changes, save the configuration to update the trading rule.
                </p>


                <div class="info-box">
                    <ul>
                        <li>All * fields are the required fields to be filled in order to add a trading rule.</li>
                        <li>Import/Export option is available for bulk configuration of trading rules.</li>
                    </ul>
                </div>
                
                <div class="footer-links">
                    
                </div>
            </div>
        </div>
    `
};

if (typeof window !== 'undefined') {
    window.Pages = window.Pages || {};
    window.Pages[MakerTrading.id] = MakerTrading;
}