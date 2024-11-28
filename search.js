document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('#search');
    const searchResults = document.querySelector('.search-results');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const sections = document.querySelectorAll('h3');

        searchResults.innerHTML = ''; // Clear previous results

        sections.forEach(section => {
            if (section.textContent.toLowerCase().includes(query)) {
                const result = document.createElement('div');
                result.textContent = section.textContent;
                searchResults.appendChild(result);
            }
        });

        if (searchResults.innerHTML === '') {
            searchResults.innerHTML = '<p>No results found.</p>';
        }
    });
});
