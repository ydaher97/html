const searchButton = document.getElementById('searchButton');
const movienameInput = document.getElementById('movienameInput');
const movieCard = document.getElementById('movieCard');

const movieApi = 'http://www.omdbapi.com/?t='
const apiKey = 'apikey=eff93b20'

async function fetchMovie(){
    const moviename = movienameInput.value.trim();
    console.log(moviename)
    if (moviename === '') {
        alert('Please enter a movie name');
        return;
    }

    try {
        const response = await fetch(`${movieApi}${moviename}&${apiKey}`);
        if (!response.ok) {
            throw new Error('Movie not found');
        }

        const movieData = await response.json();
        
         displaymovieCard(movieData);
    } catch (error) {
        alert('Movie not found');
    }
}


function displaymovieCard(movieData) {
    const { Poster, Title, Genre, Year, Plot , Director,Actors} = movieData;
    console.log(Title)

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('movie-info');

    const avatarImage = document.createElement('img');
    avatarImage.src = Poster;
    avatarImage.alt = 'movie Avatar';
    // avatarImage.addEventListener('click', () => {
    //     window.open(html_url, '_blank');
    // });

    const movienameHeader = document.createElement('h2');
    movienameHeader.textContent = Title;

    const genreParagraph = document.createElement('p');
    genreParagraph.textContent = `genre: ${Genre}`;

    const yearPublished = document.createElement('p');
    yearPublished.textContent = `year: ${Year}`;

    const moviePlot = document.createElement('p');
    moviePlot.textContent = `movie plot: ${Plot}`;

    const movieDirector = document.createElement('p');
    movieDirector.textContent = `movie director: ${Director}`;
    
    const movieActors = document.createElement('p');
    movieActors.textContent = `movieActors: ${Actors}`;
    // actors.array.forEach(element => {
        
    // });



    cardContainer.appendChild(avatarImage);
    cardContainer.appendChild(movienameHeader);
    cardContainer.appendChild(genreParagraph);
    cardContainer.appendChild(yearPublished);
    cardContainer.appendChild(moviePlot);
    cardContainer.appendChild(movieDirector);
    cardContainer.appendChild(movieActors);


    movieCard.innerHTML = '';
    movieCard.appendChild(cardContainer);

    movienameInput.value = '';
    movienameInput.focus();
}

searchButton.addEventListener('click', fetchMovie);
movienameInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        fetchMovie();
    }
});

window.onload = () => {
    movienameInput.focus();
};
