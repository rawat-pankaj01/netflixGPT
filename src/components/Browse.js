import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
const Browse = () => {
  useNowPlayingMovies();
  // const [moviesList, setMoviesList] = useState()
 
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
      Main Container
        - Video background
        - video title
      Secondary Container
        - Movies list
         - cards

       */}
    </div>
  )
}

export default Browse
