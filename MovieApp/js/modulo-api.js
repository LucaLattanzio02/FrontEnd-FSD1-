import {URL_BASE} from "../config.js";

export const lista_api = (s, type) => {
    const url = URL_BASE + `s=${s}&type=${type}`;
    fetch(url)
        .then(response => response.json())
        .then(results => {
            const items = results.Search;
            console.log(items);
        });
};

//------------------------------------------

/*export const url_movie = "http://www.omdbapi.com/?apikey=4b925bd5&s=terminator";
export const url_series = "http://www.omdbapi.com/?apikey=4b925bd5&s=terminator&type=series";
export const somma = (a, b) => a+b;

// Funzione che chiama la web api con l'elenco di tutti i contenuti di Terminator
export const listMovie = () => {
    fetch(url_movie)
        .then (response => response.json())
        .then(results => {
            const movies = results.Search;
            console.log(movies);
        });
};

// Funzione che chiama la web api con l'elenco delle serie di Terminator
export const listSerie = () => {
    fetch(url_series)
        .then (response => response.json())
        .then(results => {
            const series = results.Search;
            console.log(series);
        });
};
*/
