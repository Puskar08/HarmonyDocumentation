
// ======================== MANUAL DATA ========================
const MANUAL = {
    welcome: {
        id: "welcome",
        title: "Welcome to Harmony Bridge",
        breadcrumb: "Home",
        content: `
                <div class="manual-card">
                    <div class="page-header">
                        <h2>Harmony Bridge Help Portal</h2>
                        <div class="breadcrumb">Welcome</div>
                    </div>
                    <div class="content-body">
                        <p><strong>Harmony Bridge</strong> is a next-generation trading bridge & aggregation platform that connects MT4/MT5 brokers to multiple liquidity providers, sophisticated routing engines, and smart order management. Designed for low latency, full transparency, and flexibility.</p>
                        
                        <div class="info-box">
                            🔍 <strong>Quick Tip</strong> — Harmony Bridge provides real-time symbol mapping, STP/B-Book hybrid routing, scalper detection, spread control, and advanced reporting.
                        </div>
                        <h3>🔹 TRADERS & INTEGRATION</h3>
                        <ul>
                            <li>Multi-Platform Servers (MT4/MT5/ cTrader)</li>
                            <li>Multi-Channel Connection & Gateways</li>
                            <li>Plugins / Custom Adapters</li>
                        </ul>
                        <h3>🔹 HARMONY CORE SERVICES</h3>
                        <ul>
                            <li>Trade Processor & Aggregator</li>
                            <li>Rule-based Order Flow & B-Book Provider</li>
                            <li>Synthetic Symbol Engine & HTML5 UI</li>
                        </ul>
                        <div class="footer-links">
                            <span>Get Started</span>
                            <span>Knowledge Base</span>
                            <span>UI Help</span>
                            <span>Contact us</span>
                        </div>
                    </div>
                </div>
                `
    },
    chapters: {
        "symbol-map-config": { title: "Symbol Map Configuration", breadcrumb: "Configuration → Symbols", content: `<div class="manual-card"><div class="page-header"><h2>🔄 Symbol Map Configuration</h2><div class="breadcrumb">Configuration → Symbols</div></div><div class="content-body"><p>Map MT4/MT5 symbols to LP price feeds. Navigate to Configuration → Symbols, tick LPs, Save.</p><div class="info-box">✅ Harmony Bridge auto-detects new symbols without restart.</div><h3>Guide</h3><ul><li>Choose columns → Map Mode</li><li>Select Providers & Save</li></ul></div></div>` },
        "pricing-groups-markups": { title: "Pricing Groups & Markups", breadcrumb: "Pricing", content: `<div class="manual-card"><div class="page-header"><h2>💰 Pricing Groups & Markups</h2><div class="breadcrumb">Pricing</div></div><div class="content-body"><p>Define custom markups per symbol group, apply bid/ask adjustments.</p><div class="info-box">Example: VIP group 0.2 pips markup.</div></div></div>` },
        "routing-stp-bbook": { title: "Routing: STP or B-Book? (Rule Engine)", breadcrumb: "Rule Engine", content: `<div class="manual-card"><div class="page-header"><h2>🧭 Routing Engine: STP or B-Book</h2><div class="breadcrumb">Rule Engine</div></div><div class="content-body"><p>Create conditional rules: if volume > threshold → STP to LP, else B-Book internalization.</p></div></div>` },
        "scalper-detection": { title: "Scalper Detection & Actions", breadcrumb: "Risk", content: `<div class="manual-card"><div class="page-header"><h2>🛡️ Scalper Detection & Actions</h2><div class="breadcrumb">Risk</div></div><div class="content-body"><p>Set min trade interval, actions: reject, add spread, log alerts.</p></div></div>` },
        "order-details-graphs": { title: "Order Details & Price Graphs", breadcrumb: "Reports", content: `<div class="manual-card"><div class="page-header"><h2>📊 Executed Order Details & Price Graphs</h2><div class="breadcrumb">Reports</div></div><div class="content-body"><p>View fill price, LP source and price graphs per order.</p></div></div>` },
        "shadow-bbook-accounts": { title: "Shadow Accounts & B-Book Trade Accounts", breadcrumb: "Coverage", content: `<div class="manual-card"><div class="page-header"><h2>💼 Shadow Accounts & B-Book Trade Accounts</h2><div class="breadcrumb">Coverage</div></div><div class="content-body"><p>Internal hedge accounts mirroring client exposure without external LP.</p></div></div>` }
    }
};

const chapterList = [
    { id: "symbol-map-config", label: "Symbol Map Configuration" },
    { id: "pricing-groups-markups", label: "Pricing Groups & Markups" },
    { id: "routing-stp-bbook", label: "Routing: STP or B-Book? (Rule Engine)" },
    { id: "scalper-detection", label: "Scalper Detection & Actions" },
    { id: "order-details-graphs", label: "Order Details & Price Graphs" },
    { id: "shadow-bbook-accounts", label: "Shadow Accounts & B-Book Trade Accounts" }
];
const resourcePageList = [
    { id: "knowledgebase", label: "Knowledge Base & FAQ" },
    { id: "uiguide", label: "User Interface Help" },
    { id: "contact", label: "Contact Support" }
];

let currentPageId = "welcome";
let isNavCollapsed = false;

// Track open/close state for expandable parents (persist expand state)
let parentOpenState = {
    getStarted: false  // initially collapsed
};

// Function to render sidebar with current active states and open/closed states
function renderSidebar() {
    const sidebar = document.getElementById("sidebarNav");
    if (!sidebar) return;

    // Build parent HTML with conditional open class based on stored state
    const getStartedOpenClass = parentOpenState.getStarted ? 'open' : '';

    let html = `
            <div class="nav-search-mobile">
                <div class="search-area">
                    <input type="text" id="mobileSearchInput" placeholder="Search...">
                    <button id="mobileSearchBtn">🔍</button>
                </div>
            </div>
            <ul class="nav-section">
                <li><a class="nav-item ${currentPageId === 'welcome' ? 'active' : ''}" data-page="welcome">Welcome</a></li>
                <li class="nav-item">
                    <div class="nav-parent ${getStartedOpenClass}" data-toggle="parent" data-parent-id="getStarted">
                        <div class="parent-label">
                            <span class="toggle-icon">▶</span>
                            <span>Get Started</span>
                        </div>
                    </div>
                    <ul class="sub-nav">
                        ${chapterList.map(ch => `<li><a href="#" class="nav-item ${currentPageId === ch.id ? 'active' : ''}" data-page="${ch.id}">${ch.label}</a></li>`).join('')}
                    </ul>
                </li>
                <li class="nav-action">
                    ${resourcePageList.map(res => `<li> <a href="#" class="nav-item ${currentPageId === res.id ? 'active' : ''}" data-page="${res.id}">${res.label}</a> </li>`).join('')}
                </li>
            </ul>
            `;

    sidebar.innerHTML = html;

    // Set initial sub-nav max-height based on open state (CSS will handle, but ensure consistency)
    const parentDiv = document.querySelector('.nav-parent[data-parent-id="getStarted"]');
    if (parentDiv) {
        if (parentOpenState.getStarted) {
            parentDiv.classList.add('open');
        } else {
            parentDiv.classList.remove('open');
        }

        // Add click listener for parent toggle (NO auto collapse, just toggle submenu)
        parentDiv.addEventListener('click', (e) => {
            e.stopPropagation();
            // Toggle the open state
            parentDiv.classList.toggle('open');
            const isNowOpen = parentDiv.classList.contains('open');
            parentOpenState.getStarted = isNowOpen;
            // No auto-closing of sidebar, no navigation - just expand/collapse submenu
        });

        // Keyboard accessibility
        parentDiv.setAttribute('tabindex', '0');
        parentDiv.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                parentDiv.classList.toggle('open');
                parentOpenState.getStarted = parentDiv.classList.contains('open');
            }
        });
    }

    // Attach page navigation for all [data-page] - makes clicked item BOLD
    document.querySelectorAll('[data-page]').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = el.getAttribute('data-page');

            // Update current page id
            currentPageId = pageId;

            // Load content based on pageId
            if (pageId === "welcome") {
                document.getElementById("mainContent").innerHTML = MANUAL.welcome.content;
            } else if (pageId === "getstarted") {
                document.getElementById("mainContent").innerHTML = MANUAL.getStartedLanding.content;
            } else if (MANUAL.chapters[pageId]) {
                document.getElementById("mainContent").innerHTML = MANUAL.chapters[pageId].content;
            } else {
                // Fallback for extra pages
                document.getElementById("mainContent").innerHTML = `<div class="manual-card"><h2>📘 ${el.innerText}</h2><p>This section is coming soon. For complete documentation, please refer to the 'Get Started' topics.</p><div class="info-box">support@harmonybridge.com</div></div>`;
            }

            // Re-render sidebar to update active/bold states
            renderSidebar();

            // Smooth scroll to top
            window.scrollTo({ top: 0, behavior: "smooth" });

            // IMPORTANT: Sidebar does NOT auto-close on click - remains as is
            // The nav bar stays open/closed based solely on user's toggle button
        });
    });

    // attach mobile search functionality
    const mobileSearchBtn = document.getElementById("mobileSearchBtn");
    const mobileSearchInput = document.getElementById("mobileSearchInput");
    if (mobileSearchBtn && mobileSearchInput) {
        const searchHandler = () => {
            const query = mobileSearchInput.value.trim().toLowerCase();
            if (!query) { alert("Enter keyword (e.g., symbol, routing, scalper)"); return; }
            let results = [];
            if (MANUAL.welcome.content.toLowerCase().includes(query)) results.push("Welcome");
            if (MANUAL.getStartedLanding.content.toLowerCase().includes(query)) results.push("Get Started");
            for (let [id, ch] of Object.entries(MANUAL.chapters)) {
                if (ch.title.toLowerCase().includes(query) || ch.content.toLowerCase().includes(query)) results.push(ch.title);
            }
            if (results.length) alert(`🔍 Found matches:\n- ${results.join("\n- ")}\n\nOpen sidebar to view.`);
            else alert("No matches. Try 'pricing', 'STP', 'shadow'.");
        };
        mobileSearchBtn.addEventListener("click", searchHandler);
        mobileSearchInput.addEventListener("keypress", (e) => { if (e.key === "Enter") searchHandler(); });
    }
}

function toggleNavbar(forceCollapse) {
    const nav = document.getElementById("sidebarNav");
    if (!nav) return;
    if (forceCollapse === true) {
        nav.classList.add("collapsed");
        isNavCollapsed = true;
    } else if (forceCollapse === false) {
        nav.classList.remove("collapsed");
        isNavCollapsed = false;
    } else {
        nav.classList.toggle("collapsed");
        isNavCollapsed = nav.classList.contains("collapsed");
    }
    localStorage.setItem("harmonyNavCollapsed", isNavCollapsed);
}

function handleGlobalSearch() {
    const query = document.getElementById("searchInput").value.trim().toLowerCase();
    if (!query) { alert("Please enter keyword (e.g., symbol map, routing)"); return; }
    let results = [];
    if (MANUAL.welcome.content.toLowerCase().includes(query)) results.push("Welcome");
    if (MANUAL.getStartedLanding.content.toLowerCase().includes(query)) results.push("Get Started");
    for (let [id, ch] of Object.entries(MANUAL.chapters)) {
        if (ch.title.toLowerCase().includes(query) || ch.content.toLowerCase().includes(query)) results.push(ch.title);
    }
    if (results.length) alert(`🔍 Found in:\n- ${results.join("\n- ")}\n\nOpen sidebar and click relevant section.`);
    else alert("No results found.");
}

// Initialization
window.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("harmonyNavCollapsed");
    if (saved === "true") {
        isNavCollapsed = true;
        document.getElementById("sidebarNav")?.classList.add("collapsed");
    } else {
        isNavCollapsed = false;
    }

    renderSidebar();
    // Load default welcome content
    document.getElementById("mainContent").innerHTML = MANUAL.welcome.content;
    currentPageId = "welcome";

    const toggleBtn = document.getElementById("toggleNavBtn");
    if (toggleBtn) toggleBtn.addEventListener("click", () => toggleNavbar());

    const searchBtn = document.getElementById("searchBtn");
    const searchInput = document.getElementById("searchInput");
    if (searchBtn) searchBtn.addEventListener("click", handleGlobalSearch);
    if (searchInput) searchInput.addEventListener("keypress", (e) => { if (e.key === "Enter") handleGlobalSearch(); });

    // On resize, handle desktop vs mobile but DO NOT auto-close based on click
    window.addEventListener("resize", () => {
        if (window.innerWidth > 780 && isNavCollapsed) {
            const navPanel = document.getElementById("sidebarNav");
            if (navPanel && navPanel.classList.contains("collapsed")) navPanel.classList.remove("collapsed");
            isNavCollapsed = false;
        }
    });
});
