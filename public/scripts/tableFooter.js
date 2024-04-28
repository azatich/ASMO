document.addEventListener('DOMContentLoaded', (event) => {
    const numberOfRowsPerPage = 10; // Adjust the number of rows per page
    const table = document.querySelector('.table'); // Select the table
    const totalRows = table.querySelectorAll('tbody tr').length; // Count all rows
    const pageNumberElement = document.querySelector('.page-number'); // Page number span
    const numOfRowsElement = document.querySelector('.numOfrows'); // Number of rows span
    const pageElement = document.querySelector('.page'); // Current page span
  
    let currentPage = 1;
    let totalNumberOfPages = Math.ceil(totalRows / numberOfRowsPerPage);
  
    function updateFooter() {
      let startNumber = (currentPage - 1) * numberOfRowsPerPage + 1;
      let endNumber = startNumber + numberOfRowsPerPage - 1;
      endNumber = endNumber > totalRows ? totalRows : endNumber;
  
      pageNumberElement.textContent = `${startNumber}-${endNumber} of ${totalRows}`;
      numOfRowsElement.textContent = `Number of rows: ${numberOfRowsPerPage}`;
      pageElement.textContent = `${currentPage}/${totalNumberOfPages}`;
    }
  
    updateFooter();

    document.addEventListener('DOMContentLoaded', () => {
        const rowsPerPage = 10;
        const rows = document.querySelector('.table tbody').getElementsByTagName('tr');
        const rowsCount = rows.length;
        let currentPage = 1;
        let numOfPages = Math.ceil(rowsCount / rowsPerPage);
      
        // Function to display rows for a specific page
        function displayPage(page) {
          for (let i = 0; i < rowsCount; i++) {
            rows[i].style.display = 'none'; // Hide all rows
            if (i >= (page - 1) * rowsPerPage && i < page * rowsPerPage) {
              rows[i].style.display = ''; // Show the filtered rows
            }
          }
      
          // Update the text that shows the range of displayed rows
          document.querySelector('.page-number').textContent = 
            `${(page - 1) * rowsPerPage + 1}-${Math.min(page * rowsPerPage, rowsCount)} of ${rowsCount}`;
        }
      
        // Function to set up the event listeners for pagination buttons
        function setUpPagination() {
          document.getElementById('prev-page').addEventListener('click', () => {
            if (currentPage > 1) {
              currentPage--;
              displayPage(currentPage);
            }
          });
      
          document.getElementById('next-page').addEventListener('click', () => {
            if (currentPage < numOfPages) {
              currentPage++;
              displayPage(currentPage);
            }
          });
        }
      
        displayPage(currentPage); // Display the first page
        setUpPagination(); // Set up the pagination functionality
      });      
});

document.addEventListener('DOMContentLoaded', () => {
    const rowsPerPage = 10;
    const rows = document.querySelector('.table tbody').getElementsByTagName('tr');
    const rowsCount = rows.length;
    let currentPage = 1;
    let numOfPages = Math.ceil(rowsCount / rowsPerPage);
  
    // Function to display rows for a specific page
    function displayPage(page) {
      for (let i = 0; i < rowsCount; i++) {
        rows[i].style.display = 'none'; // Hide all rows
        if (i >= (page - 1) * rowsPerPage && i < page * rowsPerPage) {
          rows[i].style.display = ''; // Show the filtered rows
        }
      }
  
      // Update the text that shows the range of displayed rows
      document.querySelector('.page-number').textContent = 
        `${(page - 1) * rowsPerPage + 1}-${Math.min(page * rowsPerPage, rowsCount)} of ${rowsCount}`;
    }
  
    // Function to set up the event listeners for pagination buttons
    function setUpPagination() {
      document.getElementById('prev-page').addEventListener('click', () => {
        if (currentPage > 1) {
          currentPage--;
          displayPage(currentPage);
        }
      });
  
      document.getElementById('next-page').addEventListener('click', () => {
        if (currentPage < numOfPages) {
          currentPage++;
          displayPage(currentPage);
        }
      });
    }
  
    displayPage(currentPage); // Display the first page
    setUpPagination(); // Set up the pagination functionality
  });
  