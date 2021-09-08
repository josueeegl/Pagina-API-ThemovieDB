const url_base = 'https://api.themoviedb.org/3/';
const llave = '71af66658989368f32199a9e2250ec32';
const lenguage = 'es';

//Desplegar las categorias en el combo box
export const generos = (parametro) => {
    fetch(url_base + parametro + new URLSearchParams({
        api_key: llave,
        language: lenguage,
    })).then((resp) => {
        if (resp.status !== 200) {
            console.log(`Error en api: ${resp.statusText}`);
            return;
        }
        resp.json().then((data) => {
            var html = document.getElementById('categoria').innerHTML;
            data.genres.forEach(element => {
                html += `<option value="${element.id}">${element.name}</option>`;
            })
            document.getElementById('categoria').innerHTML = html;
        });
    });
}

//obtenemos detalles de peliculas por genero 
const filtro = 'discover/movie?';
export const peliculas = (valor) => {
    fetch(url_base + filtro + new URLSearchParams({
        api_key: llave,
        language: lenguage,
        with_genres: valor,
    })).then((resp) => {
        if (resp.status !== 200) {
            console.log(`Error en api: ${resp.statusText}`);
            return;
        }
        resp.json().then((data) => {
            var html = '';
            data.results.forEach(element => {
                html += `<a href="https://image.tmdb.org/t/p/w500${element.poster_path}"><img src="https://image.tmdb.org/t/p/w500${element.poster_path}"/></a>`;
            })
            document.getElementById('peliculas').innerHTML = html;
            console.log(genero.value);
        });
    });
}