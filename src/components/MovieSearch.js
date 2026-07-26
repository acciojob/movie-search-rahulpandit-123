import React, { useEffect, useState } from 'react'

const MovieSearch = () => {
  const [movies, setMovies] = useState([])
  const [result, setResult] = useState([])
  const [search, setSearch] = useState('')
  const [message,setMessage] = useState("")


    function handlesearch() {
  fetch(`https://www.omdbapi.com/?apikey=99eb9fd1&s=${search}`)
    .then(response => response.json())
    .then(data => {
        if(data.Response == "True"){
            setResult(data.Search)
            setMessage("")
        }else{
            setResult([])
            setMessage("Invalid movie name. Please try again.")
        }
    });
}

  return (
    <div>
      <h1>Search Movie</h1>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={handlesearch}>Search</button>

      {result.map((r) => (
        <ul>
        <li key={r.imdbID}>
          <h2>{r.Title}({r.Year})</h2>
          <img src={r.Poster} alt={r.Title} width="150" />
        </li>
        </ul>
      ))}
      <p>{message}</p>
    </div>
  )
}

export default MovieSearch