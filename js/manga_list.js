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
}

function filterMangaData(searchTerm) {
    const filterMangaData = mangaData.filter(manga =>
        manga.series.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const mangaListContainer = document.querySelector('.manga_list');
    mangaListContainer.innerHTML = '';

    addMangaData(filterMangaData);
}

const mangaData = [ 
    {series:'Spy x Family', volume: 'Volume 1', owned: true, readed: false},
    {series:'Spy x Family', volume: 'Volume 2', owned: true, readed: false},
    {series:'Spy x Family', volume: 'Volume 3', owned: true, readed: false},
    {series:'Spy x Family', volume: 'Volume 4', owned: true, readed: false},
    {series:'Spy x Family', volume: 'Volume 5', owned: true, readed: false},
    {series:'Spy x Family', volume: 'Volume 6', owned: true, readed: false},
    {series:'Spy x Family', volume: 'Volume 7', owned: true, readed: false},
    {series:'Spy x Family', volume: 'Volume 8', owned: true, readed: false},
    {series:'Rosario vampire', volume: 'Volume 1', owned: true, readed: true},
    {series:'Rosario vampire', volume: 'Volume 2', owned: true, readed: true},
    {series:'Rosario vampire', volume: 'Volume 3', owned: true, readed: true},
    {series:'Rosario vampire', volume: 'Volume 4', owned: true, readed: true},
    {series:'Rosario vampire', volume: 'Volume 5', owned: true, readed: true},
    {series:'Rosario vampire', volume: 'Volume 6', owned: true, readed: true},
    {series:'Rosario vampire', volume: 'Volume 7', owned: true, readed: true},
    {series:'Rosario vampire', volume: 'Volume 8', owned: true, readed: true},
    {series:'Rosario vampire', volume: 'Volume 9', owned: true, readed: true},
    {series:'Rosario vampire', volume: 'Volume 10', owned: true, readed: true}  
];

addMangaData(mangaData)

const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function(){
    filterMangaData(this.value);
});