// Configuration Overview Page
const ScreeningPage = {
    id: "screening",
    title: "Screening Module Overview",
    breadcrumb: "Get Started → Screening",
    content: `
        <div class="manual-card">
            <div class="page-header">
                <h2>Screening</h2>
                <div class="breadcrumb">Get Started → Screening</div>
            </div>
            <div class="content-body">
                
                <div class="info-box">
                    In this section, you can view all the logs and journal entries related to the operations of the bridge.
                    This section is crucial for monnitoring the execution of trades, and troubleshooting any issues that may arise during the operation of the bridge.
                    Moreover this section also provides the interface to monitor the continuous pricing of the symbols from the providers and the quotes transferred to the takers.
                </div>
                
                <h3>Execution</h3>
                <p>
                    This page provides execution details of trades.
                    From the Histric lookup, specific executions entry can be filtered or the execution during the specified duration can be observed.
                    Real time execution details provide the information about the trades being executed in real time, which is crucial for monitoring the live performance of the bridge and ensuring that everything is functioning as expected.
                </p>
                <div class="architecture-diagram">
                    <img src="./images/execution_page_ss.png" alt="Execution Page" class="architecture-image">
                </div>

                <h3>Journal</h3>
                <p>
                    This page provides the journal details of the bridge operations (FIX logs can be seen here as long as they are enabled on the taker/maker rules).
                    Journal entries include various events and messages related to the operations of the bridge, such as connection status, errors, warnings, and other important information that can help in monitoring and troubleshooting the bridge.
                </p>
                <div class="architecture-diagram">
                    <img src="./images/journal_page_ss.png" alt="Journal Page" class="architecture-image">
                </div>

                <h3>Provider Prices</h3>
                <p>
                    For each available provider, the user can montor the prices by the symbol name. 
                    For the symbols, bid price, ask price and the spread would be visible if that provider is advertising prices over the API or native connection. 
                    The symbols without a price will still show on the list but with empty liquidity information.
                    To navigate through different providers, you can use the connector dropdown menu located on the upper right corner.

                    This is crucial for monitoring the continuous pricing of the symbols from the providers and the quotes transferred to the takers.
                </p>
                <div class="architecture-diagram">
                    <img src="./images/provider_prices_page_ss.png" alt="Provider Prices Page" class="architecture-image">
                </div>
                </p>

                <h3>Connector Prices</h3>
                <p>
                    For each available connector, the user can montor the prices by the symbol name. 
                    For the symbols, bid price, ask price and the spread would be visible if that connector is being advertised prices over the API or native connection. 
                    The symbols without a price will still show on the list but with empty liquidity information.
                    There is the option to choose the connector on the top right corner to monitor the prices for the specific connector.
                </p>
                <div class="architecture-diagram">
                    <img src="./images/connector_prices_page_ss.png" alt="Connector Prices Page" class="architecture-image">
                </div>
                </p>
                
                <div class="footer-links">
                    
                </div>
            </div>
        </div>
    `
};

if (typeof window !== 'undefined') {
    window.Pages = window.Pages || {};
    window.Pages[ScreeningPage.id] = ScreeningPage;
    console.log("✅ Registered screening page:", ScreeningPage.id);
}