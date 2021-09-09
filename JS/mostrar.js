const url_base = 'https://api.themoviedb.org/3/';
const llave = '71af66658989368f32199a9e2250ec32';
const lenguage = 'es';
const fil = 'genre/movie/list?';
const filtro = 'discover/movie?';
const filtro2 = 'trending/tv/day?';
import {
    generos,
    mostrar
} from './Datos.js';

//categoria de generos
generos(url_base + fil + new URLSearchParams({
    api_key: llave,
    language: lenguage,
}));

//se muestra por genero
const genero = document.getElementById('categoria');
genero.addEventListener('change', () => mostrar(url_base + filtro + new URLSearchParams({
    api_key: llave,
    language: lenguage,
    with_genres: genero.value,
})), false);

//listar series
mostrar(url_base + filtro2 + new URLSearchParams({
    api_key: llave,
    language: lenguage,
}))