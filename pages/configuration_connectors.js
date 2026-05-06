
const ConfigurationConnectors = {
    id: "connectors",
    title: "Connectors",
    breadcrumb: "Get Started → Configuration → Connectors",
    content: `
        <div class="manual-card">
            <div class="page-header">
                <h2>Connectors</h2>
                <div class="breadcrumb">Get Started → Configuration → Connectors</div>
            </div>
            <div class="content-body">
                <p>
                    In this section we setup the connectors, end systems taking the service from Harmony. 
                    You can set up the connectors for only pricing/trade or for both.
                </p>
                <div class="architecture-diagram">
                    <img src="./images/configuration_connectors_ss.png" alt="Connectors Diagram" class="architecture-image">
                </div>

                <p>
                    The main page shows the list of added connectors.
                </p>

                <h4>Steps to Configure Connectors</h4>

                <div class = "architecture-diagram">
                    <img src="./images/configuration_connectors_setup_ss.png" alt="Connectors Configuration Diagram" class="architecture-image">
                </div>

                <ol>
                    <li>Navigate to Connectors page</strong></li>
                    <li>Click on "Add" button, it will open the connector configuration modal, separate configurations can be done for trading and pricing</li>
                        <ul>
                            <li><stong>Enabled</strong> - Toggle to enable or disable the connector</li>
                            <li><strong>Name</strong> - Provide a name for the connector</li>
                            <li><strong>Connector Type</strong> - Connector type can be any trading platform like MT4, MT5 or any other and bridge like FXCubic, PrimeXM or any other compatible with the Harmony</li>
                            <li><strong>Alternative Account</strong> - Enable this to use it as this connector as an alternative account for the connector to use as a backup account for trading in case the primary account hits any issues like connectivity or liquidity problems</li>
                            <li><strong>Original Account</strong> - Provide the primary account for the connector upon which failure's this connector will be used for connection</li>
                            <li><strong>Use Taker API</strong> - Enable this if you want to use the taker API for the connector connection instead of the maker API</li>
                            <li><strong>Pricing Session</strong> - Pricing session configuration is used for the pricing likewise Trading session configuration will be used for trade communication between Harmon and selected connector</li>
                            <li><strong>Journal Message</strong> - Toggle to enable or disable the journal message for the connector (need to add what it does) </li>
                            <li><strong>Time Zone</strong> - Select the time zone for the connector to apply the correct timing for the sessions (like start time, end time for the connections) and other time based configurations</li>
                            <li><strong>EndPoint</strong> - Specify the end point for the connector connection</li>
                            <li><strong>Sender Comp Id</strong> - Specify the sender comp id for the connector connection</li>
                            <li><strong>Target Comp Id</strong> - Provide the target comp id for the connector connection</li>
                            <li><strong>Username</strong> - Provide the username for the connector connection</li>
                            <li><strong>Password</strong> - Provide the password used for the connector connection</li>
                            <li><strong>Start Day</strong> - Choose the start day to start communication with the connector</li>
                            <li><strong>Start Time</strong> - Specify the start time to start communication with the connector</li>
                            <li><strong>Finish Day</strong> - Choose the end day to end the communication with the connector</li> 
                            <li><strong>Finish Time</strong> - Specify the end time to end communication with the connector</li>
                            <li><strong>Heartbeat Delay</strong> - Specify the delay duration before attempting to reconnect in case of a connection loss in ms</li>
                        </ul>
                    </li>
                    <li>Add the configuration and monitor the connector behavior</li>
                </ol>

                <h4>Editing Existing Connectors</h4>
                <p>
                    To edit an existing connector, click on the "Edit" button next to the connector you want to modify. 
                    This will open the connector configuration modal with the current settings pre-filled. 
                    You can make changes to any of the fields, then save the configuration to update the connector.
                </p>

                <div class="info-box">
                    <ul>
                        <li>All * fields are the required fields to be filled in order to add a connector.</li>
                        <li>Note for the Native connector type only Auth Key and EndPoint are required and for MT5 connector type, Gateway and Feeder are required.</li>
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
    window.Pages[ConfigurationConnectors.id] = ConfigurationConnectors;
}