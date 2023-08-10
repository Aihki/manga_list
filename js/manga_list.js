import { mangaData, infoData } from "./manga_data.js";

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

function filterMangaData(searchTerm) {
    const filteredMangaData = mangaData.filter(manga =>
        manga.series.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const mangaListContainer = document.querySelector('.manga_list');
    mangaListContainer.innerHTML = '';

    addMangaData(filteredMangaData);
}

function populateInfoData(filteredData) {
    const dataSetContainers = document.querySelectorAll('.data-set');
    const descWarpedElements = document.querySelectorAll('.desc_warped');

    filteredData.forEach((data, index) => {
        const dataSet = dataSetContainers[index];
        const descWarped = descWarpedElements[index];

        dataSet.querySelector('.type').textContent = data.series;
        dataSet.querySelector('.value').textContent = `Genre: ${data.genre}, Score: ${data.score}, Format: ${data.format}, Status: ${data.status}, Release: ${data.releasing}, Volumes: ${data.Volumes}`;
        descWarped.textContent = data.description;
    });
}

const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    const filteredInfoData = infoData.filter(data => data.series.toLowerCase().includes(searchTerm));

    if (filteredInfoData.length > 0) {
        populateInfoData(filteredInfoData);
        document.querySelector('[data-test2] h1').textContent = filteredInfoData[0].series;
        document.querySelector('[data-test2] .description').textContent = filteredInfoData[0].description;
    } else {
        populateInfoData([]);
        document.querySelector('[data-test2] h1').textContent = '';
        document.querySelector('[data-test2] .description').textContent = '';
    }

    filterMangaData(searchTerm);
});

addMangaData(mangaData);
populateInfoData(infoData);
