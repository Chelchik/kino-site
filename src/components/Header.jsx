import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { IoMdMenu } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { GiCrossMark } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux';
import { selectInput } from '../features/inputValueSlice';
import { api_key, main_url, request, searchUrl } from '../Lib/lib';
import ThemeContext from '../Context/context';
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { selectTheme } from '../features/ThemeSlice';

function Header() {
    const {theme, setTheme} = useContext(ThemeContext);

    const themeFunc = () => {
        dispatch({
            type: "theme",
            payload: setTheme(!theme)
        })
    }
    
    const inputValue = useSelector(selectInput);
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await request(searchUrl + "&query=" + inputValue)

        const horrorUrl = `${main_url}/discover/movie?sort_by=popularity.desc&with_genres=27&${api_key}`;
        const horror = await request(horrorUrl);

        const historyUrl = `${main_url}/discover/movie?sort_by=popularity.desc&with_genres=36&${api_key}`;
        const history = await request(historyUrl);

        if (inputValue.length >= 1) {  
        dispatch({
            type: "SUBMIT",
            payload: {
                popular: { results: response.results },
                horror: horror,
                history: history,
            }
        })
        }
    }

    const inputValueFunc = (e) => {
        dispatch({
            type: "INPUT_VALUE",
            payload: e.target.value
        })
    }

  return (
    <header>
    <nav>
        <div className="logo">
            <button className='themeBtn' onClick={themeFunc}>{theme ? <FaSun className='themeIcon' /> : <FaMoon className='themeIcon' />}</button>

            <Link to="/">
                <h2>STREAM</h2>

                <GiCrossMark style={{color: "red", fontSize: "30px"}} />
            </Link>
        </div>

        <ul className="menu">
            <li className="menu-bar"><NavLink  to='/'  className="menu-link">Home</NavLink></li>
            <li className="menu-bar"><NavLink  to='movies' className="menu-link">Movies</NavLink></li>
            <li className="menu-bar"><NavLink  to='series' className="menu-link">Series</NavLink></li>
            <li className="menu-bar"><NavLink  to='trending' className="menu-link">Trending</NavLink></li>
            <li className="menu-bar"><NavLink  to='categories' className="menu-link">Categories</NavLink></li>
        </ul>
    </nav>

    <div className="searc-form-box">
        <form id="searchForm" onSubmit={handleSubmit}>
            <input type="text" id="search-input" placeholder="Search Movies, Series... " onChange={inputValueFunc} value={inputValue} />

            <button type="submit" id="submit"><FaSearch style={{color: "rgba(255, 255, 255, 0.7)"}} /></button>
        </form>

      <CgProfile className='profil' />
    </div>

    <div className="burger-box">
        <IoMdMenu className='menu-icon' />
    </div>
</header>
  )
}

export default Header