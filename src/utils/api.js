import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
// const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDAzMGZhYmY4M2RhNjBkOGU1NTg0MDViYzBmNGY0NyIsInN1YiI6IjY0YmNmZTNmZTlkYTY5MDBlY2VhNWZjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G8wekMiOKrwhwQtCltAlRC-REzJAqRxJrVMihutW_BM"
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;
// const TMDB_APIKEY = "74030fabf83da60d8e558405bc0f4f47"
const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        })
        return data;
    }
    catch (err) {
        console.log(err)
        return err;
    }
}