//Taker Trading Page
const TakerTrading = {
    id: "taker-trading",
    title: "Taker Trading",
    breadcrumb: "Get Started → Taker → Trading",
    content: `
        <div class="manual-card">
            <div class="page-header">
                <h2>Trading</h2>
                <div class="breadcrumb">Get Started → Taker → Trading</div>
            </div>
            <div class="content-body">
                <p>
                    This section is for configuring the trading behavior for the Taker connector. The page setup is similar to the pricing configuration page, 
                    the only difference is on the content here we are dealing with the trading rules.
                    The table on this page displays the list of trading rules that have been configured for different symbols in the selected connector, 
                    along with their details such as symbol, alias, main and backup pools, markups, spreads, timeout, delay, and other trading parameters.
                </p>
                <div class="architecture-diagram">
                    <img src="./images/taker_trading_ss.png" alt="Taker Trading Diagram" class="architecture-image">
                </div>

                <p>
                    Trading behavior for individual taker symbols need to be configured for each connector.
                    This includes setting up markups, spreads, timeout, delay, and other trading rules to forward the trade requests for a particular symbol from the taker to the available liquidity pools.
                    Each symbol can have its own unique trading configuration, allowing for granular control over how and where the trades are executed.
                </p>

                <h4>Steps to Configure Taker Trading behavior</h4>

                <div class = "architecture-diagram">
                    <img src="./images/taker_trading_setup_ss.png" alt="Taker Trading Configuration Diagram" class="architecture-image">
                </div>

                <ol>
                    <li>Navigate to Taker Trading page</strong></li>
                    <li>Select the connector in which you want to add trading rule, from the top right corner</li>
                    <li>Click on "Add" button, it will open the trading rule configuration modal</li>
                        <ul>
                            <li><strong>Enabled</strong> - Toggle to enable or disable the trading rule</li>
                            <li><strong>Symbol</strong> - Select the symbol to configure trading (Bridge Symbol)</li>
                            <li><strong>Alias</strong> - Define an alias for the symbol like in the taker pricing (Alias on the trading should be same as the alias in taker pricing since Harmony won't allow to use two different aliases)</li>
                            <li><strong>Main Pool</strong> - Select the main liquidity pool for the symbol</li>
                            <div class="info-box">
                                <p>
                                    Here all the pools types are available and can be used according to the execution needs.
                                </p>
                            </div>
                            <li><strong>Backup Pool</strong> - Specify the backup liquidity pool for the symbol, this is not mandatory but the purpose is to re-route trades in case the main pool is unavailable or unresponsive. 
                                                                However the reaminings from partial fills will not be routed to the backup pool but can still be processed in the Leftover Pool</li>
                            <li><strong>Leftover Pool</strong> - Specify the leftover liquidity pool for the symbol, this is not mandatory but the purpose is to route the remaining quantity of the trade that is not filled in the main pool to the leftover pool, 
                                                                    this can be used to minimize the risk of partial fills which backup pool can't fill</li>
                            <li><strong>Bid Markup</strong> - Add a fixed amount (in points) to the bid price during the execution of trade</li>
                            <li><strong>Offer Markup</strong> - Add a fixed amount (in points) to the offer price during the execution of trade</li>
                            <li><strong>Min.Spread</strong> - Set the minimum spread for the symbol</li>
                            <li><strong>Max.Spread</strong> - Set the maximum spread for the symbol</li>
                            <li><strong>Timeout</strong> - Specify the timeout for main pool after which it will fallback to backup pool for trade execution</li>
                            <li><strong>Delay</strong> - Specify the delay for trade execution in ms</li>
                            <li><strong>Min.Size</strong> - Specify the minimum order size accepted by the specified pool for the symbol (size must be in amount not lots)</li>
                            <li><strong>Max.Size</strong> - Specify the maximum order size accepted by the specified pool for the symbol (size must be in amount not lots)</li>
                            <li><strong>Slippage</strong> - Slippage can be enabled or disabled for each trading rule, The main purpose of this 
                                                            option is to give client a slippage by not considering the min/max spread settings. 
                                                            If enabled and min and/or max spread is defined, trading obeys the spreads. 
                                                            If disabled, trading does not obey spreads, thus might result in a slippage.
                                                            On cases where Min/Max spreads are defined, slippage option has no function </li>
                            <li><strong>Merge Partial Fill</strong> - This can be enabled or disabled for a trading rule. Taker can get execution from different layers of market depth for the same order, if this option is
                                                                        disabled, then every execution will be treated as a separate deal, when enabled VWAP will be calcuated from different layers and a single deal will be created</li>

                        </ul>
                    </li>
                    <li>Add the configuration and monitor the trading behavior</li>
                </ol>

                <h4>Editing Existing Trading Rules</h4>
                <p>
                    To edit an existing trading rule, click on the "Edit" button next to the rule you want to modify. 
                    This will open the trading rule configuration modal with the current settings pre-filled. 
                    You can make changes to any of the fields except for the symbol field, which is not editable once a trading rule is created.
                    After making the necessary changes, save the configuration to update the trading rule.
                </p>

                <h4>Add mulitple rules for the same symbol</h4>
                <div class = "architecture-diagram">
                    <img src="./images/taker_trading_multiple_rule_setup_ss.png" alt="Taker Trading Configuration Diagram" class="architecture-image">
                </div>
                <p>
                    Multiple trading rules can be added for the same symbol to allow for different Events, Groups and Accounts.. 
                    To adding a new trading rule for a symbol that already has an existing rule, click on the + button next to the rule which opens the similar modal as Add
                    there select the Event Tag* which specifies the conditions under which each rule should be applied and other parameters like Group filter, Include and Exclude Accounts.
                    Any trade can be re-routed to a different trading profile according to these criterias, 
                    for example you can have different trading rules for the same symbol during different time of the day by using Event Tag to specify the time range for each rule,
                    or you can have different trading rules for different groups of accounts by using Group filter and Include/Exclude accounts fields.
                    <ul>
                        <li><strong>Event Tag</strong> - Event tag is used to specify the conditions under which each trading rule should be applied, 
                                                        it can be based on various factors such as time of day, market volatility, or any other relevant criteria 
                        </li>
                        <li><strong>Group Filter</strong> - Group filter allows to apply the trading rule for specific group from the taker group list (e.g MT5 Groups)</li>
                        <li><strong>Include Accounts</strong> - Account filter allows to apply the trading rule for specific trading accounts</li>
                        <li><strong>Exclude Accounts</strong> - Exclude accounts allows to exclude specific trading accounts from the trading rule, if this field is filled Include Accounts field is ignored and it is also disabled in the modal</li>
                     </ul>
                    </ul> 
                    

                    These rules will be displayed in rows under the same symbol in the trading rules table, with the Event Tag column indicating the specific conditions for each rule (can be expanded by clicking on the > chavron icon in the table row)
                    The order will be checked from top to bottom on the sub rules and the first matching rule will be applied. 
                    If no sub rule matches or if there is no any sub rule for the trade, then the main trading rule without Event Tag will be applied for that symbol.
                    Order of these rules can be changed by dragging and dropping the rows in the table, this will change the priority of the rules and which rule will be applied first for the trade.
                </p>

                <div class="info-box">
                    <ul>
                        <li>All * fields are the required fields to be filled in order to add a trading rule.</li>
                        <li>Import/Export option is available for bulk configuration of trading rules.</li>
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
    window.Pages[TakerTrading.id] = TakerTrading;
}