import { mangaData, infoData } from "./manga_data.js";


const mangaInfo = infoData[1]
const content = document.querySelector('[data-test2]')
content.querySelector('h1').textContent = mangaInfo.series;
content.querySelector('.description').textContent = mangaInfo.description;


const info = document.querySelector('[data-test3] .info');
const dataSet = info.querySelectorAll('.data-set')
dataSet[0].querySelector('.type').textContent = 'Format';
dataSet[0].querySelector('.value').textContent = mangaInfo.format;

dataSet[1].querySelector('.type').textContent = 'Status';
dataSet[1].querySelector('.value').textContent = mangaInfo.status;

dataSet[2].querySelector('.type').textContent = 'Releasing date';
dataSet[2].querySelector('.value').textContent = mangaInfo.releasing;

dataSet[3].querySelector('.type').textContent = 'Score';
dataSet[3].querySelector('.value').textContent = mangaInfo.score;

dataSet[4].querySelector('.type').textContent = 'Volumes';
dataSet[4].querySelector('.value').textContent = mangaInfo.volumes;


const phoneDesc = document.querySelector('.desc_warped');
phoneDesc.textContent = mangaInfo.description;



function addMangaData(mangaData){
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
    const filterMangaData = mangaData.filter(manga =>
        manga.series.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const mangaListContainer = document.querySelector('.manga_list');
    mangaListContainer.innerHTML = '';

    addMangaData(filterMangaData);


}


const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function(){
    filterMangaData(this.value);
});

addMangaData(mangaData)



