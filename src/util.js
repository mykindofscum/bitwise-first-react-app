const URL = "https://www.omdbapi.com/?i=tt1285016&apikey=d3e60b9";

const getMoviesByName = async (movieName) => {
  const result = await fetch(
    `https://www.omdbapi.com/?t=${movieName}&apikey=d3e60b9`
  );
  const movie = await result.json();
  console.log(movie);
};

getMoviesByName("spiderman");
getMoviesByName("wolverine");

const getMoviesById = async (movieId) => {
  const result = await fetch(
    `https://www.omdbapi.com/?i=${movieId}&apikey=d3e60b9`
  );
  const movie = await result.json();
  console.log(movie);
};

getMoviesById("");
