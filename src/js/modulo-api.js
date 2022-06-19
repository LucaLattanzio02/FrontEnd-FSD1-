import {URL_BASE} from "./config.js";

/* *********************

    chiamate API index.html

************************ */

export const DescRockyMovies = async (t, type) => {

    const url = URL_BASE + `t=${t}&type=${type}`;

    try {

        const response = await fetch(url);
        const result = await response.json();
                
        await viewItemsRocky(result);

    } catch (error) {

        console.log(error.message);
    }
};

const viewItemsRocky = (item) => {
    //Creo il movie all'interno del DOM
    createHTMLRocky(item);
};

  const createHTMLRocky = (movie) => {
    const element = document.getElementById("card-body-desc-1");
    const desc = document.getElementById("desc-card-home-1");

    const para = document.createElement("p");
    const node = document.createTextNode(movie.Plot);
    para.appendChild(node);

    element.replaceChild(para, desc);

};

export const DescTransformers = async (t, type) => {

    const url = URL_BASE + `t=${t}&type=${type}`;

    try {

        const response = await fetch(url);
        const result = await response.json();
                
        await viewItemsTrasformers_desc(result);

    } catch (error) {

        console.log(error.message);
    }
};

const viewItemsTrasformers_desc = (item) => {
    //Creo il movie all'interno del DOM
    createHTMLTrasformers_desc(item);
};

  const createHTMLTrasformers_desc = (movie) => {
    const element = document.getElementById("card-body-desc-2");
    const desc = document.getElementById("desc-card-home-2");

    const para = document.createElement("p");
    const node = document.createTextNode(movie.Plot);
    para.appendChild(node);

    element.replaceChild(para, desc);

};

export const DescLOTR = async (t, type) => {

    const url = URL_BASE + `t=${t}&type=${type}`;

    try {

        const response = await fetch(url);
        const result = await response.json();
                
        await viewItemsLOTR_desc(result);

    } catch (error) {

        console.log(error.message);
    }
};

const viewItemsLOTR_desc = (item) => {
    //Creo il movie all'interno del DOM
    createHTMLLOTR_DESC(item);
};

  const createHTMLLOTR_DESC = (movie) => {
    const element = document.getElementById("card-body-desc-3");
    const desc = document.getElementById("desc-card-home-3");

    const para = document.createElement("p");
    const node = document.createTextNode(movie.Plot);
    para.appendChild(node);

    element.replaceChild(para, desc);

};

export const RicercaSerie_TheBoys = async (t, type) => {

    const url = URL_BASE + `t=${t}&type=${type}`;

    try {

        const response = await fetch(url);
        const result = await response.json();
                
        await viewItems_TheBoys(result);

    } catch (error) {

        console.log(error.message);
    }
};

const viewItems_TheBoys = (item) => {
    //Creo il movie all'interno del DOM
    createHTMLSeries_TheBoys(item);
};

  const createHTMLSeries_TheBoys = (movie) => {
    const img = document.getElementById("card-img-home4");

    img.src = `${movie.Poster}`;

};

export const RicercaSerie_Game_Thrones = async (t, type) => {

    const url = URL_BASE + `t=${t}&type=${type}`;

    try {

        const response = await fetch(url);
        const result = await response.json();
                
        await viewItems_Game_Thrones(result);

    } catch (error) {

        console.log(error.message);
    }
};

const viewItems_Game_Thrones = (item) => {
    //Creo il movie all'interno del DOM
    createHTMLSeries_Game_Thrones(item);
};

  const createHTMLSeries_Game_Thrones = (movie) => {
    const img = document.getElementById("card-img-home5");

    img.src = `${movie.Poster}`;

};

export const RicercaSerie_Snowpiercer = async (t, type) => {

    const url = URL_BASE + `t=${t}&type=${type}`;

    try {

        const response = await fetch(url);
        const result = await response.json();
                
        await viewItems_Snowpiercer(result);

    } catch (error) {

        console.log(error.message);
    }
};

const viewItems_Snowpiercer = (item) => {
    //Creo il movie all'interno del DOM
    createHTMLSeries_Snowpiercer(item);
};

  const createHTMLSeries_Snowpiercer = (movie) => {
    const img = document.getElementById("card-img-home6");

    img.src = `${movie.Poster}`;

};

/* *********************

    chiamate API per rocky.html

************************ */

export const RicercaFilmRocky = async (s, type) => {

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

export const RicercaFilmRocky_V = async (t, type) => {

    const url = URL_BASE + `t=${t}&type=${type}`;

    try {

        const response = await fetch(url);
        const result = await response.json();
                
        await viewItemsRocky_V(result);

    } catch (error) {

        console.log(error.message);
    }
};

const viewItemsRocky_V = (item) => {
    createHTMLMovieRocky_V(item);
};

  const createHTMLMovieRocky_V = (movie) => {
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

export const RicercaFilmCreed = async (t, type) => {

    const url = URL_BASE + `t=${t}&type=${type}`;

    try {

        const response = await fetch(url);
        const result = await response.json();
                
        await viewItemsCreed (result);

    } catch (error) {

        console.log(error.message);
    }
};

const viewItemsCreed = (item) => {
    createMovieCreed(item);
};

  const createMovieCreed = (movie) => {
    const img = document.getElementById("card-image-spinoff1");

    img.src = `${movie.Poster}`;

};

export const RicercaFilmCreed_2 = async (t, type) => {

    const url = URL_BASE + `t=${t}&type=${type}`;

    try {

        const response = await fetch(url);
        const result = await response.json();
                
        await viewItemsCreed_2 (result);

    } catch (error) {

        console.log(error.message);
    }
};

const viewItemsCreed_2 = (item) => {
    createMovieCreed_2(item);
};

  const createMovieCreed_2 = (movie) => {
    const img = document.getElementById("card-image-spinoff2");

    img.src = `${movie.Poster}`;

};

/* *********************

    chiamate API per transformers.html

************************ */

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

export const RicercaFilmBumblebee = async (t, type) => {

    const url = URL_BASE + `t=${t}&type=${type}`;

    try {

        const response = await fetch(url);
        const result = await response.json();
                
        await viewItemsMovie2(result);

    } catch (error) {

        console.log(error.message);
    }
};

const viewItemsMovie2 = (item) => {
    //Creo il movie all'interno del DOM
    createHTMLMovieBumblebee(item);
};

  const createHTMLMovieBumblebee = (movie) => {
    const img = document.getElementById("card-img-tras6");

    img.src = `${movie.Poster}`;

};

/* *********************

    chiamate API per LOTR.html

************************ */

export const RicercaFilm_Lord_of_the_Rings = async (s, type) => {

    const url = URL_BASE + `s=${s}&type=${type}`;

    try {

        const response = await fetch(url);
        const result = await response.json();
        const items = result.Search;
                
        await viewItems_Lord_of_the_Rings(items);

    } catch (error) {

        console.log(error.message);
    }
};

const viewItems_Lord_of_the_Rings = (items) => {
    let indice = 1;
    //Ciclare l'array
    items.map((item) => {
    //Creo il movie all'interno del DOM
    createHTMLMovie_Lord_of_the_Rings(item, indice);
    indice++;
  });
};

  const createHTMLMovie_Lord_of_the_Rings = (movie, i) => {
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

export const RicercaFilmThe_Hobbit= async (s, type) => {

    const url = URL_BASE + `s=${s}&type=${type}`;

    try {

        const response = await fetch(url);
        const result = await response.json();
        const items = result.Search;
                
        await viewItemsThe_Hobbit(items);

    } catch (error) {

        console.log(error.message);
    }
};

const viewItemsThe_Hobbit = (items) => {
    let indice = 1;
    //Ciclare l'array
    items.map((item) => {
    //Creo il movie all'interno del DOM
    createHTMLMovieThe_Hobbit(item, indice);
    indice++;
  });
};

  const createHTMLMovieThe_Hobbit = (movie, i) => {
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
