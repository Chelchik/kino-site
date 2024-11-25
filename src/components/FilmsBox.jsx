import { CiSearch } from "react-icons/ci";
import React, { useContext, useEffect, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import { useDispatch, useSelector } from 'react-redux';

import { selectInput } from "../features/inputValueSlice";
import { selectSubmit, selectSubmitHistory, selectSubmitHorror } from "../features/SubmitSlice";

import FilmItem from "./FilmItem"

import { api_key, api_url, main_url, request, searchUrl } from "../Lib/lib";
import ThemeContext from "../Context/context";

function FilmsBox() {
    const popularFilms = useSelector(selectSubmit);
    const horrorFilms = useSelector(selectSubmitHorror);
    const historyFilms = useSelector(selectSubmitHistory);
    const dispatch = useDispatch();

    const screen = window.matchMedia("(min-width:1520px)");
    const screenPhone = window.matchMedia("(min-width:895px)");
    const screenPhone2 = window.matchMedia("(max-width:685px)");

    const {theme, setTheme} = useContext(ThemeContext);
    
    useEffect(() => {
        const fetchPopular = async (genreUrl) => {
            const popular = await request(api_url);
            const horrorUrl = `${main_url}/discover/movie?sort_by=popularity.desc&with_genres=27&${api_key}`;
             const horror = await request(horrorUrl);
             const historyUrl = `${main_url}/discover/movie?sort_by=popularity.desc&with_genres=36&${api_key}`;
             const history = await request(historyUrl);
            dispatch({
                type: "SUBMIT",
                payload: {
                    popular: popular,
                    horror: horror,
                    history: history
                }
            });
        };

        fetchPopular();
    }, [dispatch]);

    const filmsBoxStyle = {
        width: "100%",
        padding: "51px",
        backgroundColor: theme ? "#f0f0f0" : "rgb(17, 17, 17)",
        display: "flex",
        flexDirection: "column",
        gap: "50px",
    }

    return (
        <>
            <div style={filmsBoxStyle}>
                <div id="top-searches" style={{color: theme ? "#000" : "#000"}}>
                    <h2 style={{color: theme ? "#000" : "#fff"}}>Searche</h2>

                    <Swiper id="topSwiper" slidesPerView={screen.matches ? 4 : screenPhone.matches ? 3 : screenPhone2.matches ? 1 : 2} spaceBetween={30} pagination={{ clickable: true }} modules={[Pagination]} className="mySwiper">
                        {
                            popularFilms.map((film) => {
                                return <SwiperSlide className="slide" key={film.id}><FilmItem elem={film} /></SwiperSlide>
                            })
                        }
                    </Swiper>

                    <div id="swiper-box">
                        <h2 style={{color: theme ? "#000" : "#fff"}}></h2>

                        <Swiper id="topSwiper" slidesPerView={screen.matches ? 4 : screenPhone.matches ? 3 : screenPhone2.matches ? 1 : 2} spaceBetween={30} pagination={{ clickable: true }} modules={[Pagination]} className="mySwiper">
                            {
                                horrorFilms.map((film) => {
                                    return <SwiperSlide className="slide" key={film.id}><FilmItem elem={film} /></SwiperSlide>
                                })
                            }
                        </Swiper>

                        <h2 style={{color: theme ? "#000" : "#fff"}}>History</h2>

                        <Swiper id="topSwiper" slidesPerView={screen.matches ? 4 : screenPhone.matches ? 3 : screenPhone2.matches ? 1 : 2} spaceBetween={30} pagination={{ clickable: true }} modules={[Pagination]} className="mySwiper">
                            {
                                historyFilms.map((film) => {
                                    return <SwiperSlide className="slide" key={film.id}><FilmItem elem={film} /></SwiperSlide>
                                })
                            }
                        </Swiper>
                    </div>

                    <h3 id="nothing-found"></h3>
                </div>
            </div>
        </>
    )
}

export default FilmsBox