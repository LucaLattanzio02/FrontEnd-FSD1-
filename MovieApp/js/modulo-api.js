import {URL_BASE} from "../config.js";

export const lista_api = (s, type, y) => {
    const url = URL_BASE + `s=${s}&type=${type}&y=${y}`;
    fetch(url)
        .then(response => response.json())
        .then(results => {
            const items = results.Search;
            
            viewItems(items); // richiamo della funzione "viewItems"
        });
};


const viewItems = (items) =>{

     // Ciclare array + Estrapolare ogni item
    items.map(item => {

        // 3 Estrapolare solo le proprietà che sevono (in questo caso "title, Year, Poster, Type")

        //console.group(); // riorganizza le informazioni
        
        console.group(item.Title) // organizza le informazioni con il titolo

        console.log(item.Year);
        console.log(item.Poster);
        console.log(item.Type);

        console.groupEnd();
    });
}

// richiamo della funzione "viewItems"

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
