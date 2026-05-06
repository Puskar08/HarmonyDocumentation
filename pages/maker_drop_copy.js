//Maker Drop Copy Page
const MakerDropCopy = {
    id: "maker-drop-copy",
    title: "Maker Drop Copy",
    breadcrumb: "Get Started → Maker → Drop Copy",
    content: `
        <div class="manual-card">
            <div class="page-header">
                <h2>Drop Copy</h2>
                <div class="breadcrumb">Get Started → Maker → Drop Copy</div>
            </div>
            <div class="content-body">
                <p>This section is for recording trades that are executed by the Provider to the end system to review or analyze the trading behaviour of the taker.</p>
                <div class="architecture-diagram">
                    <img src="./images/maker_drop_copy_ss.png" alt="Maker Drop Copy Diagram" class="architecture-image">
                </div>

                <p>
                    The main page shows the list of all the drop copy rules configured for different symbols in the system, with details such as Name, Source and Target accounts.
                    The drop copy rules can be configured to record the trades executed by the Maker to the end system as coverages or copy accounts.
                    This allows for better trade monitoring, risk management, and compliance with regulatory requirements.
                </p>

                <h4>Steps to Configure Provider Drop Copy behavior</h4>

                <div class = "architecture-diagram">
                    <img src="./images/maker_drop_copy_setup_ss.png" alt="Maker Drop Copy Configuration Diagram" class="architecture-image">
                </div>

                <ol>
                    <li>Navigate to Provider Drop Copy page</strong></li>
                    <li>Click on "Add" button, it will open the drop copy rule configuration modal</li>
                        <ul>
                            <li><strong>Name</strong> - Provide a name for the drop copy rule</li>
                            <li><strong>Source Type</strong> - Select the source type as connector for the drop copy rule</li>
                            <li><strong>From</strong> - Specify the connector source that you want to record the trades from</li>
                            <li><strong>Target Type</strong> - What is the target type (where the drop copy will be recorded) for the timebeing only MT5 target type is supported</li>
                            <li><strong>To</strong> - Select the MT5 integration (more to come here)</li>
                            <li><strong>Login</strong> - Account login in which the drop copy will be recorded</li>
                        </ul>
                    </li>
                    <li>Add the configuration and monitor the trade copy behavior</li>
                </ol>

                <h4>Editing Existing Drop Copy Rules</h4>
                <p>
                    To edit an existing drop copy rule, click on the "Edit" button next to the rule you want to modify. 
                    This will open the drop copy rule configuration modal with the current settings pre-filled. 
                    You can make changes to any of the fields except for the Source Type and Target Type, which are not editable once a drop copy rule is created.
                    After making the necessary changes, save the configuration to update the drop copy rule.
                </p>

                <h4>Create Multiple Rules Inside Drop Copy</h4>
                <div class = "architecture-diagram">
                    <img src="./images/maker_drop_copy_symbols_ss.png" alt="Maker Drop Copy Configuration Diagram" class="architecture-image">
                </div>
                <p>
                    Multiple drop copy rules can be added inside the Drop Copy Configuration for multiple symbols or for the same symbol with different multipliers.
                    To add a new drop copy rule for a symbol in an existing rule, click on the ⁞≡ button next to the rule which opens a new page to add multiple rules 
                    for the same symbol with different multipliers or for different symbols in the same connector.
                    Here you can add/edit the rules for the symbol with different multipliers.
                    <div class = "architecture-diagram">
                        <img src="./images/maker_drop_copy_rule_for_symbol_ss.png" alt="Maker Drop Copy Configuration Diagram" class="architecture-image">
                    </div>
                    <ul>
                        <li><strong>Symbol</strong> - Bridge symbol name for which the drop copy rule is being created</li>
                        <li><strong>Drop Symbol</strong> - Symbol name in the target system</li>
                        <li><strong>Multiplier</strong> - Multiplier for the drop copy rule</li>
                        <li><strong>Bid Markup</strong> - Markup for the bid price in the target system</li>
                        <li><strong>Offer Markup</strong> - Markup for the ask price in the target system</li>
                        <li><strong>Reverse</strong> - Toggle to reverse the trade type (buy/sell) for the symbol in the target system</li>
                     </ul>
                    </ul> 
                    
                </p>

                <div class="info-box">
                    <ul>
                        <li>All * fields are the required fields to be filled in order to add a drop copy rule.</li>
                        <li>Import/Export option is available for bulk configuration of drop copy rules.</li>
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
    window.Pages[MakerDropCopy.id] = MakerDropCopy;
}