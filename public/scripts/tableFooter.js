document.addEventListener('DOMContentLoaded', (event) => {
    const numberOfRowsPerPage = 10;
    const table = document.querySelector('.table'); 
    const totalRows = table.querySelectorAll('tbody tr').length; 
    const pageNumberElement = document.querySelector('.page-number');
    const numOfRowsElement = document.querySelector('.numOfrows'); 
    const pageElement = document.querySelector('.page'); 
  
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
      
        function displayPage(page) {
          for (let i = 0; i < rowsCount; i++) {
            rows[i].style.display = 'none'; 
            if (i >= (page - 1) * rowsPerPage && i < page * rowsPerPage) {
              rows[i].style.display = ''; 
            }
          }
      
          document.querySelector('.page-number').textContent = 
            `${(page - 1) * rowsPerPage + 1}-${Math.min(page * rowsPerPage, rowsCount)} of ${rowsCount}`;
        }
      
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
      
        displayPage(currentPage);
        setUpPagination(); 
      });      
});
  