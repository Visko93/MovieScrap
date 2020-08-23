import React from 'react'

import { ModalStyle } from "./styles";
import logo from '../../utils/img/logo.svg'


function Modal ({open, film, handleModal}) {
  console.log(film)
  const img_url = (path) => `https://image.tmdb.org/t/p/w220_and_h330_face${path}`
  return(
    <ModalStyle >
      <div className="container"style={{display: open ? 'block' : 'none'}} >
        <span onClick={handleModal}>X</span>
        <div className="film__item">
          <div className="img__container">
            {!film.poster_path
              ? <img src={logo} alt="placeholder of a poster"/>
              :<img src={img_url(film.poster_path)} alt={`Title poster`}/>
              }
              <div className="film__intro">
                <h1 className="title">{film.title}</h1>
                <small className="date">{film.date}</small>
                <h4 className="lang">{film.original_language}</h4>
                <p className="desc">{film.overview}</p>
            <p className="rate">Fans Rate: {film.vote_average}</p>
              </div>
          </div>
        </div>
      </div>
    </ModalStyle>
  )
}

export default Modal