// tab switching functionality
function switchTab(tabId) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.style.display = 'none'; // Hide all tabs
    });
    document.getElementById(tabId).style.display = 'block'; // Show the selected tab
}

// game filtering functionality
function filterGames(searchTerm) {
    const games = document.querySelectorAll('.game-item');
    games.forEach(game => {
        if (game.textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
            game.style.display = 'block'; // Show the game item
        } else {
            game.style.display = 'none'; // Hide the game item
        }
    });
}

// game opening/closing modals functionality
function openGameModal(gameId) {
    const modal = document.getElementById(gameId);
    modal.style.display = 'block'; // Show the modal
}

function closeGameModal(gameId) {
    const modal = document.getElementById(gameId);
    modal.style.display = 'none'; // Hide the modal
}

// theme changing functionality
function changeTheme(theme) {
    document.body.className = theme; // Change the body's class to the selected theme
}

// tab cloaking functionality
function cloakTab(tabId) {
    const tab = document.getElementById(tabId);
    tab.style.display = 'none'; // Hide the tab
}

// proxy management
function manageProxy(settings) {
    // Implementation for managing proxies based on the provided settings
}

// settings management
function updateSettings(newSettings) {
    // Implementation for updating settings based on user preferences
}