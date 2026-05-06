// Maker Pricing Page
const MakerPricing = {
    id: "maker-pricing",
    title: "Maker Pricing",
    breadcrumb: "Get Started → Maker → Pricing",
    content: `
        <div class="manual-card">
            <div class="page-header">
                <h2>Pricing</h2>
                <div class="breadcrumb">Get Started → Maker → Pricing</div>
            </div>
            <div class="content-body">
                <p>This section is for configuring the pricing behavior of the provider.</p>
                <div class="architecture-diagram">
                    <img src="./images/maker_pricing_ss.png" alt="Maker Pricing Diagram" class="architecture-image">
                </div>

                <p>
                    Pricing behaviour for individual maker symbols need to be configured for each provider.
                    This includes setting up markups, and market depth to be provided to the taker.
                    Each symbol can have its own unique pricing configuration, allowing for granular control over how prices are calculated and presented to the end system.
                </p>

                <h4>Steps to Configure Maker Pricing</h4>

                <div class = "architecture-diagram">
                    <img src="./images/maker_pricing_setup_ss.png" alt="Maker Pricing Configuration Diagram" class="architecture-image">
                </div>

                <ol>
                    <li>Navigate to Maker Pricing page</strong></li>
                    <li>Select the provider in which you want to add pricing rule, from the top right corner</li>
                    <li>Click on "Add" button, it will open the pricing rule configuration modal</li>
                        <ul>
                            <li><strong>Enabled</strong> - Toggle to enable or disable the pricing rule</li>
                            <li><strong>Symbol</strong> - Select the symbol to configure pricing (Bridge Symbol)</li>
                            <li><strong>Alias</strong> - Define an alias for the symbol (name of the symbol in the provider platform)</li>
                            <li><strong>Bid Markup</strong> - Add a fixed amount (in points) to the bid price</li>
                            <li><strong>Offer Markup</strong> - Add a fixed amount (in points) to the offer price</li>
                            <li><strong>Market Depth</strong> - Specify the market depth to be provided from the selected provider (only 1 available for timebeing), if no value is specified, all layers will be provided to the taker)</li>
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

                <div class="info-box">
                    <ul>
                        <li>All * fields are the required fields to be filled in order to add a pricing rule.</li>
                        <li>Import/Export option is available for bulk configuration of pricing rules.</li>
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
    window.Pages[MakerPricing.id] = MakerPricing;
}