import {URL_BASE} from "../config.js";

export const PosterCarosello = (t, type) => {
    const url = URL_BASE + `t=${t}&type=${type}`;
    fetch(url)
        .then(response => response.json())
        .then(result => {
            const item = result;
            
            viewItemsCarosello(item); // richiamo della funzione "viewItems"
        });
};

const viewItemsCarosello = (item) =>{
   replacePosterCarousel(item);
}

const replacePosterCarousel = (movie) => {
    const img = document.getElementById("carosello-img-1");

    img.src = `${movie.Poster}`;
}

export const RicercaFilm = (t, type) => {
    const url = URL_BASE + `t=${t}&type=${type}`;
    fetch(url)
        .then(response => response.json())
        .then(result => {
            const item = result;
            
            viewItems(item); // richiamo della funzione "viewItems"
        });
};

const viewItems = (item) =>{
   replaceMovieContent(item);
}

const replaceMovieContent = (movie) => {

    const element = document.getElementById("card-titolo-1");
    const titolo_vecchio = document.getElementById("film-titolo-1");
    const desc_vecchia = document.getElementById("desc-film-1");
    const img_vecchia = document.getElementById("card-img-1");

    const titolo = document.createElement("h5");
    const node = document.createTextNode(movie.Title);
    titolo.appendChild(node);

    const para = document.createElement("p");
    const node2 = document.createTextNode(movie.Plot);
    para.appendChild(node2);

    element.replaceChild(titolo, titolo_vecchio);
    element.replaceChild(para, desc_vecchia);
    img_vecchia.src = `${movie.Poster}`;
}

export const RicercaFilm2 = (t, type) => {
    const url = URL_BASE + `t=${t}&type=${type}`;
    fetch(url)
        .then(response => response.json())
        .then(result => {
            const item = result;
            
            viewItems2(item); // richiamo della funzione "viewItems"
        });
};

const viewItems2 = (item) =>{
   replaceMovieContent2(item);
}

const replaceMovieContent2 = (movie) => {

    const element = document.getElementById("card-titolo-2");
    const titolo_vecchio = document.getElementById("film-titolo-2");
    const desc_vecchia = document.getElementById("desc-film-2");
    const img_vecchia = document.getElementById("card-img-2");

    const titolo = document.createElement("h5");
    const node = document.createTextNode(movie.Title);
    titolo.appendChild(node);

    const para = document.createElement("p");
    const node2 = document.createTextNode(movie.Plot);
    para.appendChild(node2);

    element.replaceChild(titolo, titolo_vecchio);
    element.replaceChild(para, desc_vecchia);
    img_vecchia.src = `${movie.Poster}`;
}

export const RicercaFilm3 = (t, type) => {
    const url = URL_BASE + `t=${t}&type=${type}`;
    fetch(url)
        .then(response => response.json())
        .then(result => {
            const item = result;
            
            viewItems3(item); // richiamo della funzione "viewItems"
        });
};

const viewItems3 = (item) =>{
   replaceMovieContent3(item);
}

const replaceMovieContent3 = (movie) => {

    const element = document.getElementById("card-titolo-3");
    const titolo_vecchio = document.getElementById("film-titolo-3");
    const desc_vecchia = document.getElementById("desc-film-3");
    const img_vecchia = document.getElementById("card-img-3");

    const titolo = document.createElement("h5");
    const node = document.createTextNode(movie.Title);
    titolo.appendChild(node);

    const para = document.createElement("p");
    const node2 = document.createTextNode(movie.Plot);
    para.appendChild(node2);

    element.replaceChild(titolo, titolo_vecchio);
    element.replaceChild(para, desc_vecchia);
    img_vecchia.src = `${movie.Poster}`;
}

export const RicercaFilm4 = (t, type) => {
    const url = URL_BASE + `t=${t}&type=${type}`;
    fetch(url)
        .then(response => response.json())
        .then(result => {
            const item = result;
            
            viewItems4(item); // richiamo della funzione "viewItems"
        });
};

const viewItems4 = (item) =>{
   replaceMovieContent4(item);
}

const replaceMovieContent4 = (movie) => {

    const element = document.getElementById("card-titolo-4");
    const titolo_vecchio = document.getElementById("film-titolo-4");
    const desc_vecchia = document.getElementById("desc-film-4");
    const img_vecchia = document.getElementById("card-img-4");

    const titolo = document.createElement("h5");
    const node = document.createTextNode(movie.Title);
    titolo.appendChild(node);

    const para = document.createElement("p");
    const node2 = document.createTextNode(movie.Plot);
    para.appendChild(node2);

    element.replaceChild(titolo, titolo_vecchio);
    element.replaceChild(para, desc_vecchia);
    img_vecchia.src = `${movie.Poster}`;
}

export const RicercaFilm5 = (t, type) => {
    const url = URL_BASE + `t=${t}&type=${type}`;
    fetch(url)
        .then(response => response.json())
        .then(result => {
            const item = result;
            
            viewItems5(item); // richiamo della funzione "viewItems"
        });
};

const viewItems5 = (item) =>{
   replaceMovieContent5(item);
}

const replaceMovieContent5 = (movie) => {

    const element = document.getElementById("card-titolo-5");
    const titolo_vecchio = document.getElementById("film-titolo-5");
    const desc_vecchia = document.getElementById("desc-film-5");
    const img_vecchia = document.getElementById("card-img-5");

    const titolo = document.createElement("h5");
    const node = document.createTextNode(movie.Title);
    titolo.appendChild(node);

    const para = document.createElement("p");
    const node2 = document.createTextNode(movie.Plot);
    para.appendChild(node2);

    element.replaceChild(titolo, titolo_vecchio);
    element.replaceChild(para, desc_vecchia);
    img_vecchia.src = `${movie.Poster}`;
}

export const RicercaFilm6 = (t, type) => {
    const url = URL_BASE + `t=${t}&type=${type}`;
    fetch(url)
        .then(response => response.json())
        .then(result => {
            const item = result;
            
            viewItems6(item); // richiamo della funzione "viewItems"
        });
};

const viewItems6 = (item) =>{
   replaceMovieContent6(item);
}

const replaceMovieContent6 = (movie) => {

    const element = document.getElementById("card-titolo-6");
    const titolo_vecchio = document.getElementById("film-titolo-6");
    const desc_vecchia = document.getElementById("desc-film-6");
    const img_vecchia = document.getElementById("card-img-6");

    const titolo = document.createElement("h5");
    const node = document.createTextNode(movie.Title);
    titolo.appendChild(node);

    const para = document.createElement("p");
    const node2 = document.createTextNode(movie.Plot);
    para.appendChild(node2);

    element.replaceChild(titolo, titolo_vecchio);
    element.replaceChild(para, desc_vecchia);
    img_vecchia.src = `${movie.Poster}`;
}

export const RicercaFilmSpin1 = (t, type) => {
    const url = URL_BASE + `t=${t}&type=${type}`;
    fetch(url)
        .then(response => response.json())
        .then(result => {
            const item = result;
            
            viewItemsSpinn(item); // richiamo della funzione "viewItems"
        });
};

const viewItemsSpinn = (item) =>{
   replaceSpinnContent(item);
}

const replaceSpinnContent = (movie) => {
    const img_vecchia = document.getElementById("card-image-spinoff1");

    img_vecchia.src = `${movie.Poster}`;
}

export const RicercaFilmSpin2 = (t, type) => {
    const url = URL_BASE + `t=${t}&type=${type}`;
    fetch(url)
        .then(response => response.json())
        .then(result => {
            const item = result;
            
            viewItemsSpinn2(item); // richiamo della funzione "viewItems"
        });
};

const viewItemsSpinn2 = (item) =>{
   replaceSpinnContent2(item);
}

const replaceSpinnContent2 = (movie) => {
    const img_vecchia = document.getElementById("card-image-spinoff2");

    img_vecchia.src = `${movie.Poster}`;
}




/*
// per ricerca con s
export const lista_api_s = (s, type) => {
    const url = URL_BASE + `s=${s}&type=${type}`;
    fetch(url)
        .then(response => response.json())
        .then(results => {
            const items = results.Search;
            
            secondaFetch(items);
        });
};

const secondaFetch = (listaFilm) =>{
    listaFilm.map((film) => {

        let url = URL_BASE + `t=${traduciTitolo(film.Title)}`;

        fetch(url)
        .then(response => response.json())
        .then(results => {
            const risultato = results;
            
            viewItems_t(risultato);
            
        });
    })
}

*/

const traduciTitolo = (titolo) => {
    const stringa = titolo.replace(/\s/g, "%20");  // Trasforma gli gli spazzzzi in %20 per ricerca migliore
    return stringa;
}
