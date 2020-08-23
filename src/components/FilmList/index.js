import React from 'react'

import { ListStyle } from "./style";
import logo from '../../utils/img/logo.svg'

function FilmList ({open, results, handleModal}) {
  
  const img_url = (path) => `https://image.tmdb.org/t/p/w220_and_h330_face${path}`
  
  return(
    <ListStyle>
      <ul className="film__list">
        {!results 
          ? <h1>Research a movie</h1>
          :results.map(film => (
          <li className="film__item" key={film.id}>
          <div className="img__container">
            {!film.poster_path 
              ? <img 
                src={logo} 
                alt="placeholder of a poster" 
                style={{opacity: open ? .3 : 1}}/>
              :<img 
                src={img_url(film.poster_path)} 
                alt={`${film.title} poster`}
                style={{opacity: open ? .3 : 1}}
              />
              }
              <div onClick={(e)=>handleModal(film, e)} className="summary__hover">
                <h3>{film.title}</h3>
                <p>{film.overview}</p>
                <small>{film.release_date}</small>
              </div>
          </div>
        </li>
        ))}
      </ul>
    </ListStyle>
  )
}

export default FilmList

// adult: false
// backdrop_path: "/9g13vhwYLNgAYb3WrFGKA5z1OQc.jpg"
// genre_ids: (3) [18, 10402, 10749]
// id: 85446
// original_language: "en"
// original_title: "Step Up Revolution"
// overview: "Emily arrives in Miami with aspirations to become a professional dancer. She sparks with Sean, the leader of a dance crew whose neighborhood is threatened by Emily's father's development plans."
// popularity: 35.56
// poster_path: "/ab9T58BlOPauWd9tMnK0HhwYY7u.jpg"
// release_date: "2012-07-26"
// title: "Step Up Revolution"
// video: false
// vote_average: 6.9
// vote_count: 1594