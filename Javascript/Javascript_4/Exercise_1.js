//movie collection tracker
movie = {
    title: "My Oxford Year",
    director: "Lain Morris",
    releaseYear: 2025,
    rating: 5.9,


    //method to get summary();
    getSummary(){
        return `${this.title}(${this.releaseYear}), directed by ${this.director}, rated ${this.rating}`
    },
};
console.log("Movie Summary:", movie.getSummary())

movie.isWatched = true;
console.log(`Watched ${movie.title}:`, movie.isWatched);

let movies = [
    movie, 
    {
        title: "Ruth & Boaz",
        director: "Alanna Brown",
        releaseYear: 2025,
        rating: 9.0,

        getSummary(){
            return `${this.title}(${this.releaseYear}), directed by ${this.director}, rated ${this.rating}`
        }
    },
    {
        title: "French Lover",
        director: "Nina Rives",
        releaseYear: 2025,
        rating: 8.5,
        getSummary(){
          return `${this.title}(${this.releaseYear}), directed by ${this.director}, rated ${this.rating}`
        }
        
    }
];

//function to display movies with rating greater than or equal 8.0

function displayTopMovies(movies){
    console.log("Top Rated Netflix Movies: ")
    
    for (movie of movies){
        if (movie.rating >= 8){
            console.log(movie.getSummary());
        }
    }
}

displayTopMovies(movies);

