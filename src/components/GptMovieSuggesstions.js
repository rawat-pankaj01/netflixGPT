import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggesstions = () => {
  const gpt = useSelector(store => store.gpt);
  const {movieNames, moviesResults} = gpt;
  if (!movieNames) return;
  return (
    <div className='p-4 m-4 bg-black text-black bg-opacity-70'>
      {movieNames.map((movie, index)=> <MovieList key={movie} title={movie} movies={moviesResults[index]} />)}
        <div>
          
        </div>
        
    </div>
  )
}

export default GptMovieSuggesstions
