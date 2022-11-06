const URL = "https://www.omdbapi.com/?i=tt1285016&apikey=";

export const getMoviesByName = async (movieName) => {
  const result = await fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=`);
  const movie = await result.json();
  console.log(movie);
};
getMoviesByName("X-men");
getMoviesByName("wolverine");

// export default getMoviesByName;

export const getMoviesById = async (movieId) => {
  const result = await fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=`);
  const movie = await result.json();
  console.log(movie);
};

getMoviesById("tt0120903");
