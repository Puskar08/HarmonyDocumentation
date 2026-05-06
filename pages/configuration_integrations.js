
const ConfigurationIntegrations = {
    id: "integrations",
    title: "Integrations",
    breadcrumb: "Get Started → Configuration → Integrations",
    content: `
        <div class="manual-card">
            <div class="page-header">
                <h2>Integrations</h2>
                <div class="breadcrumb">Get Started → Configuration → Integrations</div>
            </div>
            <div class="content-body">
                <p>
                    In this section we setup the integrations, end systems (MT5, Validator) taking the service from Harmony.
                </p>
                <div class="architecture-diagram">
                    <img src="./images/configuration_integrations_ss.png" alt="Integrations Diagram" class="architecture-image">
                </div>

                <p>
                    The main page shows the list of added integrations.
                </p>

                <h4>Steps to Configure Integrations</h4>

                <div class = "architecture-diagram">
                    <img src="./images/configuration_integrations_setup_ss.png" alt="Integrations Configuration Diagram" class="architecture-image">
                </div>

                <ol>
                    <li>Navigate to Integrations page</strong></li>
                    <li>Click on "Add" button, it will open the integration configuration modal, separate configurations can be done for trading and pricing</li>
                        <ul>
                            <li><strong>Name</strong> - Provide a name for the integration</li>
                            <li><strong>Integration Type</strong> - Integration type can be MT5 or Validator which takes the service fromt Harmony</li>
                            <li><strong>Server</strong> - Specify the server IP for the integration connection</li>
                            <li><strong>Manager</strong> - Specify the MT5 manager login throught which the connection will be established</li>
                            <li><strong>Password</strong> - Provide the password for the Manager login of MT5</li>
                            <li><strong>Module</strong> - Specify the module for the integration connection (don't know what this is)</li>
                        </ul>
                    </li>
                    <li>Add the configuration and check the connection</li>
                </ol>

                <h4>Editing Existing Integrations</h4>
                <p>
                    To edit an existing integration, click on the "Edit" button next to the integration you want to modify. 
                    This will open the integration configuration modal with the current settings pre-filled. 
                    You can make changes to any of the fields, then save the configuration to update the integration.
                </p>

                <h4>Create Drop Copy Rules In Integrations</h4>
                <div class = "architecture-diagram">
                    <img src="./images/configuration_integrations_drop_copy_symbols_ss.png" alt="Taker Drop Copy Configuration Diagram" class="architecture-image">
                </div>
                <p>
                    Multiple drop copy rules can be added inside the integrated platform.
                    To add a new drop copy rule for a symbol to an integration, click on the ⁞≡ button next to the rule which opens a new page to add drop copy rule 
                    for symbols.
                    <div class = "architecture-diagram">
                        <img src="./images/configuration_integrations_drop_copy_rule_for_symbol_ss.png" alt="Taker Drop Copy Configuration Diagram" class="architecture-image">
                    </div>
                    <ul>
                        <li><strong>Symbol</strong> - Bridge symbol name for which the drop copy rule is being created</li>
                        <li><strong>Alias</strong> - Integrated platform symbol name</li>
                     </ul>
                    </ul> 
                    
                </p>

                <div class="info-box">
                    <ul>
                        <li>All * fields are the required fields to be filled in order to add a integration.</li>
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
    window.Pages[ConfigurationIntegrations.id] = ConfigurationIntegrations;
}