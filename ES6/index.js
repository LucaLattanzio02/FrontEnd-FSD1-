
import {addizione} from "./lib/addmodule.js";  // importo il metodo "addizione" dal modulo "addmodule.js"
import {sottrazione} from "./lib/submodule.js";  // importo il metodo "sottrazione" dal modulo "submodule.js"

console.log("La somma è: " + addizione(10, 9)); // Stampo la somma tra 10 e 9 utilizzando la funzione "addizione"
console.log("La sottrazione è: " + sottrazione(10, 9)); // Stampo la sottrazione tra 10 e 9 utilizzando la funzione "sottrazione"

// -----------------------------------------------------

import {addizione as add} from "./lib/addmodule.js";  // importo il metodo "addizione" facendolo diventare add usando "AS" dal modulo "addmodule.js"
import {sottrazione as sub} from "./lib/submodule.js";  // importo il metodo "sottrazione" facendolo diventare sub usando "AS" dal modulo "submodule.js"

console.log(add(10, 9)); // Stampo la somma tra 10 e 9 utilizzando la funzione "add"
console.log(sub(10, 9)); // Stampo la sottrazione tra 10 e 9 utilizzando la funzione "sub"

//------------------------------------------------------

import * as modullosomma from "./lib/addmodule.js"; // Importo tutti i metodi pubblici 

console.log("La somma è: " + modullosomma.addizione(1,1));

//------------------------------------------------------

import moltiplicazione, {divisione} from "./lib/nuovomodulo.js"; // Importo una funzione di default e anche una funzione pubblica (quella tra parentesi graffe)

console.log("La moltiplicazione è: " + moltiplicazione(10, 10));
console.log("La divisione è: " + divisione(10, 2));


