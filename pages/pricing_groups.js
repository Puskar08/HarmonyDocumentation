// Pricing Groups & Markups Page
const PricingGroupsPage = {
    id: "pricing-groups-markups",
    title: "Pricing Groups & Markups",
    breadcrumb: "Configuration → Pricing",
    content: `
        <div class="manual-card">
            <div class="page-header">
                <h2>💰 Pricing Groups & Markups</h2>
                <div class="breadcrumb">Configuration → Pricing</div>
            </div>
            <div class="content-body">
                <p>Define custom markups per symbol group, apply bid/ask adjustments, and manage spreads dynamically per user segment.</p>
                <div class="info-box">💎 Example: VIP group receives 0.2 pips markup, while Standard group gets 1.5 pips.</div>
                <h3>Creating a Pricing Group</h3>
                <ul>
                    <li><strong>Step 1:</strong> Navigate to Pricing → Groups</li>
                    <li><strong>Step 2:</strong> Click 'Add Group' and name (e.g., "Institutional")</li>
                    <li><strong>Step 3:</strong> Assign symbols and set markup type: fixed or percentage</li>
                    <li><strong>Step 4:</strong> Apply to accounts or groups</li>
                </ul>
                <div class="info-box">⚙️ Advanced: Real-time markup adjustments via API are also supported.</div>
            </div>
        </div>
    `
};

if (typeof window !== 'undefined') {
    window.Pages = window.Pages || {};
    window.Pages[PricingGroupsPage.id] = PricingGroupsPage;
}