document.addEventListener('DOMContentLoaded', function() {
    const nameSorter = document.getElementById('name-sorting');
    const dateSorter = document.getElementById('date-sorting');
    let ascendingName = true;
    let ascendingDate = true;

    nameSorter.addEventListener('click', function() {
        const table = document.querySelector('.table');
        const rows = Array.from(table.querySelectorAll('tbody tr'));

        rows.sort((rowA, rowB) => {
            const nameA = rowA.querySelector('.name').textContent.toLowerCase();
            const nameB = rowB.querySelector('.name').textContent.toLowerCase();

            if (nameA < nameB) return ascendingName ? -1 : 1;
            if (nameA > nameB) return ascendingName ? 1 : -1;
            return 0;
        });

        rows.forEach(row => table.querySelector('tbody').appendChild(row));
        ascendingName = !ascendingName;
    });

    dateSorter.addEventListener('click', function() {
        const table = document.querySelector('.table');
        const rows = Array.from(table.querySelectorAll('tbody tr'));

        rows.sort((rowA, rowB) => {
            const dateA = new Date(rowA.querySelector('.date').textContent.replace(/(\d{2}) (\w+) (\d{4}), (\d{2}:\d{2})/, '$2 $1, $3 $4'));
            const dateB = new Date(rowB.querySelector('.date').textContent.replace(/(\d{2}) (\w+) (\d{4}), (\d{2}:\d{2})/, '$2 $1, $3 $4'));

            return ascendingDate ? dateA - dateB : dateB - dateA;
        });

        rows.forEach(row => table.querySelector('tbody').appendChild(row));
        ascendingDate = !ascendingDate;
    });
});
