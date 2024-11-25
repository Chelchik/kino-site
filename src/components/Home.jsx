import React from 'react'
import filmLogo from '../img/filmLogo.png'
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import FilmsBox from './FilmsBox'

function Home() {


    return (
        <>
            <div id="cont">
                <div className="info">
                    <div className="film-img-logo">
                        <img src={filmLogo} alt="" />
                    </div>

                    <div className="kino-information">
                        <div className="central-Board-of-Film-Certification-box">
                            <p>CBFC:U/A</p>
                        </div>

                        <p>Action</p>

                        <div className="point">

                        </div>

                        <p>Adventure</p>

                        <div className="point">

                        </div>

                        <p>2h 28m</p>
                    </div>

                    <span className="text">
                        When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover
                        what it truly means to be Spider-Man.
                    </span>

                    <div className="button-box">
                        <button className="watch-now"><MdOutlinePlayCircleFilled /> Watch Now</button>

                        <button className="more-info"><MdOutlinePlayCircleFilled /> More Info</button>
                    </div>
                </div>
            </div>

            <FilmsBox />
        </>
    )
}

export default Home