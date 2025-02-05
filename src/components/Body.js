import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { BrowserRouter, Route, Routes } from 'react-router'

const Body = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Login />}></Route>
                    <Route exact path="/browse" element={<Browse />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Body
