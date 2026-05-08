// Configuration Overview Page
const AdministrationPage = {
    id: "administration",
    title: "Administration Module Overview",
    breadcrumb: "Get Started → Administration",
    content: `
        <div class="manual-card">
            <div class="page-header">
                <h2>Administration</h2>
                <div class="breadcrumb">Get Started → Administration</div>
            </div>
            <div class="content-body">
                
                <div class="info-box">
                    This section is dedicated to the administration of the bridge, where you can manage users, roles, and permissions.
                    Proper administration is crucial for ensuring that the right people have access to the right features and data within the bridge, while also maintaining security and control over the system.
                </div>

                <h3>Maintenance</h3>
                <p>
                    User can reset provider and/or taker connections manually here.
                </p>

                <h3>Users</h3>
                <p>
                    If the current Harmony user has the proper previlages, he/she can create new users with different previlages using this page. All available users will be visible on the table.
                </p>
                
                <h3>Pending Changes</h3>
                <p>
                    This page provides details about pending changes to the bridge configuration.
                    You can review, approve, or reject pending changes before they are applied.
                    All the changes made on Harmony needs to be applied for them to be affective. Here, the user can see the pending changes, and apply them if needed. Also, unvanted changes can be rolled back using the rollback (16)  button on the change item.
                    Keep in mind, all the changes below the rolled back change would be rolled back as well.

                </p>
                <div class="architecture-diagram">
                    <img src="./images/administration_pending_changes_page_ss.png" alt="Pending Changes Page" class="architecture-image">
                </div>

                <h3>Audit</h3>
                <p>
                    The changes applied so far can be seen on the audit list so that they can be inspected if needed. The list it shows the initiator user, the change type, operation type, previous settings and the new settings as well as a time stamp.
                    Audit entries include various events and messages related to the operations of the bridge, such as connection status, errors, warnings, and other important information that can help in monitoring and troubleshooting the bridge.
                </p>
                <div class="architecture-diagram">
                    <img src="./images/administration_audit_page_ss.png" alt="Audit Page" class="architecture-image">
                </div>

                <h3>Domain Model</h3>
                <p>
                    The internal and facade structure of the Harmony can be seen here. This is useful expecially for linking the logs to the Harmony entities.
                </p>
                
                <div class="footer-links">
                    
                </div>
            </div>
        </div>
    `
};

if (typeof window !== 'undefined') {
    window.Pages = window.Pages || {};
    window.Pages[AdministrationPage.id] = AdministrationPage;
    console.log("✅ Registered administration page:", AdministrationPage.id);
}