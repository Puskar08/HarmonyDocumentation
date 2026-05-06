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
                    <ul>
                        <li>All * fields are the required fields to be filled in order to add a pool configuration.</li>
                        <li>Import/Export option is available for bulk configuration of pool settings.</li>
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
    window.Pages[Pools.id] = Pools;
}