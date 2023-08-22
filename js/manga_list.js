import { mangaData } from './manga_data.js';

function populateMangaDetails(index) {
    console.log('populateMangaDetails called with index:', index);
    const mangaTitle = document.querySelector('.content h1');
    const mangaDescription = document.querySelector('.content .description');
    const mangaDescriptionMobile = document.querySelector('.warped .desc_warped')
    const mangaType = document.querySelectorAll('.data-set .type');
    const mangaValue = document.querySelectorAll('.data-set .value');
    const mangaTags = document.querySelector('.tags');
    const mangaVolumes = document.querySelector('.list_content .manga');

    mangaTitle.textContent = '';
    mangaDescription.textContent = '';
    mangaDescriptionMobile.textContent = '';
    mangaTags.textContent = '';
    mangaVolumes.textContent = '';



    mangaTitle.textContent = mangaData[index].series;
    mangaDescription.textContent = mangaData[index].description;

    mangaDescriptionMobile.textContent = mangaData[index].description;

    mangaType[0].textContent = 'Score:';
    mangaValue[0].textContent = mangaData[index].score;

    mangaType[1].textContent = 'Format:';
    mangaValue[1].textContent = mangaData[index].format;

    mangaType[2].textContent = 'Status:';
    mangaValue[2].textContent = mangaData[index].status;

    mangaType[3].textContent = 'Releasing:';
    mangaValue[3].textContent = mangaData[index].releasing;

    mangaData[index].genre.forEach(genre => {
        const genreTag = document.createElement('div');
        genreTag.classList.add('tag');
        genreTag.textContent = genre;
        mangaTags.appendChild(genreTag);
    });

    mangaData[index].volumesInfo.forEach(volumeInfo => {
        const mangaVolume = document.createElement('div');
        mangaVolume.classList.add('manga', 'row');
        mangaVolume.innerHTML = `
            <div class="volume">${volumeInfo.volume}</div>
            <div class="owned">${volumeInfo.owned ? 'Yes' : 'No'}</div>
            <div class="readed">${volumeInfo.readed ? 'Yes' : 'No'}</div>
        `;
        mangaVolumes.appendChild(mangaVolume);
    });
}



document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('input', () => {
        const searchInputValue = searchInput.value.trim();

        if (searchInputValue === '') {
            // Clear details or hide them when search input is empty
            // For example: clearDetails();
        } else {
            const index = mangaData.findIndex(manga => manga.series.toLowerCase() === searchInputValue.toLowerCase());
            if (index !== -1) {
                populateMangaDetails(index);
            } else {
                // Clear details or show a message if manga not found
                // For example: populateMangaDetails(-1);

            }
        }
    });
});


