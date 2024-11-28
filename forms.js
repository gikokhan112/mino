document.getElementById('submit-article-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    const article = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        content: document.getElementById('content').value,
    };

    console.log('Article submitted:', article);
    alert('Article submitted successfully!');
});

document.getElementById('upload-apk-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    const formData = new FormData(this); // Collect form data

    console.log('APK file uploaded:', formData.get('file'));
    alert('APK uploaded successfully!');
});
