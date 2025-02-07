import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggesstions from './GptMovieSuggesstions'
import { BACKGROUND_IMG } from '../utils/constant'

const GptSearch = () => {
    return (
        <div>
            <div className='fixed -z-10'>
                <img src={BACKGROUND_IMG}
                    alt="background" />
            </div>
            <GptSearchBar />
            <GptMovieSuggesstions />

        </div>
    )
}

export default GptSearch
