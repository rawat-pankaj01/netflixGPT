import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router'
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice"
import { LOGO } from '../utils/constant';
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constant';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => { })
      .catch((error) => {
        // An error happened.
        navigate("/error")
      });

  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    // Toggle search button
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between flex-col md:flex-row '>
      <img className='w-44 mx-auto md:mx-0' src={LOGO} alt="logo" />
      {user && <div className='flex p-2 justify-between'>
        {showGptSearch && <select className='pt-2 px-4 m-3 bg-gray-900 text-white rounded-lg' onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
        </select>
        }
        <button className='py-2 px-4 my-2 mx-4 bg-white rounded-lg' onClick={handleGptSearchClick}>
          {showGptSearch ? "Homepage" : "GPT Search"}</button>
        <img className='hidden md:block w-12 h-12 p-4' src={user?.photoURL} alt="user" />
        <button className='cursor-pointer text-white' onClick={handleSignOut}>(Sign out)</button>
      </div>}
    </div>
  )
}

export default Header
