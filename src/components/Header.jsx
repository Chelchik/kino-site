import React, { useContext, useState } from 'react'
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
import { selectShow } from '../features/menuSlice';

function Header() {
    const {theme, setTheme} = useContext(ThemeContext);

    const themeFunc = () => {
        dispatch({
            type: "theme",
            payload: setTheme(!theme)
        })
    }
    
    const inputValue = useSelector(selectInput);
    const isShow = useSelector(selectShow);

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

    const menuFunc = () => {
        dispatch({
            type: "menu",
            payload: isShowMenu
        })
        setIsShowMenu(!isShowMenu)
    }

    const [isShowMenu, setIsShowMenu] = useState(false);

    const hiddenMenu = {
        width: "100%",
        position: "absolute",
        top: "100px",
        left: "0",
        backgroundColor: "#272727",
        padding: "35px",
        display: isShowMenu ? "flex" : "none",
        flexDirection: "column",
        alignItems: "center",
        gap: "15px",
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

        <ul style={hiddenMenu}>
          <li className='menu-bar'><NavLink to='/' className='menu-link'>HOME</NavLink></li>
          <li className='menu-bar'><NavLink to='about' className='menu-link'>ABOUT</NavLink></li>
          <li className='menu-bar'><NavLink to='services' className='menu-link'>SERVICES</NavLink></li>
          <li className='menu-bar'><NavLink to='contact' className='menu-link'>CONTACTS</NavLink></li>
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
        <IoMdMenu className='menu-icon' onClick={menuFunc} />
    </div>
</header>
  )
}

export default Header