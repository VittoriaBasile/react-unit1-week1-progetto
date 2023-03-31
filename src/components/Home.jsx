import { Component } from "react";
import MyHeader from "./MyHeader";
import Movie from "./Movie";

class Home extends Component {
  state = {
    HarryPotter: [],
    AttackOnTitan: [],
    Avengers: [],
  };
  request = async (endpoint, stato) => {
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      this.setState({ [stato]: data.Search });
    } catch (error) {
      console.error(error);
    }
  };

  componentDidMount() {
    this.request("http://www.omdbapi.com/?apikey=e5af41fb&s=harry%20potter", "HarryPotter");
    this.request("https://www.omdbapi.com/?apikey=e5af41fb&s=attack%20on%20titan", "AttackOnTitan");
    this.request("https://www.omdbapi.com/?apikey=e5af41fb&s=avengers", "Avengers");
  }
  render() {
    return (
      <div className="container-fluid">
        <MyHeader />;
        <div className="movie-gallery mx-md-5 mb-5 mt-4">
          <h5 className="text-light mt-2 mb-2">Harry Potter</h5>
          <div id="harry-potter">
            <div className="movie-row">
              <div className="movieList row g-1 flex-nowrap py-2">
                {this.state.HarryPotter.map((movie) => (
                  <Movie key={movie.imdbID} src={movie.Poster} alt={movie.Title} />
                ))}
              </div>
            </div>
          </div>
          <h5 className="text-light mt-2 mb-2">Attack On Titan</h5>
          <div id="AttackOnTitan">
            <div className="movie-row">
              <div className="movieList row g-1 flex-nowrap py-2">
                {this.state.AttackOnTitan.map((movie) => (
                  <Movie key={movie.imdbID} src={movie.Poster} alt={movie.Title} />
                ))}
              </div>
            </div>
          </div>
          <h5 className="text-light mt-2 mb-2">Avengers</h5>
          <div id="Avengers">
            <div className="movie-row">
              <div className="movieList row g-1 flex-nowrap py-2">
                {this.state.Avengers.map((movie) => (
                  <Movie key={movie.imdbID} src={movie.Poster} alt={movie.Title} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
