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
                    This page provides the journal details of the bridge operations.
                    Journal entries include various events and messages related to the operations of the bridge, such as connection status, errors, warnings, and other important information that can help in monitoring and troubleshooting the bridge.
                </p>
                <div class="architecture-diagram">
                    <img src="./images/journal_page_ss.png" alt="Journal Page" class="architecture-image">
                </div>

                <h3>Provider Prices</h3>
                <p>
                    This page provides the real time price details of the symbols from the providers.
                    This is crucial for monitoring the continuous pricing of the symbols from the providers and the quotes transferred to the takers.
                </p>
                <div class="architecture-diagram">
                    <img src="./images/provider_prices_page_ss.png" alt="Provider Prices Page" class="architecture-image">
                </div>
                </p>

                <h3>Connector Prices</h3>
                <p>
                    This page provides the real time price details of the symbols passed to the connectors.
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