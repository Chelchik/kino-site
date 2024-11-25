import React, { useContext } from 'react'
import { img_url } from '../Lib/lib'
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import Kino from '../Kino/KinoPage';
import { useNavigate } from 'react-router-dom';
import ThemeContext from '../Context/context';

function FilmItem({ elem }) {
    const {theme, setTheme} = useContext(ThemeContext);
    const navigate = useNavigate();

    const nivigateFunc = () => {
        navigate(`../Kino/KinoPage/${elem.id}`)
    }

    return (
        <div className='film'>
            <div className="slide-box">
                <img src={img_url + elem.poster_path} alt="" className="slide-img" />

                <div className="to-play">
                    <button className="to-play-btn" onClick={nivigateFunc}><MdOutlinePlayCircleFilled className='to-play-btn-icon' /></button>
                </div>
            </div>

            <div className='title' style={{color: theme ? "#000" : "#fff"}}>{elem.title}</div>
        </div>
    )
}

export default FilmItem