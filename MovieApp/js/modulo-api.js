import {URL_BASE} from "../config.js";

export const RicercaFilm = async (s, type) => {

    const url = URL_BASE + `s=${s}&type=${type}`;

    try {

        const response = await fetch(url);
        const result = await response.json();
        const items = result.Search;
                
        await viewItems(items);

    } catch (error) {

        console.log(error.message);
    }
};

const viewItems = (items) => {
    let indice = 1;
    //Ciclare l'array
    items.map((item) => {
    //Creo il movie all'interno del DOM
    createHTMLMovie(item, indice);
    indice++;
  });
};

  const createHTMLMovie = (movie, i) => {
    const element = document.getElementById(`card-titolo-${i}`);
    const titolo_vecchio = document.getElementById(`film-titolo-${i}`);
    const anno = document.getElementById(`anno-film-${i}`);
    //const desc_vecchio = document.getElementById(`desc-film-${i}`);
    const img = document.getElementById(`card-img-${i}`);

    const titolo = document.createElement("h5");
    const node = document.createTextNode(movie.Title);
    titolo.appendChild(node);

    element.replaceChild(titolo, titolo_vecchio);

    const paragrafo = document.createElement("p");
    const node2 = document.createTextNode(movie.Year);
    paragrafo.appendChild(node2);

    element.replaceChild(paragrafo, anno);
    /*
    const para2 = document.createElement("p");
    const node3 = document.createTextNode(movie.Plot);
    para2.appendChild(node3);*/

    //element.replaceChild(para2, desc_vecchio);

    img.src = `${movie.Poster}`;

};

export const RicercaFilmContinua = async (t, type) => {

    const url = URL_BASE + `t=${t}&type=${type}`;

    try {

        const response = await fetch(url);
        const result = await response.json();
                
        await viewItemsContinua(result);

    } catch (error) {

        console.log(error.message);
    }
};

const viewItemsContinua = (item) => {
    createHTMLMovieContinua(item);
};

  const createHTMLMovieContinua = (movie) => {
    const element = document.getElementById("card-titolo6");
    const titolofilm = document.getElementById("film-titolo6");
    const anno = document.getElementById("anno-film6");
    //const desc_vecchio = document.getElementById(`desc-film-${i}`);
    const img = document.getElementById("card-img6");

    const titolo = document.createElement("h5");
    const node = document.createTextNode(movie.Title);
    titolo.appendChild(node);

    element.replaceChild(titolo, titolofilm);

    const paragrafo = document.createElement("p");
    const node2 = document.createTextNode(movie.Year);
    paragrafo.appendChild(node2);

    element.replaceChild(paragrafo, anno);
    /*
    const para2 = document.createElement("p");
    const node3 = document.createTextNode(movie.Plot);
    para2.appendChild(node3);*/

    //element.replaceChild(para2, desc_vecchio);

    img.src = `${movie.Poster}`;

};

export const RicercaFilmSpinOFF1 = async (t, type) => {

    const url = URL_BASE + `t=${t}&type=${type}`;

    try {

        const response = await fetch(url);
        const result = await response.json();
                
        await viewItemsSpinnOFF1 (result);

    } catch (error) {

        console.log(error.message);
    }
};

const viewItemsSpinnOFF1 = (item) => {
    createSpinoFF1(item);
};

  const createSpinoFF1 = (movie) => {
    const img = document.getElementById("card-image-spinoff1");

    img.src = `${movie.Poster}`;

};

export const RicercaFilmSpinOFF2 = async (t, type) => {

    const url = URL_BASE + `t=${t}&type=${type}`;

    try {

        const response = await fetch(url);
        const result = await response.json();
                
        await viewItemsSpinnOFF2 (result);

    } catch (error) {

        console.log(error.message);
    }
};

const viewItemsSpinnOFF2 = (item) => {
    createSpinoFF2(item);
};

  const createSpinoFF2 = (movie) => {
    const img = document.getElementById("card-image-spinoff2");

    img.src = `${movie.Poster}`;

};

/* chiamate API per transformers.html */

export const RicercaFilmTransformers = async (s, type) => {

    const url = URL_BASE + `s=${s}&type=${type}`;

    try {

        const response = await fetch(url);
        const result = await response.json();
        const items = result.Search;
                
        await viewItemsMovie(items);

    } catch (error) {

        console.log(error.message);
    }
};

const viewItemsMovie = (items) => {
    let indice = 1;
    //Ciclare l'array
    items.map((item) => {
    //Creo il movie all'interno del DOM
    createHTMLMovieTransformers(item, indice);
    indice++;
  });
};

  const createHTMLMovieTransformers = (movie, i) => {
    const img = document.getElementById(`card-img-tras-${i}`);

    img.src = `${movie.Poster}`;

};

/* chiamate API per LOTR.html */

export const RicercaFilmLOTR = async (s, type) => {

    const url = URL_BASE + `s=${s}&type=${type}`;

    try {

        const response = await fetch(url);
        const result = await response.json();
        const items = result.Search;
                
        await viewItemsLOTR(items);

    } catch (error) {

        console.log(error.message);
    }
};

const viewItemsLOTR = (items) => {
    let indice = 1;
    //Ciclare l'array
    items.map((item) => {
    //Creo il movie all'interno del DOM
    createHTMLMovieLOTR(item, indice);
    indice++;
  });
};

  const createHTMLMovieLOTR = (movie, i) => {
    const element = document.getElementById(`card-titolo-lotr-${i}`);
    const titolo_vecchio = document.getElementById(`film-titolo-lotr-${i}`);
    const anno = document.getElementById(`anno-film-lotr-${i}`);
    //const desc_vecchio = document.getElementById(`desc-film-${i}`);
    const img = document.getElementById(`card-img-lotr-${i}`);

    const titolo = document.createElement("h5");
    const node = document.createTextNode(movie.Title);
    titolo.appendChild(node);

    element.replaceChild(titolo, titolo_vecchio);

    const paragrafo = document.createElement("p");
    const node2 = document.createTextNode(movie.Year);
    paragrafo.appendChild(node2);

    element.replaceChild(paragrafo, anno);
    /*
    const para2 = document.createElement("p");
    const node3 = document.createTextNode(movie.Plot);
    para2.appendChild(node3);*/

    //element.replaceChild(para2, desc_vecchio);

    img.src = `${movie.Poster}`;

};

export const RicercaFilmPrequel= async (s, type) => {

    const url = URL_BASE + `s=${s}&type=${type}`;

    try {

        const response = await fetch(url);
        const result = await response.json();
        const items = result.Search;
                
        await viewItemsTH(items);

    } catch (error) {

        console.log(error.message);
    }
};

const viewItemsTH = (items) => {
    let indice = 1;
    //Ciclare l'array
    items.map((item) => {
    //Creo il movie all'interno del DOM
    createHTMLMovieTH(item, indice);
    indice++;
  });
};

  const createHTMLMovieTH = (movie, i) => {
    const element = document.getElementById(`card-titolo-TH-${i}`);
    const titolo_vecchio = document.getElementById(`film-titolo-TH-${i}`);
    const anno = document.getElementById(`anno-film-TH-${i}`);
    //const desc_vecchio = document.getElementById(`desc-film-${i}`);
    const img = document.getElementById(`card-img-TH-${i}`);

    const titolo = document.createElement("h5");
    const node = document.createTextNode(movie.Title);
    titolo.appendChild(node);

    element.replaceChild(titolo, titolo_vecchio);

    const paragrafo = document.createElement("p");
    const node2 = document.createTextNode(movie.Year);
    paragrafo.appendChild(node2);

    element.replaceChild(paragrafo, anno);
    /*
    const para2 = document.createElement("p");
    const node3 = document.createTextNode(movie.Plot);
    para2.appendChild(node3);*/

    //element.replaceChild(para2, desc_vecchio);

    img.src = `${movie.Poster}`;

};
