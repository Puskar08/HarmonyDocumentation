
const ConfigurationMarketSessions = {
    id: "market-sessions",
    title: "Market Sessions",
    breadcrumb: "Get Started → Configuration → Market Sessions",
    content: `
        <div class="manual-card">
            <div class="page-header">
                <h2>Market Sessions</h2>
                <div class="breadcrumb">Get Started → Configuration → Market Sessions</div>
            </div>
            <div class="content-body">
                <p>In this section we setup the market sessions and holidays.</p>
                <div class="architecture-diagram">
                    <img src="./images/configuration_market_sessions_ss.png" alt="Market Sessions Diagram" class="architecture-image">
                </div>

                <p>
                    The main page shows the list of added market sessions.
                </p>

                <h4>Steps to Configure Market Sessions</h4>

                <div class = "architecture-diagram">
                    <img src="./images/configuration_market_sessions_setup_ss.png" alt="Market Sessions Configuration Diagram" class="architecture-image">
                </div>

                <ol>
                    <li>Navigate to Market Sessions page</strong></li>
                    <li>Click on "Add" button, it will open the market session configuration modal</li>
                        <ul>
                            <li><strong>Name</strong> - Provide a name for the market session</li>
                            <ul>
                                <li><strong>Session Entries</strong> - Define the session timing for days in the week</li>
                                <ul>
                                    <li><strong>Days</strong> - Select the days for which the market session is applicable and setup the start time and end time</li>
                                </ul>
                                <li><strong>Holidays</strong> - Define the holidays for the market session</li>
                                <ul>
                                    <li><strong>Add Holiday</strong> - Select the date for the holiday (start and end time is available to put holiday for just one market session in the day or full day) </li>
                                </ul>
                            </ul>
                        </ul>
                    </li>
                    <li>Add the configuration and monitor the market sessions and holidays</li>
                </ol>

                <h4>Editing Existing Market Sessions</h4>
                <p>
                    To edit an existing market session, click on the "Edit" button next to the session you want to modify. 
                    This will open the market session configuration modal with the current settings pre-filled. 
                    You can make changes to any of the fields, then save the configuration to update the market session.
                </p>

                <div class="info-box">
                    <ul>
                        <li>All * fields are the required fields to be filled in order to add a market session.</li>
                        <li>Note the timings are all in UTC.</li>
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
    window.Pages[ConfigurationMarketSessions.id] = ConfigurationMarketSessions;
}