// Get Started Landing Page
const GetStartedPage = {
    id: "get-started",
    title: "Get Started with Harmony Bridge",
    breadcrumb: "Getting Started",
    content: `
        <div class="manual-card">
            <div class="page-header">
                <h2>Get Started with Harmony Bridge</h2>
                <div class="breadcrumb">Getting Started Guide</div>
            </div>
            <div class="content-body">
                <!-- <p>Welcome to Harmony Bridge! This guide will help you set up and configure your trading bridge platform.</p> -->
                <div class="architecture-diagram">
                    <img src="./images/bridge_architecture.png" alt="Harmony Bridge Architecture Diagram" class="architecture-image">
                </div>
                
                <h3>Core Documentation Topics</h3>
                <ul>
                    <li><a href="#" data-page="symbol-map-config" class="quick-link">Setup Guide</a> - Setting up the platform</li>
                    <li><a href="#" data-page="pricing-groups-markups" class="quick-link">Quick Start</a> - Get started quickly with the basics</li>
                </ul>
                
                
             <!--    
                <div class="footer-links">
                    <span class="quick-link" data-page="symbol-map-config">Start with Symbol Map →</span>
                    <span class="quick-link" data-page="knowledgebase">Browse Knowledge Base</span>
                    <span class="quick-link" data-page="contact">Need Help?</span>
                </div>
            -->
            </div>
        </div>
    `
};

// Register this page
if (typeof window !== 'undefined') {
    window.Pages = window.Pages || {};
    window.Pages[GetStartedPage.id] = GetStartedPage;
    console.log("✅ Registered get-started page:", GetStartedPage.id);
}