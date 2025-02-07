import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggesstions from './GptMovieSuggesstions'
import { BACKGROUND_IMG } from '../utils/constant'

const GptSearch = () => {
    return (
        <>
            <div className='fixed -z-10'>
                <img className='h-screen object-cover md:h-auto' src={BACKGROUND_IMG}
                    alt="background" />
            </div>

            <div className=''>
                <GptSearchBar />
                <GptMovieSuggesstions />

            </div>
        </>
    )
}

export default GptSearch
