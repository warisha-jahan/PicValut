document.getElementById('search-input').addEventListener('input', function() {
    let filter = this.value.toLowerCase();
    let galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(function(item) {
        let title = item.getAttribute('data-title').toLowerCase();
        if (title.includes(filter)) {
            item.style.display = 'block';
        } 
        else {
            item.style.display = 'none';
            
        }
    });
});


