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
                    ]     //this simplifies to return one item from the array
            );
            return request;
        }

        fetchData();               //      tutorial says to
        // let promise = fetchData(); //suggested by docs
    }, []);

    // console.log(movie); //TODO: Remove this line on production


    return (
        <header>      {/* <<<background image */}
            {/*    title */}
            {/*    div > 2 buttons */}
            {/*    description */}
        </header>
    )
}

export default Banner;