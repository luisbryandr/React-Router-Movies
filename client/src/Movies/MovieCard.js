import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Link, useParams, useRouteMatch } from 'react-router-dom';
import Movie from './Movie';


export default function MovieCard (props) {

  const [ titleClicked, setTitleClicked ] = useState(false)
  // const { title, director, metascore, stars } = props.movies
  // const  movie  = props; 

  // const params = useParams();

  // const { path, url } = useRouteMatch();

  // const movies = movie.find(item => item.id == Number(params.movie))

  const clickTitle = () => {
    setTitleClicked(!titleClicked)  
  }

  return (

    // let toggle = false;

    // function toggleFunction() {
    //   toggle = !toggle;
    //   return toggle;
    // }
    
    <div className="save-wrapper">
      
        {props.movies.map( movie => (
        <div 
        key={movie.id}
        className="movie-card">
           <h2 onClick={clickTitle}>{movie.title}</h2>
            <div className="movie-director">
            Director: <em>{movie.director}</em>
            </div>
            <div className="movie-metascore">
            Metascore: <strong>{movie.metascore}</strong>
            </div>
            <div style={!titleClicked? {display: 'none'}:{}} >
              {titleClicked && (
              <div>
                <h3>Actors</h3>
                {movie.stars.map(star => (
              <div key={star} className="movie-star">
              {star}
              </div>
            ))}
              </div>
              
              )}
              
            </div>
          </div>
        ))}
        
      <div className="save-button">Save</div>
    </div>
    
  ); 
}
//looks like we'll have to use nested routes so that General card movie details is shown first then when user clicks on link we'll use routeMatch to display the details and save button part of our component - which can live in movie.js but movie card is the one that takes us there and/ or contains its info.
//wed only need to use movie card in App.js component

// //we are trying to combine the JSX of Movie
//   <h3>Actors</h3>
//         {stars.map(star => (
//           <div key={star} className="movie-star">
//             {star}
//           </div>
//         ))}
      
//       <div className="save-button">Save</div>