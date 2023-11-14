const movies = [
          {
      id: 1,
      title: "The Shawshank Redemption",
      genre: "Drama",
      director: "Frank Darabont",
      releaseYear: 1994,
      rating: 9.3,
      votes: 2345890,
      img: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg"
      },
      {
      id: 2,
      title: "The Godfather",
      genre: "Crime, Drama",
      director: "Francis Ford Coppola",
      releaseYear: 1972,
      rating: 9.2,
      votes: 1620360,
      img: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg"

      },
      {
      id: 3,
      title: "The Godfather: Part II",
      genre: "Crime, Drama",
      director: "Francis Ford Coppola",
      releaseYear: 1974,
      rating: 9.0,
      votes: 1133175,
      img: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
      },
      {
      id: 4,
      title: "The Dark Knight",
      genre: "Action, Crime, Drama",
      director: "Christopher Nolan",
      releaseYear: 2008,
      rating: 9.0,
      votes: 2303232,
      img:"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
      },
      {
      id: 5,
      title: "12 Angry Men",
      genre: "Crime, Drama",
      director: "Sidney Lumet",
      releaseYear: 1957,
      rating: 9.0,
      votes: 689845,
      img:"https://m.media-amazon.com/images/S/pv-target-images/b92d2865829416e35e7102a3934a2ee745f3b903a95678710442d4299d86f39c.jpg"
      },
    ];


    const movieList = document.getElementById("movie-list");
    const movieForm = document.getElementById("movie-form");
    const searchBar =  document.getElementById("search-bar");

    
    function createMovieCard(movie) {
        const listItem = document.createElement("li");
        listItem.classList.add("movie-list-item");
        listItem.setAttribute("data-movie-id", movie.id);
        

        const titleElement = document.createElement("h3");
        titleElement.textContent = movie.title;
        listItem.appendChild(titleElement);

        const genreElement = document.createElement("p");
        const genreStrong = document.createElement("strong");
        genreStrong.textContent = "Genre:";
        genreElement.appendChild(genreStrong);
        genreElement.appendChild(document.createTextNode(` ${movie.genre}`));
        listItem.appendChild(genreElement);

        const directorElement = document.createElement("p");
        const directorStrong = document.createElement("strong");
        directorStrong.textContent = "director:";
        directorElement.appendChild(directorStrong);
        directorElement.appendChild(document.createTextNode(` ${movie.director}`));
        listItem.appendChild(directorElement);

        const releaseYearElement = document.createElement("p");
        const releaseYearStrong = document.createElement("strong");
        releaseYearStrong.textContent = "release Year:";
        releaseYearElement.appendChild(releaseYearStrong);
        releaseYearElement.appendChild(document.createTextNode(` ${movie.releaseYear}`));
        listItem.appendChild(releaseYearElement);

        const ratingElement = document.createElement("p");
        const ratingStrong = document.createElement("strong");
        ratingStrong.textContent = "Rating:";
        ratingElement.appendChild(ratingStrong);
        ratingElement.appendChild(document.createTextNode(` ${movie.rating}`));
        listItem.appendChild(ratingElement);

        const votesElement = document.createElement("p");
        const votesStrong = document.createElement("strong");
        votesStrong.textContent = "Votes:";
        votesElement.appendChild(votesStrong);
        votesElement.appendChild(document.createTextNode(` ${movie.votes}`));
        listItem.appendChild(votesElement);

        const imageElement = document.createElement("img");
        imageElement.src = movie.img;
        imageElement.alt = "Movie Poster";
        imageElement.style.maxWidth = "100%";
        listItem.appendChild(imageElement);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function () {
          listItem.remove(); 
        });
        listItem.appendChild(deleteButton);

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", function () {
          editMovie(movie);
          listItem.remove(); 
        });
        listItem.appendChild(editButton);


        

        return listItem;
    }


    function editMovie(movie) {
      const movieCard = createMovieCard(movie);
      const titleElement = document.createElement("input");
      titleElement.type = "text";
      titleElement.value = movie.title;
      const saveButton = document.createElement("button");
      saveButton.textContent = "Save";
    
      saveButton.addEventListener("click", function () {
        movie.title = titleElement.value;
       
       // displayMovies(movie.title);
      });
    
      const titleParagraph = movieCard.querySelector("h3");
      titleParagraph.textContent = ""; 
      titleParagraph.appendChild(titleElement);
      titleParagraph.appendChild(saveButton);
    
      
      movieList.appendChild(movieCard);
    }


    

    movies.forEach((movie) => {
      const movieCard = createMovieCard(movie);
      movieList.appendChild(movieCard);
    });

   
    movieForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const newMovie = {
        title: document.getElementById("title").value,
        genre: document.getElementById("genre").value,
        director: document.getElementById("director").value,
        releaseYear: parseInt(document.getElementById("releaseYear").value),
        rating: parseFloat(document.getElementById("rating").value),
        votes: parseInt(document.getElementById("votes").value),
        img: document.getElementById("img").value,
      };

      const newMovieCard = createMovieCard(newMovie);
      movieList.appendChild(newMovieCard);

      movieForm.reset();
    });




    function displayMovies(searchQuery) {
      movieList.innerText = ""; 
    
      movies.forEach((movie) => {
        if (searchQuery) {
          if (movie.title.toLowerCase().includes(searchQuery.toLowerCase())) {
            const movieCard = createMovieCard(movie);
            movieList.appendChild(movieCard);
          }
        } else {
          const movieCard = createMovieCard(movie);
          movieList.appendChild(movieCard);
        }
      });
    }
    
   
    displayMovies("");
    
    
    searchBar.addEventListener("input", function () {
      const searchQuery = searchBar.value;
      displayMovies(searchQuery);
    });