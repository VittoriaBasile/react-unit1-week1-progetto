import { Component } from "react";
import MyHeader from "./MyHeader";
import Movie from "./Movie";
import image from "../assets/media/media1.jpg";

class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <MyHeader />;
        <div className="movie-gallery mx-md-5 mb-5 mt-4">
          <h5 className="text-light mt-2 mb-2">Trending now</h5>
          <div id="trending-now">
            <div className="movie-row">
              <div className="movieList row g-1 flex-nowrap py-2">
                <Movie src={image} alt="movie" />
                <Movie src={image} alt="movie" />
                <Movie src={image} alt="movie" />
                <Movie src={image} alt="movie" />
                <Movie src={image} alt="movie" />
                <Movie src={image} alt="movie" />
                <Movie src={image} alt="movie" />
                <Movie src={image} alt="movie" />
                <Movie src={image} alt="movie" />
                <Movie src={image} alt="movie" />
                <Movie src={image} alt="movie" />
                <Movie src={image} alt="movie" />
                <Movie src={image} alt="movie" />
              </div>
            </div>
          </div>
          <h5 className="text-light mt-2 mb-2">Trending now</h5>
          <div id="trending-now">
            <div className="movie-row">
              <div className="movieList row g-1 flex-nowrap py-2">
                <Movie src={image} alt="movie" />
                <Movie src={image} alt="movie" />
                <Movie src={image} alt="movie" />
                <Movie src={image} alt="movie" />
                <Movie src={image} alt="movie" />
                <Movie src={image} alt="movie" />
                <Movie src={image} alt="movie" />
                <Movie src={image} alt="movie" />
                <Movie src={image} alt="movie" />
                <Movie src={image} alt="movie" />
                <Movie src={image} alt="movie" />
                <Movie src={image} alt="movie" />
                <Movie src={image} alt="movie" />
              </div>
            </div>
          </div>
          <h5 className="text-light mt-2 mb-2">Trending now</h5>
          <div id="trending-now">
            <div className="movie-row">
              <div className="movieList row g-1 flex-nowrap py-2">
                <Movie src={image} alt="movie" />
                <Movie src={image} alt="movie" />
                <Movie src={image} alt="movie" />
                <Movie src={image} alt="movie" />
                <Movie src={image} alt="movie" />
                <Movie src={image} alt="movie" />
                <Movie src={image} alt="movie" />
                <Movie src={image} alt="movie" />
                <Movie src={image} alt="movie" />
                <Movie src={image} alt="movie" />
                <Movie src={image} alt="movie" />
                <Movie src={image} alt="movie" />
                <Movie src={image} alt="movie" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
