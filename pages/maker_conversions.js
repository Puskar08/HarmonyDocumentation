// Maker Conversions Page
const Conversions = {
    id: "maker-conversions",
    title: "Maker Conversions",
    breadcrumb: "Get Started → Maker → Conversions",
    content: `
        <div class="manual-card">
            <div class="page-header">
                <h2>Conversions</h2>
                <div class="breadcrumb">Get Started → Maker → Conversions</div>
            </div>
            <div class="content-body">
                <p>This section is for configuring the synthetic/derived symbols to be provided to the end system.</p>
                <div class="architecture-diagram">
                    <img src="./images/maker_conversions_ss.png" alt="Maker Conversions Diagram" class="architecture-image">
                </div>

                <p>
                    The main page shows the list of all the derived symbols by the provider, with details such as target, source, price and volume multipliers.
                </p>

                <h4>Steps to Configure Maker Conversions</h4>

                <div class = "architecture-diagram">
                    <img src="./images/maker_conversions_setup_ss.png" alt="Maker Conversions Configuration Diagram" class="architecture-image">
                </div>

                <ol>
                    <li>Navigate to Maker Conversions page</strong></li>
                    <li>Select the provider in which you want to add a new symbol, from the top right corner</li>
                    <li>Click on "Add" button, it will open the conversion rule configuration modal</li>
                        <ul>
                            <li><strong>Enabled</strong> - Toggle to enable or disable the conversion rule</li>
                            <li><strong>Target Symbol</strong> - Select the symbol to configure conversion (Bridge Symbol)</li>
                            <li><strong>Source Symbol</strong> - Select the source for the target symbol</li>
                            <li><strong>Leftover Pool</strong> - Select the leftover pool that will be used to transfer the trades from this symbol when there is accumulation of the leftover volume</li>
                            <li><strong>Price Multiplier</strong> - Specify the multiplier for the price conversion</li>
                            <li><strong>Price Divider</strong> - Specify the divider for the price conversion</li>
                            <li><strong>Volume Multiplier</strong> - Specify the multiplier for the volume conversion</li>
                            <li><strong>Volume Divider</strong> - Specify the divider for the volume conversion</li>
                        </ul>
                    </li>
                    <li>Add the configuration and monitor the conversion behavior</li>
                </ol>

                <h4>Editing Existing Conversion Rules</h4>
                <p>
                    To edit an existing conversion rule, click on the "Edit" button next to the rule you want to modify. 
                    This will open the conversion rule configuration modal with the current settings pre-filled. 
                    You can make changes to any of the fields, then save the configuration to update the conversion rule.
                </p>

                <div class="info-box">
                    <ul>
                        <li>All * fields are the required fields to be filled in order to add a conversion rule.</li>
                        <li>Import/Export option is available for bulk configuration of conversion rules.</li>
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
    window.Pages[Conversions.id] = Conversions;
}