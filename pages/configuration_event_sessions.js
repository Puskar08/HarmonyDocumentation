
const ConfigurationEventSessions = {
    id: "event-sessions",
    title: "Event Sessions",
    breadcrumb: "Get Started → Configuration → Event Sessions",
    content: `
        <div class="manual-card">
            <div class="page-header">
                <h2>Event Sessions</h2>
                <div class="breadcrumb">Get Started → Configuration → Event Sessions</div>
            </div>
            <div class="content-body">
                <p>In this section we setup the event sessions where we apply the rules like increase/decrease spreads/markups and many more based on the Tag.</p>
                <div class="architecture-diagram">
                    <img src="./images/configuration_event_sessions_ss.png" alt="Event Sessions Diagram" class="architecture-image">
                </div>

                <p>
                    The main page shows the list of added event sessions.
                </p>

                <h4>Steps to Configure Event Sessions</h4>

                <div class = "architecture-diagram">
                    <img src="./images/configuration_event_sessions_setup_ss.png" alt="Event Sessions Configuration Diagram" class="architecture-image">
                </div>

                <ol>
                    <li>Navigate to Event Sessions page</strong></li>
                    <li>Click on "Add" button, it will open the event session configuration modal</li>
                        <ul>
                            <li><strong>Name</strong> - Provide a name for the event session</li>
                            <li><strong>Add Event</strong> - Select the date for the event (start and end time) then choose the Tag (event type) and specify the value for the tag </li>    
                        </ul>
                    </li>
                    <li>Add the configuration and monitor the market behavior for the event sessions</li>
                </ol>

                <h4>Editing Existing Event Sessions</h4>
                <p>
                    To edit an existing event session, click on the "Edit" button next to the session you want to modify. 
                    This will open the event session configuration modal with the current settings pre-filled. 
                    You can make changes to any of the fields, then save the configuration to update the event session.
                </p>

                <div class="info-box">
                    <ul>
                        <li>All * fields are the required fields to be filled in order to add a event session.</li>
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
    window.Pages[ConfigurationEventSessions.id] = ConfigurationEventSessions;
}