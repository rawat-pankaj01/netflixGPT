import React, { useRef } from 'react'
import lang from '../utils/languageConstant'
import { useDispatch, useSelector } from 'react-redux'
import { client } from '../utils/openai'
import { API_OPTIONS } from '../utils/constant'
import { addGptMoviesResult } from '../utils/gptSlice'

const GptSearchBar = () => {
    const selectedLanguage = useSelector(state => state.config.lang);
    const searchText = useRef(null);
    const dispatch = useDispatch();

    const searchMovieTMDB = async (moveiName) => {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${moveiName}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
        const response = await data.json();
        return response.results;

    }
    const handleGptSearchClick = async () => {
        const query = "Act like a movie recommendation system and recommend movies for the query: " + searchText.current.value + ". only give 5 names, comma separated";

        const gptResults = await client.chat.completions.create({
            messages: [{ role: 'user', content: query }],
            model: 'gpt-4o',
        });
        const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

        // For each movie, get details from TMDB
        const movieDataPromiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
        const movieData = await Promise.all(movieDataPromiseArray);
        dispatch(addGptMoviesResult({ movieNames: gptMovies, moviesResults: movieData }));
    }

    return (
        <div className='pt-[35%] md:pt-[10%] flex justify-center'>
            <form className='bg-black w-full md:w-1/2 grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
                <input type='text' className='p-4 m-4 col-span-9' ref={searchText} placeholder={lang[selectedLanguage].gptSearchPlaceholder} />
                <button className='py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4' onClick={handleGptSearchClick}>{lang[selectedLanguage].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar
