// SPA loader for PathFinder
function loadPage(url, pushState = true) {
    const content = document.getElementById('content');
    content.classList.add('hide');
    fetch(url)
        .then(response => response.text())
        .then(html => {
            // Extract <main> content from fetched HTML
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;
            const main = tempDiv.querySelector('main');
            if (main) {
                setTimeout(() => {
                    content.innerHTML = main.innerHTML;
                    content.classList.remove('hide');
                }, 400); // Match transition duration
            } else {
                content.innerHTML = '<div class="p-8 text-red-600">Page content not found.</div>';
                content.classList.remove('hide');
            }
            if (pushState) {
                history.pushState({url: url}, '', url);
            }
        });
}

// Intercept nav links
function setupNavLinks() {
    document.addEventListener('click', function(e) {
        const target = e.target.closest('a');
        if (target && target.getAttribute('href') && !target.getAttribute('href').startsWith('http') && !target.hasAttribute('download')) {
            const href = target.getAttribute('href');
            if (["index.html","about.html","services.html","mentors.html","contact.html"].includes(href)) {
                e.preventDefault();
                loadPage(href);
            }
        }
    });
}

// Handle browser navigation
window.addEventListener('popstate', function(e) {
    if (e.state && e.state.url) {
        loadPage(e.state.url, false);
    }
});

// Initial load
window.addEventListener('DOMContentLoaded', function() {
    setupNavLinks();
    loadPage('index.html', false);
});
