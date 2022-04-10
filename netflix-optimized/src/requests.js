const TMDB_API = "c2cc8e98bf7d78e509f32ca6ebc61519";
//TODO: Hide this key
//found from endpoints on the movie database
const requests = {
    // fetchDocumentaries: `/discover/movie?api_key=${TMDB_API}&with_genres=99&include_adult=false&sort_by=popularity.desc`, //error with api, does not return safe for work results
    fetchTrending: `/trending/all/week?api_key=${TMDB_API}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${TMDB_API}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${TMDB_API}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${TMDB_API}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${TMDB_API}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${TMDB_API}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${TMDB_API}&with_genres=10749`
}

export default requests;