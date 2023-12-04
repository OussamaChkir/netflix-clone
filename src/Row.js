import axios from './axios';
import React, { useState, useEffect } from 'react';
import './Row.css';
import Rating from '@mui/material/Rating';


function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return <div className='row'>
    <h2>{title}</h2>
    <div className='row_posters'>

      {movies.map((movie) => (
        <div className='row_posterCard'>
        <Rating className={`hideRating ${isLargeRow && 'hideRatingLarge'}`} value={movie?.vote_average /2} precision={0.1} readOnly />
        <img key={movie.id} className={`row_poster ${isLargeRow && 'row_posterLarge'}`} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
        <div className={`hideObject ${isLargeRow && 'hideObjectLarge'}`}>{movie?.title|| movie?.name|| movie?.original_name}</div>
        </div>
      ))}
    </div>
  </div>;
}

export default Row;
