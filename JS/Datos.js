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

//obtenemos detalles de peliculas por categoria 
export const mostrar = (parametro, id) => {
    const filtro = 'discover/movie?';
    fetch(parametro).then((resp) => {
        if (resp.status !== 200) {
            console.log(`Error en api: ${resp.statusText}`);
            return;
        }
        resp.json().then((data) => {
            var html = '';
            data.results.forEach(element => {
                html += `
                            <label>${element.title} Fecha de lanzamiento: ${element.release_date}
                             <img src="https://image.tmdb.org/t/p/w500${element.poster_path}"/>
                            </label>
                        `;
            })
            document.getElementById(id).innerHTML = html;
        });
    });
}

//Listar series mas populares