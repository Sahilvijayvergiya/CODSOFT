(function() {
    let debounceTimer;
    
    function handleScroll() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', function() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(handleScroll, 100); // Adjust debounce time as needed
    });
})();