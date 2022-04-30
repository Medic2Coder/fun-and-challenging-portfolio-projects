import React, {useEffect, useState} from "react"
import axios from './axios';
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";


// const imgBaseURL = "https://image.tmdb.org/t/p/w200";  //more manageable image size without size modifications or css
const ogImgBaseURL = "https://image.tmdb.org/t/p/original";  //using this to apply css and custom sizing

//make sure to pull in prop isLargeRow to get large poster size
function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
//starts as empty movie array
    // so now we need a snippet of code which runs based on a specific condition or variable
    //       a really handy hook from react is called useEffect
    useEffect(() => {
        //when row loads on page load, this code runs
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl]);          /* if we leave brackets blank, run once when the row loads,  and don't run it again*/

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1
        },
    };

    // const handleClick = async (movie) => {
    //     if (trailerUrl) {
    //         setTrailerUrl("");
    //     } else {
    //         let trailerurl = await axios.get(
    //             `/movie/${movie.id}/videos?api_key=fb34530271b349314af0de263d16ab5a`
    //         );
    //         setTrailerUrl(trailerurl.data.results[0]?.key);
    //     }
    // };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.title || "")
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));

                })
                .catch(err => console.log(err));
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(movie => (
                    <img
                        key={movie.id}     //key is a unique identifier for each movie and renders faster
                        onClick={() => handleClick(movie)}

                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        src={`${ogImgBaseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}  //string interpolation is a beautiful jS feature
                        alt={movie.name}
                    />
                ))}
            </div>
            <div className = "row_trailer">
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
            </div>
            {/* This project inspired by: <YouTube videoId="XtMThy8QKqU" opts={opts}/>*/}
        </div>
    )
}

export default Row

/*
Notes:  //use state to keep track of the movies - mark
    //state can be considered, short term memory
    //state is a way to write variables in react
    //hooks is a way to make your life easier, give an initial value inside the brackets
    //syntatic sugar = {title}
    to use async write an internal function then call it

 */