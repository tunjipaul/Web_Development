// MovieRatingSystem


let movies = [];

let ratings = [];

function addMovie(movie, rating){

 movies.push(movie);
 ratings.push(rating);
 console.log("Added movies with rating:", movie, ':', rating)

 console.log("Movies:", movies)
 console.log("Ratings:", ratings)
}

addMovie('KotoAye', 9.4);
addMovie('GOT', 9.9)



function getAverageRating(){
    let totalRating = 0;
    for (let rating of ratings){
        totalRating += rating;
    }
    console.log(`TotalRating: ${totalRating}`);
    let averageRating = (totalRating/ratings.length)
    console.log(`Average Rating: ${averageRating}`);
}

function getTopMovie(){
    let highestRated = Math.max(...ratings);
    console.log(highestRated);
}


function getSummary(){
    console.log("Movie Summary:")
    for (i = 0; i < movies.length; i++){
        console.log(movies[i], "-", ratings[i]);
    }
}

getSummary()
