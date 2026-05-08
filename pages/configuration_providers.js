
const ConfigurationProviders = {
    id: "providers",
    title: "Providers",
    breadcrumb: "Get Started → Configuration → Providers",
    content: `
        <div class="manual-card">
            <div class="page-header">
                <h2>Providers</h2>
                <div class="breadcrumb">Get Started → Configuration → Providers</div>
            </div>
            <div class="content-body">
                <p>
                    In this section we setup the liquidity providers. 
                    You can set up the providers for only pricing/trade or for both.
                    Providers can be connected to the pools in the maker module to provide the liquidity for the pricing and trading.
                </p>
                <div class="architecture-diagram">
                    <img src="./images/configuration_providers_ss.png" alt="Providers Diagram" class="architecture-image">
                </div>

                <p>
                    The main page shows the list of added providers.
                </p>

                <h4>Steps to Configure Providers</h4>

                <div class = "architecture-diagram">
                    <img src="./images/configuration_providers_setup_ss.png" alt="Providers Configuration Diagram" class="architecture-image">
                </div>

                <ol>
                    <li>Navigate to Providers page</strong></li>
                    <li>Click on "Add" button, it will open the provider configuration modal, separate configurations can be done for trading and pricing</li>
                        <ul>
                            <li><stong>Enabled</strong> - Toggle to enable or disable the provider</li>
                            <li><strong>Name</strong> - Provide a name for the provider</li>
                            <li><strong>Include Original Reference</strong> - </li>
                            <li><strong>Include Alternative Account</strong> - </li>
                            <li><strong>Override Account</strong> - </li>
                            <li><strong>Provider Type</strong> - Provider type can be any other brige like FXCubic, PrimeXM or any other compatible with the Harmony</li>
                            <li><strong>Pricing Session</strong> - Pricing session configuration is used for the pricing likewise Trading session configuration will be used for trade communication between Harmon and selected Provider</li>
                            <li><strong>Journal Message</strong> - Toggle to enable or disable the journal message for the provider (need to add what it does) </li>
                            <li><strong>Secured</strong> - Enable to use a secured connection channel for the provider connection</li>
                            <li><strong>Check Certificate</strong> - Only available for the secured connection, enable to check the certificate of the provider for the secured connection</li>
                            <li><strong>Time Zone</strong> - Select the time zone for the provider to apply the correct timing for the sessions (like start time, end time for the connections) and other time based configurations</li>
                            <li><strong>Host</strong> - Specify the host address of the provider connection</li>
                            <li><strong>Port</strong> - Specify the port number for the provider connection</li>
                            <li><strong>Sender Comp Id</strong> - Specify the sender comp id for the connector connection</li>
                            <li><strong>Target Comp Id</strong> - Provide the target comp id for the connector connection</li>
                            <li><strong>Username</strong> - Provide the username for the provider connection</li>
                            <li><strong>Password</strong> - Provide the password for the provider connection</li>
                            <li><strong>Start Day</strong> - Choose the start day to start communication with the provider</li>
                            <li><strong>Start Time</strong> - Specify the start time to start communication with the provider</li>
                            <li><strong>End Day</strong> - Choose the end day to end the communication with the provider</li> 
                            <li><strong>End Time</strong> - Specify the end time to end communication with the provider</li>
                            <li><strong>Heartbeat Int.</strong> - Specify the heartbeat interval to monitor the connection status with the provider in ms</li>
                            <li><strong>Connect Timeout</strong> - Specify the connection timeout duration for the provider connection in ms</li>
                            <li><strong>Reconnect Delay</strong> - Specify the delay duration before attempting to reconnect to the provider in case of a connection loss in ms</li>
                        </ul>
                    </li>
                    <li>Add the configuration and monitor the provider behavior</li>
                </ol>

                <h4>Editing Existing Providers</h4>
                <p>
                    To edit an existing provider, click on the "Edit" button next to the provider you want to modify. 
                    This will open the provider configuration modal with the current settings pre-filled. 
                    You can make changes to any of the fields, then save the configuration to update the provider.
                </p>

                <div class="info-box">
                    <ul>
                        <li>All * fields are the required fields to be filled in order to add a provider.</li>
                        <li>Note for the Native provider type (meaning provider is Harmony itself), the host and port fields are not required as the connection will be established internally within the bridge, hence only Auth key and EndPoint are required.</li>
                        <li>Note time durations are specified in milliseconds (ms).</li>
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
    window.Pages[ConfigurationProviders.id] = ConfigurationProviders;
}