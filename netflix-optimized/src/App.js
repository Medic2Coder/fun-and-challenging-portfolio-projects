import React from 'react';
import './App.css';
import Row from "./Row.js" ;
import requests from './requests';
import keys from './keys';


function App() {
    return (

        <div className="App">
            <h1>Netflix 2.0 (Testing by ReMark Studios)</h1>
            <h5>Powered by CodeUp Inspiration and Caffeine</h5>
            <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
            <Row title="Comedies" fetchUrl={requests.fetchComedyMovies}/>
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>  

            {/*{requests.}*/}
        </div>
    );
}

export default App;

//step 1: get movies and build rows at same time
//...every row is one component, we are passing in props = properties
//react is revolved around component based design
//you write one compoentn and you resuse it by passing in different props

