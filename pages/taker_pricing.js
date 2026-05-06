// Taker Pricing Page
const TakerPricing = {
    id: "taker-pricing",
    title: "Taker Pricing",
    breadcrumb: "Get Started → Taker → Pricing",
    content: `
        <div class="manual-card">
            <div class="page-header">
                <h2>Pricing</h2>
                <div class="breadcrumb">Get Started → Taker → Pricing</div>
            </div>
            <div class="content-body">
                <p>This section is for configuring the pricing behavior for the Taker connector.</p>
                <div class="architecture-diagram">
                    <img src="./images/taker_pricing_ss.png" alt="Taker Pricing Diagram" class="architecture-image">
                </div>

                <p>
                    Pricing behaviour for individual taker symbols need to be configured for each connector.
                    This includes setting up markups, spreads, throttling, and other pricing rules to map the symbols pricing from liquidity pools to the connecting system.
                    Each symbol can have its own unique pricing configuration, allowing for granular control over how prices are calculated and presented to the end system.
                </p>

                <h4>Steps to Configure Taker Pricing</h4>

                <div class = "architecture-diagram">
                    <img src="./images/taker_pricing_setup_ss.png" alt="Taker Pricing Configuration Diagram" class="architecture-image">
                </div>

                <ol>
                    <li>Navigate to Taker Pricing page</strong></li>
                    <li>Select the connector in which you want to add pricing rule, from the top right corner</li>
                    <li>Click on "Add" button, it will open the pricing rule configuration modal</li>
                        <ul>
                            <li><strong>Enabled</strong> - Toggle to enable or disable the pricing rule</li>
                            <li><strong>Symbol</strong> - Select the symbol to configure pricing (Bridge Symbol)</li>
                            <li><strong>Alias</strong> - Define an alias for the symbol (name of the symbol in the connector platform)</li>
                            <li><strong>Main Pool</strong> - Specify the main liquidity pool for the symbol</li>
                            <li><strong>Backup Pool</strong> - Specify the backup liquidity pool for the symbol</li>
                            <li><strong>Bid Markup</strong> - Add a fixed amount (in points) to the bid price</li>
                            <li><strong>Offer Markup</strong> - Add a fixed amount (in points) to the offer price</li>
                            <li><strong>Min.Spread</strong> - Set the minimum spread for the symbol</li>
                            <li><strong>Max.Spread</strong> - Set the maximum spread for the symbol</li>
                            <li><strong>Market Depth</strong> - Specify the market depth for the symbol for the taker (only 1 available for timebeing), if no value is specified, all layers will be provided to the taker</li>
                            <li><strong>Throttling</strong> - Limit price updates to reduce noise</li>
                            <li><strong>Fallback</strong> - Time to fallback to the backup pool in ms</li>
                        </ul>
                    </li>
                    <li>Add the configuration and monitor the pricing behavior</li>
                </ol>

                <h4>Editing Existing Pricing Rules</h4>
                <p>
                    To edit an existing pricing rule, click on the "Edit" button next to the rule you want to modify. 
                    This will open the pricing rule configuration modal with the current settings pre-filled. 
                    You can make changes to any of the fields except for the symbol field, which is not editable once a pricing rule is created.
                    After making the necessary changes, save the configuration to update the pricing rule.
                </p>

                <h4>Add mulitple rules for the same symbol</h4>
                <p>
                    Multiple pricing rules can be added for the same symbol to allow for different pricing configurations based on various conditions such as time of day, 
                    market volatility, or specific trading strategies. 
                    To adding a new pricing rule for a symbol that already has an existing rule, click on the + button next to the rule which opens the similar modal as Add
                    there select the Event Tag* which specifies the conditions under which each rule should be applied. 
                    This allows for dynamic pricing adjustments based on real-time market data and other relevant factors.

                    These rules will be displayed in rows under the same symbol in the pricing rules table, with the Event Tag column indicating the specific conditions for each rule.
                </p>

                <div class="info-box">
                    <ul>
                        <li>All * fields are the required fields to be filled in order to add a pricing rule.</li>
                        <li>Import/Export option is available for bulk configuration of pricing rules.</li>
                        <li>Main and backup pools in pricing can only be either Simple or Aggregator type.</li>
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
    window.Pages[TakerPricing.id] = TakerPricing;
}