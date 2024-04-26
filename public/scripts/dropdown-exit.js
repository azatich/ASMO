document.querySelector('.avatar img').addEventListener('click', function() {
    var dropdown = document.querySelector('.dropdown-menu');
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
});

window.onclick = function(event) {
    if (!event.target.matches('.avatar img')) {
        var dropdowns = document.getElementsByClassName("dropdown-menu");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
};
