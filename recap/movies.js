// let movies = [
//     {
//     id: 1,
//     title: "The Shawshank Redemption",
//     genre: "Drama",
//     director: "Frank Darabont",
//     releaseYear: 1994,
//     rating: 9.3,
//     votes: 2345890,
//     },
//     {
//     id: 2,
//     title: "The Godfather",
//     genre: "Crime, Drama",
//     director: "Francis Ford Coppola",
//     releaseYear: 1972,
//     rating: 9.2,
//     votes: 1620360,
//     },
//     {
//     id: 3,
//     title: "The Godfather: Part II",
//     genre: "Crime, Drama",
//     director: "Francis Ford Coppola",
//     releaseYear: 1974,
//     rating: 9.0,
//     votes: 1133175,
//     },
//     {
//     id: 4,
//     title: "The Dark Knight",
//     genre: "Action, Crime, Drama",
//     director: "Christopher Nolan",
//     releaseYear: 2008,
//     rating: 9.0,
//     votes: 2303232,
//     },
//     {
//     id: 5,
//     title: "12 Angry Men",
//     genre: "Crime, Drama",
//     director: "Sidney Lumet",
//     releaseYear: 1957,
//     rating: 9.0,
//     votes: 689845,
//     }
// ]


const movieDatabase = {
    movies: [],
  
    addMovie: function (title) {
      const newMovie = {
        title: title,
        ratings: [],
        averageRating: 0,
      };
  
      this.movies.push(newMovie);
    },

    removeMovie: function (title) {
        const indexToRemove = this.movies.findIndex((movie) => movie.title === title);
        if (indexToRemove !== -1) {
          this.movies.splice(indexToRemove, 1);
        }
      },

      addRating: function (title, rating) {
        const movie = this.movies.find((movie) => movie.title === title);
        if (movie) {
          movie.ratings.push(rating);
          const totalRatings = movie.ratings.reduce((sum, current) => sum + current, 0);
          movie.averageRating = totalRatings / movie.ratings.length;
        }
      },
    
      removeRating: function (title, rating) {
        const movie = this.movies.find((movie) => movie.title === title);
        if (movie) {
          const indexToRemove = movie.ratings.indexOf(rating);
          if (indexToRemove !== -1) {
            movie.ratings.splice(indexToRemove, 1);
            if (movie.ratings.length > 0) {
              const totalRatings = movie.ratings.reduce((sum, current) => sum + current, 0);
              movie.averageRating = totalRatings / movie.ratings.length;
            } else {
              movie.averageRating = 0;
            }
          }
        }
      },

      searchMovie: function (searchString) {
        const searchLower = searchString.toLowerCase();
        return this.movies.filter((movie) =>
          movie.title.toLowerCase().includes(searchLower)
        );
      },
  };


movieDatabase.addMovie("Movie 1");
movieDatabase.addMovie("Movie 2");
movieDatabase.addMovie("Movie 1");

movieDatabase.addRating("Movie 1",8)


//movieDatabase.removeMovie("Movie 1");

// console.log("Movies after removal:");
// console.log(movieDatabase.movies);

const search = movieDatabase.searchMovie("Movie 1");
console.log(search);