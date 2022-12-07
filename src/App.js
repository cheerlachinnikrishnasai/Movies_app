
import './App.css';
import React, {  useState } from 'react'

const App = () => {

  const [movie , setMovie] = useState("")
  const [value , setValue] = useState([])
 
  const fetchData =  async (movie) => {
    const response = await fetch(`https://www.omdbapi.com/?s=${movie}&&&apikey=e227cea2`)
    const data = await response.json()
    setValue(data.Search)
  }
  const submitHandler = (e) =>{
    e.preventDefault();
    fetchData(movie);
  }
  
  return (
    <div className='App'>
      <center className='input'>
            <form onSubmit={submitHandler}>
              <input  type="text"
                      className='inputfield' 
                      value={movie} 
                      size ={50}
                      placeholder="movie..." 
                      onChange={e => setMovie(e.target.value)} />
              <br />
              <input className="search" type="submit" value="Search"/>
            </form>
      </center>
      <br />
      <div className='All'>
        { value.map((movie, index) =>{
          return(
              <div className='movies'>
                <center className='movieslist'>
                    <img src={movie.Poster} alt ={movie.Title} width={150} />
                    <p>{movie.Title}</p>
                    <p>{movie.Year}</p>
                </center>
              </div>
          
          )
        })}
       </div>
    </div>
  )
}

export default App