import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);
  const popularMovies = useSelector(store=>store.movies.popularMovies);
  const upcomingMovies = useSelector(store=>store.movies.upcomingMovies);
  
  return (
    <div className=' bg-black'>
      <div className='mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20'>
        <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
        <MovieList title={"Trending"} movies={nowPlayingMovies} />
        <MovieList title={"Popular"} movies={popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={upcomingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer
