import {URL_BASE} from "../config.js";

export const RicercaFilm = async (t, type) => {

    const url = URL_BASE + `t=${t}&type=${type}`;

    try {

        const response = await fetch(url);
        const result = await response.json();
                
        await viewItems(result);

    } catch (error) {

        console.log(error.message);
    }
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

export const RicercaFilm2 = async (t, type) => {

    const url = URL_BASE + `t=${t}&type=${type}`;

    try {

        const response = await fetch(url);
        const result = await response.json();
                
        await viewItems2(result);

    } catch (error) {

        console.log(error.message);
    }
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

export const RicercaFilm3 = async (t, type) => {

    const url = URL_BASE + `t=${t}&type=${type}`;

    try {

        const response = await fetch(url);
        const result = await response.json();
                
        await viewItems3(result);

    } catch (error) {

        console.log(error.message);
    }
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

export const RicercaFilm4 = async (t, type) => {

    const url = URL_BASE + `t=${t}&type=${type}`;

    try {

        const response = await fetch(url);
        const result = await response.json();
                
        await viewItems4(result);

    } catch (error) {

        console.log(error.message);
    }
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

export const RicercaFilm5 = async (t, type) => {

    const url = URL_BASE + `t=${t}&type=${type}`;

    try {

        const response = await fetch(url);
        const result = await response.json();
                
        await viewItems5(result);

    } catch (error) {

        console.log(error.message);
    }
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

export const RicercaFilm6 = async (t, type) => {

    const url = URL_BASE + `t=${t}&type=${type}`;

    try {

        const response = await fetch(url);
        const result = await response.json();
                
        await viewItems6(result);

    } catch (error) {

        console.log(error.message);
    }
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

export const RicercaFilm_SpinOFF = async (t, type) => {

    const url = URL_BASE + `t=${t}&type=${type}`;

    try {

        const response = await fetch(url);
        const result = await response.json();
                
        await viewItemsSpinn(result);

    } catch (error) {

        console.log(error.message);
    }
};

const viewItemsSpinn = (item) =>{
   replaceSpinnContent(item);
}

const replaceSpinnContent = (movie) => {
    const img_vecchia = document.getElementById("card-image-spinoff1");

    img_vecchia.src = `${movie.Poster}`;
}

export const RicercaFilm_SpinOFF2 = async (t, type) => {

    const url = URL_BASE + `t=${t}&type=${type}`;

    try {

        const response = await fetch(url);
        const result = await response.json();
                
        await viewItemsSpinn2(result);

    } catch (error) {

        console.log(error.message);
    }
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

/*
import {BASE_URL} from "./config.js"

export const apilist = async (s, type) => {
  const url = BASE_URL + `s=${s}&type=${type}`;
  const responce = await fetch(url);
  const result = await responce.json();
  const items = result.Search;
  viewItems(items);
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
      const div = document.getElementById(`film${i}`);
      const img = document.getElementById(`film-img-${i}`);
      const anno = document.getElementById(`film-anno-${i}`);
      const titolo = document.getElementById(`film-titolo-${i}`);

      const h3 = document.createElement("h3");
      const node = document.createTextNode(movie.Title);
      h3.appendChild(node);
      div.replaceChild(h3, titolo);
        
      const para = document.createElement("p");
      const node2 = document.createTextNode(movie.Year);
      para.appendChild(node2);
      div.replaceChild(para, anno);

      img.src = `${movie.Poster}`;
  
    };
    
    */

const traduciTitolo = (titolo) => {
    const stringa = titolo.replace(/\s/g, "%20");  // Trasforma gli gli spazzzzi in %20 per ricerca migliore
    return stringa;
}
