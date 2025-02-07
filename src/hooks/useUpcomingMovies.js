
import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import { addUpcomingMovies } from '../utils/moviesSlice';
import { useDispatch } from 'react-redux';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const getUpcomingMovies = async () => {
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
      const response = await data.json();
      dispatch(addUpcomingMovies(response?.results));
    };
    useEffect(()=> {
      getUpcomingMovies();
    }, []);
    
}

export default useUpcomingMovies;