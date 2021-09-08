import {
    generos,
    peliculas
} from './Datos.js';

//categoria de generos
generos('genre/movie/list?');

//se muestra por genero
const genero = document.getElementById('categoria');
genero.addEventListener('change', () => peliculas(genero.value), false);