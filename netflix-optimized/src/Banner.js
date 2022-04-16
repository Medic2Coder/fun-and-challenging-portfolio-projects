import React, {useEffect, useState} from 'react';
import axios from './axios';
import requests from './requests';


function Banner() {
    // const [movie, setMovie] = React.useState(null); // Set the initial state of the movie to null
    const [movie, setMovie] = useState([]); // Set the initial state of the movie to null

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);   //await works on functions that return a promise
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                    ]     //this simplifies to return one item from the array, randomly
            );
            return request;
        }

        fetchData();               //      tutorial says to
        // let promise = fetchData(); //suggested by docs
    }, []);

    // console.log(movie); //TODO: Remove this line on production


    return (
        <header className="banner"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url(
                    "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
                    backgroundPosition: 'center center',
                }}
        >

            <div className="banner_contents">
                <h1>
                    {movie?.title || movie?.name || movie?.original_name}   
                </h1>
                
            </div>

        </header>
    );
}
// the || takes care of the edge cases where the movie is null
// the ? for example on the  movie? is new to React and is called optional chaining
export default Banner;