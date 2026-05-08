// Configuration Overview Page
const EnvironmentPage = {
    id: "environment",
    title: "Administration Module Overview",
    breadcrumb: "Get Started → Environment",
    content: `
        <div class="manual-card">
            <div class="page-header">
                <h2>Administration</h2>
                <div class="breadcrumb">Get Started → Environment</div>
            </div>
            <div class="content-body">
                
                <div class="info-box">
                    This section is used to configure all the extensions, endpoints, feeders, gateways and so on.    
                </div>

                <h3>Extensions</h3>
                <p>
                    On extensions, you can create Integrations, Gateways and Feeders for MT5 server. All require creating an endpoint first. 
                    When you click the add new button, you can select a module. Then you have to give this extension a name and choose an endpoint from the list. 
                    According to the type you select, appropriate endpoints will be listed. No same endpoint can be used for different extensions
                </p>

                <h3>Endpoints</h3>
                <p>
                    Every component on Harmony needs an endpoint on the Lite version. 
                    The fresh installation of a Harmony comes with predefined endpoints for Engine Server, Engine Viewer, Streamer Reporter, Streamer Evaluator, Streamer Engine 
                    and Evaluator Concentrator. Besides those, for every MT5 integration, MT5 gateway, MT5 feeder, connector or a native provider, endpoints need to be created. 
                    
                    <div class="info-box">
                        Keep in mind, integrations, gateways and feeders require only one endpoint. 
                        However, connectors and native providers requires two endpoints, one for pricing and one for trading.
                        <p>
                            FIX API connectors should use Pricing/Trading server public port,
                            MT5 integrations should use internal, 
                            Native providers should use Pricing/Trading Native Internal Connection,
                            MT5 gateways and feeders should used exposed internal, and native connectors should use Pricing/Trading Native Internal Server Port.
                        </p>
                        Please note that all the ports defined here should added to the firewall for accepting incominng traffic on it from the IP/DNS you desire. 
                        Otherwise, the connectors would not be able to connect to the Harmony.
                        Existing endpoinst can be seen on the table. Some of the properties of the endpoints can be modified except the type. 
                        And they can be deleted according to the deletion rules.
                    </div>

                </p>

                <h3>MT5 Feeder</h3>
                <p>
                    The MT5 feeders defined on the Harmony can be seen here. If there are more than one feeder, 
                    the user can navigate through them by using the drop down module menu located on the upper right corner of the page. 
                    The Auth key should be unique to the system and should be used on the MT5 Harmony feeder under Feed Login. 
                    The process does not require a password for the connection. 
                    However, the user should use HarmonyIP:2599 on the Feed Server field. 2599 is the manager communication port. 
                    Thus, this port should be on Harmony server for all incoming traffic from the MT5 server. 
                </p>

                <h3>MT5 Gateway</h3>
                <p>
                    The MT5 gateways defined on the Harmony can be seen here. If there are more than one gateway, 
                    the user can navigate through them by using the drop down module menu located on the upper right corner of the page. 
                    </br>
                    The Auth key should be unique to the system and should be used on the MT5 Harmony gateway under Trading Login. 
                    The process does not require a password for the connection. 
                    However, the user should use HarmonyIP:2599 on the Trading Server field. 2599 is the manager communication port. 
                    Thus, this port should be on Harmony server for all incoming traffic from the MT5 server. 
                </p>

                <h3>MT5 Integration</h3>
                <p>
                    The MT5 integrations defined on the Harmony can be seen here. 
                    If there are more than one integration, the user can navigate through them by using the drop down module menu located on the upper right corner of the page. 
                </p>
                
                
                <div class="footer-links">
                    
                </div>
            </div>
        </div>
    `
};

if (typeof window !== 'undefined') {
    window.Pages = window.Pages || {};
    window.Pages[EnvironmentPage.id] = EnvironmentPage;
}