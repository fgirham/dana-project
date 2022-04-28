import axios from "axios";

const PHOTO_ALBUM = axios.create({baseURL: "https://jsonplaceholder.typicode.com"})
const CHUCK_NORRIS = axios.create({baseURL: "https://api.chucknorris.io"})
const STAR_WARS = axios.create({baseURL: "https://swapi.dev/api"})

export {
    PHOTO_ALBUM,
    CHUCK_NORRIS,
    STAR_WARS,
};