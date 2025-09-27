// Dynamically load nav and footer into the page
function includeHTML(selector, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.querySelector(selector).innerHTML = data;
        });
}

document.addEventListener("DOMContentLoaded", function() {
    includeHTML("#nav-placeholder", "assets/nav.html");
    includeHTML("#footer-placeholder", "assets/footer.html");
});
