import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import {addUser, removeUser} from "../utils/userSlice"

const Body = () => {
    const dispatch = useDispatch();

    useEffect(()=> {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, displayName, email, photoURL} = user;
              dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
            } else {
              dispatch(removeUser());
            }
          });
    }, []);
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
