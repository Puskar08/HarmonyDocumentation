
const ConfigurationBridgeSymbols = {
    id: "bridge-symbols",
    title: "Bridge Symbols",
    breadcrumb: "Get Started → Configuration → Bridge Symbols",
    content: `
        <div class="manual-card">
            <div class="page-header">
                <h2>Bridge Symbols</h2>
                <div class="breadcrumb">Get Started → Configuration → Bridge Symbols</div>
            </div>
            <div class="content-body">
                <p>
                    In this section we setup the bridge symbols to which we map the symbols from the providers and conectors. 
                    Whenever we need to configure rules for the symbols in connectior system or provider platform symbols, we used the bridge symbols that are mapped to correspoing platform symbols from the bridge.
                </p>
                <div class="architecture-diagram">
                    <img src="./images/configuration_bridge_symbols_ss.png" alt="Bridge Symbols Diagram" class="architecture-image">
                </div>

                <p>
                    The main page shows the list of added bridge symbols.
                </p>

                <h4>Steps to Configure Bridge Symbols</h4>

                <div class = "architecture-diagram">
                    <img src="./images/configuration_bridge_symbols_setup_ss.png" alt="Bridge Symbols Configuration Diagram" class="architecture-image">
                </div>

                <ol>
                    <li>Navigate to Bridge Symbols page</strong></li>
                    <li>Click on "Add" button, it will open the bridge symbol configuration modal</li>
                        <ul>
                            <li><stong>Enabled</strong> - Toggle to enable or disable the bridge symbol</li>
                            <li><strong>Name</strong> - Provide a name for the bridge symbol</li>
                            <li><strong>Digits</strong> - Specify the number of decimal places for the symbol</li>
                            <li><strong>Lot Size</strong> - Define the amount in lot size for trading the symbol</li>
                            <li><strong>Step Size</strong> - Define the step size in amount for the symbol</li>
                            <li><strong>Marekt Session</strong> - Select the market session used for the symbol</li>
                            <li><strong>Event Session</strong> - Select the event session used for the symbol</li>
                        </ul>
                    </li>
                    <li>Add the configuration and monitor the symbol behavior</li>
                </ol>

                <h4>Editing Existing Bridge Symbols</h4>
                <p>
                    To edit an existing bridge symbol, click on the "Edit" button next to the symbol you want to modify. 
                    This will open the bridge symbol configuration modal with the current settings pre-filled. 
                    You can make changes to any of the fields, then save the configuration to update the bridge symbol.
                </p>

                <div class="info-box">
                    <ul>
                        <li>All * fields are the required fields to be filled in order to add a bridge symbol.</li>
                        <li>Note the volume needs to be in amount not lots (e.g., 1 lot XAUUSD = 100 units).</li>
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
    window.Pages[ConfigurationBridgeSymbols.id] = ConfigurationBridgeSymbols;
}