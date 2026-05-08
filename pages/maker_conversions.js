// Maker Conversions Page
const Conversions = {
    id: "maker-conversions",
    title: "Maker Conversions",
    breadcrumb: "Get Started → Maker → Conversions",
    content: `
        <div class="manual-card">
            <div class="page-header">
                <h2>Conversions</h2>
                <div class="breadcrumb">Get Started → Maker → Conversions</div>
            </div>
            <div class="content-body">
                <p>
                    This section is used for configuring the synthetic/derived symbols to be provided to the end system by Harmony.
                    Right now only sime synthetics can be created, no complex synthetics that requires the use of two symbols can be created.
                </p>
                
                <div class="architecture-diagram">
                    <img src="./images/maker_conversions_ss.png" alt="Maker Conversions Diagram" class="architecture-image">
                </div>
                <p>
                    The synthetic symbols can be created based on provider, mimicing the provider is indeed providing these symbols by the use of a source symbol and price and volume coefficients.
                    This gives the ability to stream a synthetic symbol to the takers, and then send the flow to the corresponding provider by using the source symbol.
                </p>
                <div class = "info-box">
                    <p>
                        Target symbol should also be available under the bridge symbols, and shoule be linked to a source symbol which is already be available on the provider.
                    </p>
                    <p>
                        The price of the source symbol is modified by the price multiplier and price divider. 
                        The necessity comes from having the need for a better precision and price is multiplied by the multiplier and divided by the divider, thus giving us the price of the new symbol. 
                    </p>
                    <p>
                        Trading also have two modifiers, a multiplier and a divider, but this time they work in opposite way. Multiplier divides the amount and divider multiplies it.
                    </p>
                </div>
                <p>
                    The main page shows the list of all the derived symbols by the provider, with details such as target, source, price and volume multipliers.
                    The price of the source symbol is modified by the price multiplier and price divider. 
                    The necessity comes from having the need for a better precision and price is multiplied by the multiplier and divided by the divider,
                    thus giving us the price of the new symbol. 
                </p>

                <h4>Steps to Configure Maker Conversions</h4>

                <div class = "architecture-diagram">
                    <img src="./images/maker_conversions_setup_ss.png" alt="Maker Conversions Configuration Diagram" class="architecture-image">
                </div>

                <ol>
                    <li>Navigate to Maker Conversions page</strong></li>
                    <li>Select the provider in which you want to add a new symbol, from the top right corner</li>
                    <li>Click on "Add" button, it will open the conversion rule configuration modal</li>
                        <ul>
                            <li><strong>Enabled</strong> - Toggle to enable or disable the conversion rule</li>
                            <li><strong>Target Symbol</strong> - Select the symbol to configure conversion (Bridge Symbol)</li>
                            <li><strong>Source Symbol</strong> - Select the source for the target symbol</li>
                            <li><strong>Leftover Pool</strong> - Select the leftover pool that will be used to transfer the trades from this symbol when there is accumulation of the leftover volume</li>
                            <li><strong>Price Multiplier</strong> - Specify the multiplier for the price conversion</li>
                            <li><strong>Price Divider</strong> - Specify the divider for the price conversion</li>
                            <li><strong>Volume Multiplier</strong> - Specify the multiplier for the volume conversion</li>
                            <li><strong>Volume Divider</strong> - Specify the divider for the volume conversion</li>
                        </ul>
                    </li>
                    <li>Add the configuration and monitor the conversion behavior</li>
                </ol>

                <h4>Editing Existing Conversion Rules</h4>
                <p>
                    To edit an existing conversion rule, click on the "Edit" button next to the rule you want to modify. 
                    This will open the conversion rule configuration modal with the current settings pre-filled. 
                    You can make changes to any of the fields, then save the configuration to update the conversion rule.
                </p>

                <div class="info-box">
                <p>
                    An example would be the creation of a gold tolabar in AED prices. 1 tolabar is 3.75 troy ounces, and 1 USD is 3.67 AED. So we can create TTBAED sythetic symbol for a provider by using their XAUUSD prices, and send TTBAED flow to them and hedge it on XAUUSD.
                    Since 1 TTB is 3.75 troy ounces, the price would be multiplied by 3.75 to get the USD prices. But then this will also be multiplied by 3.67 to get the AED prices. 
                    Thus our price multiplier would be 13.7625. Our price divider would be 1.
                    When we try to send 1 TTBAED to the provider via XAUUSD trades, the price wont be a problem, and we should focus on the amounts. 1 TTB will be 3.75 ounces of XAU, 
                    thus our volume should be multplied by this much. But Harmony modifiers work other way around, the price divider should be 3.75, and price multiplier will be 1. 
                </p>
                <p>
                    The leftover pool is used on the leftovers (as the name suggests). Let’s revisit the above example. 
                    1 TTB is 3.75 ounces of XAU. Suppose the min/max/step on the provider is 1/1000/1, meaning you can only send 3 out of 3.75 ounces. 
                    The remaining 0.75 ounces will be executed on the leftover pool.
                </p>
                </div>

                <div class="info-box">
                    Please note that each provider symbol can be linked to only one bridge symbol. 
                    In case there is a need to feed two different symbols from the same provider symbol, conversions can be used as well. On those cases, all multipliers and dividers will be set to 1, 
                    to replicate the symbol on the new one.
                </div>
                
                <div class="footer-links">
                    
                </div>
                </div>
            </div>
    `
};

if (typeof window !== 'undefined') {
    window.Pages = window.Pages || {};
    window.Pages[Conversions.id] = Conversions;
}