document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('#showAllImages');
    const popupContainer = document.getElementById('popupContainer');
    const closeBtn = document.getElementById('closePopup');

    button.addEventListener('click', function () {
        popupContainer.style.display = 'block';
        const photomaterialsContainer = document.querySelector('.photos');
        const images = photomaterialsContainer.querySelectorAll('img');
        const popupContent = document.querySelector('.popup-content');

        images.forEach(image => {
            const img = document.createElement('img');
            img.src = image.src;
            img.alt = image.alt;
            popupContent.appendChild(img);
        });
    });

    closeBtn.addEventListener('click', function () {
        popupContainer.style.display = 'none'; 
        const popupContent = document.querySelector('.popup-content');
        popupContent.innerHTML = '';
    });
});
