// Maker Pools Page
const Pools = {
    id: "maker-pools",
    title: "Maker Pools",
    breadcrumb: "Get Started → Maker → Pools",
    content: `
        <div class="manual-card">
            <div class="page-header">
                <h2>Pools</h2>
                <div class="breadcrumb">Get Started → Maker → Pools</div>
            </div>
            <div class="content-body">
                <p>This section is used for configuring the liquidity pools consisting of either single or multiple underlying providers.</p>
                <div class="architecture-diagram">
                    <img src="./images/maker_pools_ss.png" alt="Maker Pools Diagram" class="architecture-image">
                </div>

                <p>
                    The main page shows the list of all the pools with details such as name, type, as description.
                </p>

                <div class="info-box">
                    Harmony allows to create different types of pools.
                    <ul>
                        <li><strong>Simple:</strong> Only one provider can be used for this type of pool (simple and single)</li>
                        <li><strong>Aggregate:</strong> One or more providers can be put on this pool to get an aggregated order book</li>
                        <li><strong>Split:</strong> The trades can be split into one or mroe providers with fixed percentages. If the sum of the weights gets above or below 100%, Harmony won't accept the setup</li>
                        <li><strong>B-Book:</strong> A book version of pool can be created from an existing B book pool if that poll is simple or aggregate type</li>
                        <li><strong>B-Book Split:</strong> Similar to splity type but this one also includes a B book part. Trades can be split between the providers and B book pool</li>
                    </ul>
                </div>

                <h4>Steps to Configure Pools</h4>

                <div class = "architecture-diagram">
                    <img src="./images/maker_pools_setup_ss.png" alt="Maker Pools Configuration Diagram" class="architecture-image">
                </div>

                <ol>
                    <li>Navigate to Provider Pools page</strong></li>
                    <li>Click on "Add" button, it will open the pool configuration modal</li>
                        <ul>
                            <li><strong>Name</strong> - Specify the name for the pool</li>
                            <li><strong>Pool Type</strong> - Select the type of the pool</li>
                            <li><strong>Leftover Pool</strong> - Select the leftover pool that will be used to transfer the trades from this symbol when there is accumulation of the leftover volume</li>
                            <li><strong>Provider</strong> - Select the provider for the pool</li>
                        </ul>
                    </li>
                    <li>Add the configuration and monitor the conversion behavior</li>
                </ol>

                <h4>Editing Existing Pool Configurations</h4>
                <p>
                    To edit an existing pool configuration, click on the "Edit" button next to the pool you want to modify. 
                    This will open the pool configuration modal with the current settings pre-filled. 
                    You can make changes to any of the fields, then save the configuration to update the pool.
                </p>

                <div class="info-box">
                    <p>
                        Note that, the pools can be modified but their type can not be changed. 
                        For example the provider in a simple pool can be changed, but that simple pool can not be converted to a split pool. 
                        Or on an aggregation pool, the providers can be added or removed, but the cannot be changed to a B book pool, etc
                    </p>
                    <p>
                        Not all pools can be deleted without a hassle.
                        Some delete rules apply. For example if the pool is being used on a pricing or/or trading profile, it can not be deleted. 
                        First it should be replaced with other pools on the point of usage. 
                    </p>
                </div>
                
                <div class="footer-links">
                    
                </div>
                </div>
            </div>
    `
};

if (typeof window !== 'undefined') {
    window.Pages = window.Pages || {};
    window.Pages[Pools.id] = Pools;
}