// Symbol Map Configuration Page
const SymbolMapPage1 = {
    id: "symbol-map-config",
    title: "Symbol Map Configuration",
    breadcrumb: "Configuration → Symbols",
    content: `
        <div class="manual-card">
            <div class="page-header">
                <h2>🔄 Symbol Map Configuration</h2>
                <div class="breadcrumb">Configuration → Symbols</div>
            </div>
            <div class="content-body">
                <p>Map MT4/MT5 symbols to LP price feeds. Navigate to Configuration → Symbols, tick LPs, Save.</p>
                <div class="info-box">✅ Harmony Bridge auto-detects new symbols without restart.</div>
                <h3>📌 Step-by-Step Guide</h3>
                <ul>
                    <li>Go to <strong>Configuration → Symbol Manager</strong></li>
                    <li>Choose columns: Broker Symbol, LP Symbol, enabled status</li>
                    <li>Set Map Mode: Manual or Auto-Discovery</li>
                    <li>Select one or more Liquidity Providers (LPs)</li>
                    <li>Click <strong>Save & Apply</strong> to activate routing</li>
                </ul>
                <div class="info-box">💡 Pro tip: Use batch mapping for multiple symbols at once via CSV import/export.</div>
            </div>
        </div>
    `
};

const SymbolMapPage = {
    id: "symbol-map-config",
    title: "Symbol Map Configuration",
    breadcrumb: "Configuration → Symbols",
    content: `
            <div class="manual-card">
                <div class="page-header">
                    <h2>🔄 Symbol Map Configuration</h2>
                    <div class="breadcrumb">Configuration → Symbols</div>
                </div>
                <div class="content-body">
                    <p>Map MT4/MT5 symbols to LP price feeds. Navigate to Configuration → Symbols, tick LPs, Save.</p>
                    <div class="info-box">✅ Harmony Bridge auto-detects new symbols without restart.</div>
                    <h3>Guide</h3>
                    <ul>
                        <li>Choose columns → Map Mode</li>
                        <li>Select Providers & Save</li>
                    </ul>
                </div>
            </div>
        </div>
    `
};

if (typeof window !== 'undefined') {
    window.Pages = window.Pages || {};
    window.Pages[SymbolMapPage.id] = SymbolMapPage;
}