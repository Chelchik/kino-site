import React, { useContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom'

import FilmItem from "../components/FilmItem"

import './KinoPageStyle.css';

import { api_key, api_url, img_url, main_url, request } from '../Lib/lib';
import Loader from '../components/Loader';

import { useDispatch, useSelector } from 'react-redux';
import { selectSubmit, selectSubmitVideos } from "../features/SubmitSlice";

import { CiSearch } from "react-icons/ci";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ThemeContext from '../Context/context';

function Kino() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { id } = useParams();

  const popularFilms = useSelector(selectSubmit);
  const filmVideo = useSelector(selectSubmitVideos);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPopular = async (genreUrl) => {
        const popular = await request(api_url);

          const horrorUrl = `${main_url}/discover/movie?sort_by=popularity.desc&with_genres=27&${api_key}`;
          const horror = await request(horrorUrl);

          const historyUrl = `${main_url}/discover/movie?sort_by=popularity.desc&with_genres=36&${api_key}`;
          const history = await request(historyUrl);

         const videos = await request(`${main_url}/movie/${id}/videos?${api_key}`);

         dispatch({
            type: "SUBMIT",
            payload: {
                popular: popular,
                horror: horror,
                history: history,
                videos: videos
            }
        });
    };

    fetchPopular();
}, [dispatch, id]);

  useEffect(() => {
    const fetchFilm = async () => {
      const data = await request(`${main_url}/movie/${id}?${api_key}`);
      setFilm(data);
    };

    fetchFilm();
  }, [id]);

  const screen = window.matchMedia("(min-width:1520px)");
  const screenPhone = window.matchMedia("(min-width:895px)");
  const screenPhone2 = window.matchMedia("(max-width:685px)");

  const [film, setFilm] = useState();

  if (!film) {
    <Loader />
  }

  const kinoPage = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
    padding: "70px",
    backgroundImage: film ? `url(${img_url + film.backdrop_path})` : "none",
    backgroundSize: "cover",
    position: "relative",
    zIndex: "100"
  }

  const filmsBoxStyle = {
    width: "100%",
    padding: "51px",
    backgroundColor: theme ? "#f0f0f0" : "rgb(17, 17, 17)",
    display: "flex",
    flexDirection: "column",
    gap: "50px",
  }

  const kinoVideoStyle = {
    width: "100%",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    backgroundColor: theme ? "#f0f0f0" : "rgb(17, 17, 17)",
  }

  const descriptionStyle = {
    color: "#cbcbcb"
  }

  return (
    <>
      <div style={kinoPage}>
        <div className="kinoinfo">
          <img src={film ? img_url + film.poster_path : ""} alt="" />

          <h3 className='filmTitle'>{film ? film.title : ""}</h3>

          <span style={descriptionStyle}>
            {
              film ? film.overview : ""
            }
          </span>

          <div className="filmInfo">

            <p className='filmInfoText'>Time: {film ? film.runtime : ""}m</p>

            <p className={parseInt(film ? film.vote_average : 7) >= 7 ? "filmInfoTextHighRating" : parseInt(film.vote_average) == 6 ? "filmInfoTextMediumRating" : "filmInfoTextLowRating"}>popularity: {film ? film.vote_average : ""}</p>

            <p className='filmInfoText'>Date: {film ? film.release_date : ""}</p>
          </div>
        </div>
      </div>

      <div style={filmsBoxStyle} >
        <Swiper id="topSwiper" slidesPerView={screen.matches ? 4 : screenPhone.matches ? 3 : screenPhone2.matches ? 1 : 2} spaceBetween={30} pagination={{ clickable: true }} modules={[Pagination]} className="mySwiper">
          {
            popularFilms.map((film) => {
              return <SwiperSlide className="slide" key={film.id}><FilmItem elem={film} /></SwiperSlide>
            })
          }
        </Swiper>
      </div>

      <div style={kinoVideoStyle} >
          {
              filmVideo.slice(0, 6).map((video) => {
                return <iframe key={video.id} width="450px" height="250px" src={`https://www.youtube.com/embed/${video.key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              })
          }
      </div>
      </>
  )
}

export default Kino;