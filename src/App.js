import { useState, useEffect } from "react";
import MovieDetails from "./components/movieDetails";
import Greeting from "./components/Greeting";
import Movies from "./components/Movies";
import Clock from "./components/Clock";
import { getMoviesByName } from "./utils";
import "./App.css";

const Message = (props) => (
  <div>
    {props.msg}, {props.name}
  </div>
);

function App() {
  //searchTerm
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("batman");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getMovies() {
    setIsLoading(true);
    try {
      const res = await getMoviesByName(searchTerm);
      const { Search } = await res.json();
      console.log(Search);
      setMovies(Search);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  }

  const handleSubmit = () => {
    if (searchTerm !== "") getMovies();
  };

  useEffect(() => {
    getMovies();
    document.querySelector("input").addEventListener("click", () => {});
    return () => {};
  }, [searchTerm]);

  console.log("errrorrrr", error);

  return (
    <div className="App">
      <Clock date={new Date().toLocaleTimeString()} />
      <Greeting />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Sorry something went wrong, {error}</h1>
      ) : (
        <Movies movies={movies} setSearchTerm={setSearchTerm} />
      )}

      <MovieDetails />
      <Message msg="Hello John!" />
      <Message msg="Hello Smith!" />
    </div>
  );
}

// const PropsTypes = {
//   msg(props, propName, componentName) {
//     if (typeof props[props.propName] !== "string") {
//       console.log(typeof props[props.propName]);
//       return new Error(
//         `Hey ${propName} must be a string you passed ${typeof props.msg} in component ${componentName}`
//       );
//     }
//   },
//   name(props, propName, componentName) {},
// };

// Message.propTypes = {
//   msg: PropsTypes.msg,
//   name: PropsTypes.name,
// };

export default App;
