// Sample data (replace with your own)
const pages = [
    { title: "Home", url: "https://example.com/home", description: "Welcome to our homepage." },
    { title: "About Us", url: "https://example.com/about", description: "Learn more about our company." },
    { title: "Contact", url: "https://example.com/contact", description: "Get in touch with us." },
    { title: "Services", url: "https://example.com/services", description: "Explore our offered services." }
];

const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

function displayResults(results) {
    // Clear previous results
    searchResults.innerHTML = '';

    if (results.length === 0) {
        searchResults.innerHTML = '<li>No results found.</li>';
    } else {
        results.forEach(result => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = result.url;
            a.textContent = result.title;
            const p = document.createElement('p');
            p.textContent = result.description;
            li.appendChild(a);
            li.appendChild(p);
            searchResults.appendChild(li);
        });
    }
}

function performSearch(query) {
    const searchResults = pages.filter(page => {
        return page.title.toLowerCase().includes(query.toLowerCase());
    });
    displayResults(searchResults);
}

searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim();
    performSearch(query);
});
