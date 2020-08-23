import React, {useState} from "react";

import Main from '../../components/Main'
import FilmList from "../../components/FilmList"
import Modal from "../../components/Modal";

function Home () {
  
  const[query, setQuery] = useState('')
  const[listData, setListData] = useState({})
  const[modal, setModal] = useState(false)
  const[filmDetails, setFilmDetails] = useState({})

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleModal = (film, e) => {
    if (modal === true) {
      setModal(false)
    } else {
      setModal(true)
    }
    if (film) {
      setFilmDetails(film)
    } 
  }

  // const handlePagination = (e) => {
  //   const {name} = e.target
  //   const direction = name === 'back' ? (-1) : 1 
  //   setPage(page + direction)
  // }
  const handleMoviesSearch = async (e) => {
    e.preventDefault()
    
    const url = `https://api.themoviedb.org/3/search/movie?api_key=57f1801fc4dcb7127b39d9f6896a961a&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url)
      const data = await res.json()

      setListData(data)

    }catch(err){
      console.error(err);
    }     
  }
  const {total_results, results} = listData
  return (
    <>
    <div style={{backgroundColor: modal ? 'rgba(0,0,0,.6)' : 'rgba(244,244,244)'}}>
      <Main 
        handleSubmit={handleMoviesSearch} 
        handleChange={handleChange}
        query={query}
      />
      <FilmList 
        total_results={total_results} 
        results={results} 
        handleModal={handleModal}
        open={modal} 
      />
      <Modal 
        open={modal} 
        film={filmDetails} 
        handleModal={handleModal}/>
    </div>
    </>
  )
}

export default Home