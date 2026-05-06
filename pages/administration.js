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
                
                <h3>Pending Changes</h3>
                <p>
                    This page provides details about pending changes to the bridge configuration.
                    You can review, approve, or reject pending changes before they are applied.
                </p>
                <div class="architecture-diagram">
                    <img src="./images/administration_pending_changes_page_ss.png" alt="Pending Changes Page" class="architecture-image">
                </div>

                <h3>Audit</h3>
                <p>
                    This page provides the audit details of the bridge operations.
                    Audit entries include various events and messages related to the operations of the bridge, such as connection status, errors, warnings, and other important information that can help in monitoring and troubleshooting the bridge.
                </p>
                <div class="architecture-diagram">
                    <img src="./images/administration_audit_page_ss.png" alt="Audit Page" class="architecture-image">
                </div>
                
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