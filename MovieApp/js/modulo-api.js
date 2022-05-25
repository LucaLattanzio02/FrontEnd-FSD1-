export const url_movie = "http://www.omdbapi.com/?apikey=4b925bd5&s=terminator";

export const somma = (a, b) => a+b;

export const listMovie = () => {
    fetch(url_movie)
        .then (response => response.json())
        .then(results => {
            const movies = results.Search;
            console.log(movies);
        });
};