import React from 'react'

import { MainStyle } from "./styles";


function Main ({handleSubmit, handleChange, query}) {
  return(
    <MainStyle>
      <div className="container" >
        <h1 className="title">React Movie Seach</h1>

        <form className="form" onSubmit={(e)=>handleSubmit(e)}>
          <label className="label" htmlFor="query">Movie Name</label>
          <input 
              className="input" 
              type="text" 
              name="query"
              value={query}
              onChange={(e) => handleChange(e)}
              placeholder="i.e. Jurassic Park"/>
          <button className="button" type="submit">Search</button>
        </form>
      </div>
    </MainStyle>
  )
}

export default Main