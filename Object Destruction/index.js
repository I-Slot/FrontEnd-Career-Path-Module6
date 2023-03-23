const favoriteFilm = {
    title: "Top Gun",
    year: "1986",
    genre: "action",
    star: "Tom Cruise",
    director: "Tony Scott"
} 

const { title, year, genre, star, director } = favoriteFilm;


// const title = favoriteFilm.title;
// const year = favoriteFilm.year;
// const genre = favoriteFilm.genre;
// const star = favoriteFilm.star;
// const director = favoriteFilm.director;

console.log(
  `My favorite film is ${star} starring ${star}. It's an action film that was directed by ${director} and released in ${year}`
);

//My favorite film is Top Gun starring Tom Cruise. It's an action film that was directed by Tony Scott and released in 1986