import { mangaData, infoData } from "./manga_data.js";


const infoDataContainer = document.querySelector('.content[data-test3]')
infoDataContainer.style.display = 'none';

const mangaListContainer = document.querySelector('.manga_list')
mangaListContainer.style.display = 'none';

function addMangaData(mangaData) {
    const mangaListContainer = document.querySelector('.manga_list');


    mangaData.forEach(manga => {
        const row = document.createElement('div');
        row.className = 'row';

        const volumeCell = document.createElement('div');
        volumeCell.className = 'volume';
        volumeCell.textContent = manga.volume;
        row.appendChild(volumeCell);

        const ownedCell = document.createElement('div');
        ownedCell.className = 'owned';
        ownedCell.textContent = manga.owned ? 'Yes' : 'No'
        row.appendChild(ownedCell);

        const readedCell = document.createElement('div');
        readedCell.className = 'readed';
        readedCell.textContent = manga.readed ? 'Yes' : 'No'
        row.appendChild(readedCell);

        mangaListContainer.appendChild(row);

    });
};
function filterMangaData(searchTerm, filteredMangaData) {
    const mangaListContainer = document.querySelector('.manga_list');
    mangaListContainer.innerHTML = '';

    addMangaData(filteredMangaData);

    if (filteredMangaData.length > 0) {
        mangaListContainer.style.display = 'block';
    } else {
        mangaListContainer.style.display = 'none';
    }
}

function populateInfoData(filteredData) {
    const infoDataContainer = document.querySelector('.content[data-test3]');
    const dataSetContainers = document.querySelectorAll('.data-set');
    const descWarpedElements = document.querySelectorAll('.desc_warped');

    filteredData.forEach((data, index) => {
        const dataSet = dataSetContainers[index];
        const descWarped = descWarpedElements[index];

        dataSet.querySelector('.type').textContent = data.series;
        dataSet.querySelector('.value').textContent = `Genre: ${data.genre}, Score: ${data.score}, Format: ${data.format}, Status: ${data.status}, Release: ${data.releasing}, Volumes: ${data.volumes}`;
        descWarped.textContent = data.description;
    });

    if (filteredData.length > 0) {
        infoDataContainer.style.display = 'block';
        document.querySelector('[data-test2] h1').textContent = filteredData[0].series;
        document.querySelector('[data-test2] .description').textContent = filteredData[0].description;
    } else {
        infoDataContainer.style.display = 'none';
        document.querySelector('[data-test2] h1').textContent = '';
        document.querySelector('[data-test2] .description').textContent = '';
    }
}

searchInput.addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();

    if (searchTerm.length >= 3) {
        const filteredInfoData = infoData.filter(data =>
            data.series.toLowerCase().includes(searchTerm)
        );

        const filteredMangaData = mangaData.filter(manga =>
            manga.series.toLowerCase().includes(searchTerm)
        );

        populateInfoData(filteredInfoData);
        filterMangaData(searchTerm, filteredMangaData);
    } else {
        populateInfoData([]);
        filterMangaData('');
    }
});


addMangaData(mangaData);

