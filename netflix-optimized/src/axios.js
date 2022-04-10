import axios from "axios";
  //here's a note

//base url to make requests to the movie database

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;
//default can be renamed to anything
//the idea is, we export this, and we have the bones to make requests