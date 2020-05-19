import React from 'react';
import { Link, useRouteMatch, useParams } from 'react-router-dom'
const MovieList = props => {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}



function MovieDetails({ movie }) {
  const { title, director, metascore, stars } = movie;
  const { url } = useRouteMatch()

  // const {movieID} = useParams()
  // const item = movie.find(mv => {
  //   return movieID === mv.id.toString()
  // })



  return (
  
    <div className="movie-card">

      <Link to={`/movies/${movie.id}`}>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>
      </Link>
      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}  
        </div>
        
      ))}
      
    </div>
  );
}

export default MovieList;
