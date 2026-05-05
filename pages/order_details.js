// Order Details Page
const OrderDetailsPage = {
    id: "order-details-graphs",
    title: "Order Details & Price Graphs",
    breadcrumb: "Reports → Execution Analysis",
    content: `
        <div class="manual-card">
            <div class="page-header">
                <h2>📊 Executed Order Details & Price Graphs</h2>
                <div class="breadcrumb">Reports → Orders</div>
            </div>
            <div class="content-body">
                <p>View fill price, LP source, gateway latency, and price graphs per order. Drill-down into every execution.</p>
                <h3>How to use</h3>
                <ul>
                    <li>Go to <strong>Reports → Order History</strong></li>
                    <li>Click any order ID for full details: timeline, price chart, LP counterparty</li>
                    <li>Export detailed CSV or share snapshot</li>
                </ul>
                <div class="info-box">📉 Graph visualizes slippage and price improvement across multiple LPs.</div>
            </div>
        </div>
    `
};

if (typeof window !== 'undefined') {
    window.Pages = window.Pages || {};
    window.Pages[OrderDetailsPage.id] = OrderDetailsPage;
}