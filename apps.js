document.addEventListener('DOMContentLoaded', function () {
    const appsContainer = document.getElementById('apps-container');

    fetch('data.json')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            if (data.length === 0) {
                appsContainer.innerHTML = '<p>No apps found.</p>';
                return;
            }

            // Render apps
            appsContainer.innerHTML = data
                .map(
                    (app) => `
                    <div class="app-card">
                        <h3>${app.name}</h3>
                        <p>${app.description}</p>
                        <a href="${app.downloadLink}" target="_blank">Download</a>
                    </div>
                `
                )
                .join('');
        })
        .catch((error) => {
            console.error('Failed to fetch apps:', error);
            appsContainer.innerHTML = '<p>Failed to load apps. Please try again later.</p>';
        });
});
