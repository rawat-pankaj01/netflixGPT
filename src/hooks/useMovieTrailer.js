import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/moviesSlice'

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const trailerVideo = useSelector(store=>store.movies.trailerVideo);
    const getMovieVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const response = await data.json();
        const filteredTrailers = response.results.filter((item) => item.type === "Trailer");
        const trailer = filteredTrailers.length ? filteredTrailers[0] : response.results[0];
        dispatch(addTrailerVideo(trailer));  
    }
    useEffect(()=>{
        !trailerVideo && getMovieVideos();
    }, [])
}

export default useMovieTrailer