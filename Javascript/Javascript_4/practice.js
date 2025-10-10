movies = {};
movies.title = "Game of Thrones";
movies.director =  "George RR. Martin";
movies.releaseYear = "2010";
movies.rating = 9.7;

console.log("Movies:", movies)

movies.getSummary = () =>{
    return `${movies.title}(${movies.releaseYear}), directed by ${movies.director}, rated ${movies.rating}`
}

console.log("Summary of Movies:", movies.getSummary());

movies.isWatched = true;
console.log("Updated Movies:", movies)

let newMovies = [
    movies,
    {title: "Into the badlands",
        director: "Sony",
        releaseYear: 2015,
        rating: 8.9
    },
    {
        title: "Breaking Bad",
        director: "Mr badru",
        releaseYear: 2018,
        rating: 6.8
    }
];

function displayRating(){
    let highRated = [];
    for (let movie of newMovies) {
        if (movie.rating > 8){
            highRated.push(movie.title);
        } 
        
    }
    return `Highest Rated Movies: ${highRated.join(', ')}`
}

console.log(displayRating())

// cartItem = {};

// cartItem.name = "groceries";
// cartItem.price = 1056;
// cartItem.quantity = 20;

// cartItem.getTotal = () =>{
//     return `N${(cartItem.price * cartItem.quantity).toFixed(2)}`;
// }

// cartItem.cart = [];

// cartItem.cart.push(
//     {name: "hypo",
//         price: 1200,
//         quantity: 13
//     }, 
//     {name: "jik",
//         price: 23,
//         quantity: 5
//     },
//     {name: "powder",
//         price: 45,
//         quantity: 89
//     }
// )

// console.log("Cart:", cartItem)
// console.log(cartItem.getTotal())



// const removedArray = cartItem.cart
// console.log(removedArray); 
// delete cartItem.cart;
// console.log(cartItem)

// let cart = removedArray;

// console.log("Cart:", cart);

// cart.push(cartItem);
// console.log(cart)

// function getCartTotal(cart){
//   let total = 0;
//   for (let c of cart) {
//     total += c.price * c.quantity;
    
//   }
//   return `Total Cost of all Items: N${total.toFixed(2)}`
// }

// console.log(getCartTotal(cart))

// member = {};
// member.name = "Tales of Aang";
// member.membershipType = "basic";
// member.borrowedBooks = [];

// console.log("BOOKS:", member)

// member.borrowBook = (book) => {
//     member.borrowedBooks.push(book);
// }

// member.borrowBook("korra")

// console.log(member.borrowedBooks);

// member.getBorrowedCount = ()=>{

//    return member.borrowedBooks.length;
// }
// console.log("Number of Borrowed Books:", member.getBorrowedCount());

// member.getMembershipInfo = () =>{
//     return `Membership Type: ${member.membershipType}`
// }

// console.log(member.getMembershipInfo())