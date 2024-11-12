
    document.getElementById('searchIcon').addEventListener('click', function(event) {
        event.stopPropagation();
        const searchBar = document.getElementById('searchBar');
        searchBar.classList.toggle('show');
    });


    document.addEventListener('click', function(event) {
        const searchBar = document.getElementById('searchBar');
        const searchIcon = document.getElementById('searchIcon');
        if (!searchBar.contains(event.target) && !searchIcon.contains(event.target)) {
            searchBar.classList.remove('show'); 
        }
    });

    function performSearch(event) {
        event.preventDefault();
        const query = document.getElementById('searchInput').value;
        if (query) {
            alert('Searching for: ' + query);
        }
    }

    