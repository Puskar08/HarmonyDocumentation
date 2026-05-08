// Taker Pricing Page
const TakerPricing = {
    id: "taker-pricing",
    title: "Taker Pricing",
    breadcrumb: "Get Started → Taker → Pricing",
    content: `
        <div class="manual-card">
            <div class="page-header">
                <h2>Pricing</h2>
                <div class="breadcrumb">Get Started → Taker → Pricing</div>
            </div>
            <div class="content-body">
                <p>
                    This section is used to configure the pricing behavior for the Taker connector.
                    Pricing page displays all the symbols that are currently being priced for the selected connector (at the top right corner), 
                    along with their pricing configuration details such as markups, spreads, throttling, and fallback settings.

                    There are three menus: Add, Export and Import in the table header.
                    <ul>
                        <li><strong>Add</strong> - Click to add a new pricing rule for a symbol</li>
                        <li><strong>Export</strong> - Export the existing pricing rules in a CSV file for backup or bulk editing purposes</li>
                        <li><strong>Import</strong> - Import pricing rules from a CSV file to quickly set up or update multiple rules at once</li>
                    </ul>

                    You can find three buttons on the right side of each pricing rule:
                    <ul>
                        <li><strong>Add Sub-rule</strong> - Click to add a sub-rule to the existing pricing rule</li>
                        <li><strong>Edit</strong> - Click to edit the existing pricing rule configuration</li>
                        <li><strong>Delete</strong> - Click to delete the pricing rule</li>
                    </ul>
                </p>
                <div class="architecture-diagram">
                    <img src="./images/taker_pricing_ss.png" alt="Taker Pricing Diagram" class="architecture-image">
                </div>

                <p>
                    Pricing behaviour for individual taker symbols need to be configured for each connector.
                    This includes setting up markups, spreads, throttling, and other pricing rules to map the symbols pricing from liquidity pools to the connecting system.
                    Each symbol can have its own unique pricing configuration, allowing for granular control over how prices are calculated and presented to the end system.
                </p>

                <h4>Steps to Configure Taker Pricing</h4>

                <div class = "architecture-diagram">
                    <img src="./images/taker_pricing_setup_ss.png" alt="Taker Pricing Configuration Diagram" class="architecture-image">
                </div>

                <ol>
                    <li>Navigate to Taker Pricing page</strong></li>
                    <li>Select the connector in which you want to add pricing rule, from the top right corner</li>
                    <li>Click on "Add" button, it will open the pricing rule configuration modal</li>
                        <ul>
                            <li><strong>Enabled</strong> - Toggle to enable or disable the pricing rule</li>
                            <li><strong>Symbol</strong> - Select the symbol to configure pricing (Bridge Symbol)</li>
                            <li><strong>Alias</strong> - Define an alias for the symbol (name of the symbol in the connector platform), if alias is same as the bridge symbol, it would be omitted on the pricing page table</li>
                            <li><strong>Main Pool</strong> - Select the main liquidity pool for the symbol from where the pricing will be supplied</li>
                            <li><strong>Backup Pool</strong> - Specify the backup liquidity pool for the symbol which will be used as a fallback (right now there is no switch back to main pool but it's being developed)</li>
                            <div class="info-box">
                                <p>
                                    The main and backup pools can be either Simple or Aggregator type.
                                </p>
                            </div>
                            <li><strong>Bid Markup</strong> - Add a fixed amount (in points) to the bid price</li>
                            <li><strong>Offer Markup</strong> - Add a fixed amount (in points) to the offer price</li>
                            
                            <li><strong>Min.Spread</strong> - Set the minimum spread for the symbol</li>
                            <li><strong>Max.Spread</strong> - Set the maximum spread for the symbol</li>
                            <div class="info-box">
                                <p>
                                    Markups accept both positive and negative values, positive values are the markups (increased spread) and negative values are the discounts (decreased spread).
                                    Also note these markups are in points, not in percentage, for example if the symbol is EURUSD and the markup is 10 points, then the markup will be 0.0001 (10 points = 0.0001 for EURUSD), 
                                    if the symbol is USDJPY and the markup is 10 points, then the markup will be 0.01 (10 points = 0.01 for USDJPY).
                                </p>
                                <p>
                                    Min and Max spread are the spreads between the bid and ask price, if the spread between the bid and ask price is less than the minimum spread, 
                                    then the spread will be adjusted to the minimum spread, if the spread between the bid and ask price is greater than the maximum spread, then the spread will be adjusted to the maximum spread.
                                    Also note these spreads too are in points.
                                </p>
                            </div>
                            <li><strong>Market Depth</strong> - Specify the market depth for the symbol for the taker (only 1 available for timebeing), if no value is specified, all layers will be provided to the taker</li>
                            <li><strong>Throttling</strong> - Throttle takes a value in milliseconds to limit the frequency of price updates</li>
                            <div class="info-box">
                                <p>
                                    Throttling is used to control the frequency of price updates sent to the taker, 
                                    it can help to reduce the load on the taker system and prevent overwhelming it with too many price updates, 
                                    especially during volatile market conditions.

                                    For example, if the throttling value is set to 1000 ms, 
                                    then the taker will receive price updates at most once every second, even if there are more frequent updates from the liquidity pools.
                                </p>
                            </div>
                            <li><strong>Fallback</strong> - Time to fallback to the backup pool in ms when the main pool is unavailable or unresponsive</li>
                        </ul>
                    </li>
                    <li>Add the configuration and monitor the pricing behavior</li>
                </ol>

                <h4>Editing Existing Pricing Rules</h4>
                <p>
                    To edit an existing pricing rule, click on the "Edit" button next to the rule you want to modify. 
                    This will open the pricing rule configuration modal with the current settings pre-filled. 
                    You can make changes to any of the fields except for the symbol field, which is not editable once a pricing rule is created.
                    After making the necessary changes, save the configuration to update the pricing rule.
                </p>

                <h4>Add mulitple rules for the same symbol</h4>
                <p>
                    Multiple pricing rules can be added for the same symbol to allow for different pricing configurations based on various conditions such as time of day, 
                    market volatility, or specific trading strategies. 
                    To adding a new pricing rule for a symbol that already has an existing rule, click on the + button next to the rule which opens the similar modal as Add
                    there select the Event Tag* which specifies the conditions under which each rule should be applied. 
                    This allows for dynamic pricing adjustments based on real-time market data and other relevant factors.

                    These rules will be displayed in rows under the same symbol in the pricing rules table, with the Event Tag column indicating the specific conditions for each rule.
                </p>

                <div class="info-box">
                    <ul>
                        <li>All * fields are the required fields to be filled in order to add a pricing rule.</li>
                        <li>Import/Export option is available for bulk configuration of pricing rules.</li>
                        <li>
                            Alias is the name for the bridge symbol that the taker uses on its end. If this taker is an MT5 connector, 
                            the alias will be the symbol name in MT5 connector, Alias would be the MT5 symbol name that is mapped to the bridge symbol,
                            If this taker is a FIX API client, then Alias would be used on the taker side to subscribe to the price feed, and it would be mapped to the bridge symbol on the bridge side.
                        </li>
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
    window.Pages[TakerPricing.id] = TakerPricing;
}