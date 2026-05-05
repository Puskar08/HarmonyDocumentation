// Main Application - Orchestrates all separate page modules
// Navigation configuration
const CHAPTER_LIST = [

    /*
    { id: "symbol-map-config", label: "Symbol Map Configuration" },
    { id: "pricing-groups-markups", label: "Pricing Groups & Markups" },
    { id: "routing-stp-bbook", label: "Routing: STP or B-Book? (Rule Engine)" },
    { id: "scalper-detection", label: "Scalper Detection & Actions" },
    { id: "order-details-graphs", label: "Order Details & Price Graphs" },
    { id: "shadow-bbook-accounts", label: "Shadow Accounts & B-Book Trade Accounts" }
     */
];

// New nested menu structure for Taker
const TAKER_MENU = {
    id: "taker",
    label: "Taker",  
    subItems: [
        { id: "taker-pricing", label: "Pricing" },
        { id: "taker-trading", label: "Trading" },
        { id: "taker-drop-copy", label: "Drop Copy" },
    ]
};

const RESOURCE_PAGE_LIST = [
    { id: "knowledgebase", label: "Knowledge Base & FAQ" },
    { id: "uiguide", label: "User Interface Help" },
    { id: "contact", label: "Contact Support" }
];

// State management
let currentPageId = "welcome";
let isNavCollapsed = false;
let parentOpenState = { getStarted: false };

// Get page from global Pages registry (loaded from separate files)
function getPage(pageId) {
    return window.Pages ? window.Pages[pageId] : null;
}

// Load page content
function loadPage(pageId) {
    const page = getPage(pageId);
    if (!page) {
        document.getElementById("mainContent").innerHTML = `
            <div class="manual-card">
                <div class="page-header"><h2>📄 Page Not Found</h2></div>
                <div class="content-body"><p>The requested documentation page could not be found. Please return to <a href="#" data-page="welcome">Welcome</a>.</p></div>
            </div>
        `;
        return;
    }
    document.getElementById("mainContent").innerHTML = page.content;
    currentPageId = pageId;

    // Re-attach quick-link event listeners
    document.querySelectorAll('.quick-link, [data-page]').forEach(el => {
        if (el.getAttribute('data-page')) {
            el.removeEventListener('click', quickLinkHandler);
            el.addEventListener('click', quickLinkHandler);
        }
    });
}

function quickLinkHandler(e) {
    e.preventDefault();
    const targetPage = e.currentTarget.getAttribute('data-page');
    if (targetPage && getPage(targetPage)) {
        loadPage(targetPage);
        renderSidebar();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}

// Render sidebar navigation
function renderSidebar() {
    const sidebar = document.getElementById("sidebarNav");
    if (!sidebar) return;

    const getStartedOpenClass = parentOpenState.getStarted ? 'open' : '';
    const isGetStartedActive = currentPageId === 'get-started';
    const takerOpenClass = parentOpenState.taker ? 'open' : '';
    const isTakerActive = currentPageId === 'taker' || TAKER_MENU.subItems.some(item => item.id === currentPageId);
    let html = `
        <div class="nav-search-mobile">
            <div class="search-area">
                <input type="text" id="mobileSearchInput" placeholder="Search documentation...">
                <button id="mobileSearchBtn">🔍</button>
            </div>
        </div>
        <ul class="nav-section">
            <li><a class="nav-item ${currentPageId === 'welcome' ? 'active' : ''}" data-page="welcome">Welcome</a></li>
            <li class="nav-item-group">
                <div class="nav-parent ${getStartedOpenClass}" data-parent-id="getStarted">
                    <div class="parent-label">
                        <span class="toggle-icon">▶</span>
                        <span class="parent-title-link">
                            <a class="nav-parent-link ${isGetStartedActive ? 'active' : ''}" data-page="get-started">Get Started</a>
                        </span>
                    </div>
                </div>
                <ul class="sub-nav level-1">
                 <!-- Taker Nested Menu -->
                    <li class="nav-item-group nested">
                        <div class="nav-parent nested-parent ${takerOpenClass}" data-parent-id="taker">
                            <div class="parent-label">
                                <span class="toggle-icon">▶</span>
                                <span class="parent-title-link">
                                    <a class="nav-parent-link ${isTakerActive ? 'active' : ''}" data-page="taker">${TAKER_MENU.label}</a>
                                </span>
                            </div>
                        </div>
                        <ul class="sub-nav level-2">
                            ${TAKER_MENU.subItems.map(item => `
                                <li><a class="nav-item ${currentPageId === item.id ? 'active' : ''}" data-page="${item.id}">${item.label}</a></li>
                            `).join('')}
                        </ul>
                    </li>
                    ${CHAPTER_LIST.map(ch => `<li><a class="nav-item ${currentPageId === ch.id ? 'active' : ''}" data-page="${ch.id}">${ch.label}</a></li>`).join('')}
                </ul>                    
            </li>
            <li class="nav-item-group">
                ${RESOURCE_PAGE_LIST.map(res => `<li><a class="nav-item ${currentPageId === res.id ? 'active' : ''}" data-page="${res.id}">${res.label}</a></li>`).join('')}
            </li>
        </ul>
    `;

    sidebar.innerHTML = html;

    // Attach parent toggle for Get Started
    const getStartedDiv = document.querySelector('.nav-parent[data-parent-id="getStarted"]');
    if (getStartedDiv) {
        if (parentOpenState.getStarted) getStartedDiv.classList.add('open');
        else getStartedDiv.classList.remove('open');

        const toggleIcon = getStartedDiv.querySelector('.toggle-icon');
        if (toggleIcon) {
            toggleIcon.addEventListener('click', (e) => {
                e.stopPropagation();
                getStartedDiv.classList.toggle('open');
                parentOpenState.getStarted = getStartedDiv.classList.contains('open');
            });
        }
    }

    // Attach parent toggle for Taker (nested)
    const takerDiv = document.querySelector('.nav-parent[data-parent-id="taker"]');
    if (takerDiv) {
        if (parentOpenState.taker) takerDiv.classList.add('open');
        else takerDiv.classList.remove('open');

        const takerToggleIcon = takerDiv.querySelector('.toggle-icon');
        if (takerToggleIcon) {
            takerToggleIcon.addEventListener('click', (e) => {
                e.stopPropagation();
                takerDiv.classList.toggle('open');
                parentOpenState.taker = takerDiv.classList.contains('open');
            });
        }
    }

    // Attach page navigation
    document.querySelectorAll('[data-page]').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = el.getAttribute('data-page');
            if (pageId) {
                loadPage(pageId);
                renderSidebar();
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        });
    });

    // Mobile search
    const mobileSearchBtn = document.getElementById("mobileSearchBtn");
    const mobileSearchInput = document.getElementById("mobileSearchInput");
    if (mobileSearchBtn && mobileSearchInput) {
        const mobileSearch = () => {
            const query = mobileSearchInput.value.trim().toLowerCase();
            performSearch(query);
        };
        mobileSearchBtn.onclick = mobileSearch;
        mobileSearchInput.onkeypress = (e) => { if (e.key === "Enter") mobileSearch(); };
    }
}

// Global search across all page modules
function performSearch(query) {
    if (!query) { alert("Enter keyword (e.g., symbol, routing, scalper, hedge)"); return; }
    let results = [];
    if (window.Pages) {
        for (let [id, page] of Object.entries(window.Pages)) {
            if (page.title.toLowerCase().includes(query) || page.content.toLowerCase().includes(query)) {
                results.push(page.title);
            }
        }
    }
    if (results.length) {
        alert(`🔍 Found matches in:\n- ${results.join("\n- ")}\n\nClick on sidebar section to view.`);
    } else {
        alert("No matches found. Try 'STP', 'pricing', 'shadow', or 'symbol'.");
    }
}

function handleGlobalSearch() {
    const query = document.getElementById("searchInput").value.trim().toLowerCase();
    performSearch(query);
}

function toggleNavbar() {
    const nav = document.getElementById("sidebarNav");
    if (!nav) return;
    nav.classList.toggle("collapsed");
    isNavCollapsed = nav.classList.contains("collapsed");
    localStorage.setItem("harmonyNavCollapsed", isNavCollapsed);
}

// Responsive behavior
window.addEventListener("resize", () => {
    if (window.innerWidth > 780 && isNavCollapsed) {
        const navPanel = document.getElementById("sidebarNav");
        if (navPanel && navPanel.classList.contains("collapsed")) {
            navPanel.classList.remove("collapsed");
            isNavCollapsed = false;
        }
    }
});

// Initialize app
window.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("harmonyNavCollapsed");
    if (saved === "true") {
        isNavCollapsed = true;
        document.getElementById("sidebarNav")?.classList.add("collapsed");
    }

    renderSidebar();
    loadPage("welcome");

    const toggleBtn = document.getElementById("toggleNavBtn");
    if (toggleBtn) toggleBtn.addEventListener("click", toggleNavbar);

    const searchBtn = document.getElementById("searchBtn");
    const searchInput = document.getElementById("searchInput");
    if (searchBtn) searchBtn.addEventListener("click", handleGlobalSearch);
    if (searchInput) searchInput.addEventListener("keypress", (e) => { if (e.key === "Enter") handleGlobalSearch(); });
});