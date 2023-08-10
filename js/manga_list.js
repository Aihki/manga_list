import { mangaData, infoData } from "./manga_data.js";


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
addMangaData(mangaData)

const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function(){
    filterMangaData(this.value);
});



