document.addEventListener("DOMContentLoaded", function() {
    const filterLinks = document.querySelectorAll('.dropdown-item');
    filterLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const filter = this.getAttribute('data-filter');
            filterRows(filter);
        });
    });

    function filterRows(filter) {
        const rows = document.querySelectorAll('.table tbody tr');
        rows.forEach(row => {
            const statusCell = row.querySelector('.status');
            if (filter === 'all') {
                row.style.display = '';
            } else if (filter === 'admitted' && statusCell.classList.contains('admitted')) {
                row.style.display = '';
            } else if (filter === 'not-admitted' && statusCell.classList.contains('not-admitted')) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    updateCounts();
    setupDropdownListeners();

    function updateCounts() {
        const allUsers = document.querySelectorAll('.table tbody tr');
        const admittedUsers = document.querySelectorAll('.status.admitted');
        const notAdmittedUsers = document.querySelectorAll('.status.not-admitted');

        document.getElementById('total-all-users').textContent = allUsers.length;
        document.querySelector('.total-admitted-users').textContent = admittedUsers.length;
        document.querySelector('.total-not-admitted-users').textContent = notAdmittedUsers.length;
    }

    function setupDropdownListeners() {
        const filterLinks = document.querySelectorAll('.dropdown-item');
        filterLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                const filter = this.getAttribute('data-filter');
                filterRows(filter);
                updateHeaderClass(filter);
            });
        });
    }

    function filterRows(filter) {
        const rows = document.querySelectorAll('.table tbody tr');
        rows.forEach(row => {
            const statusCell = row.querySelector('.status');
            if (filter === 'all') {
                row.style.display = '';
            } else if (filter === 'admitted' && statusCell.classList.contains('admitted')) {
                row.style.display = '';
            } else if (filter === 'not-admitted' && statusCell.classList.contains('not-admitted')) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }

    function updateHeaderClass(filter) {
        const allHeader = document.querySelector('.all');
        const admittedHeader = document.querySelector('.allowed');
        const notAdmittedHeader = document.querySelector('.not-allowed');

        [allHeader, admittedHeader, notAdmittedHeader].forEach(header => {
            header.classList.remove('selected-users');
        });

        switch (filter) {
            case 'all':
                allHeader.classList.add('selected-users');
                break;
            case 'admitted':
                admittedHeader.classList.add('selected-users');
                break;
            case 'not-admitted':
                notAdmittedHeader.classList.add('selected-users');
                break;
        }
    }
});


