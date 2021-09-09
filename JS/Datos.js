//Desplegar las categorias en el combo box
export const generos = (parametro) => {
    fetch(parametro).then((resp) => {
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
export const mostrar = (parametro) => {
    fetch(parametro).then((resp) => {
        if (resp.status !== 200) {
            console.log(`Error en api: ${resp.statusText}`);
            return;
        }
        resp.json().then((data) => {
            var html = '';
            var header = '';
            data.results.forEach(element => {
                if (element.title !== undefined) {
                    html += `<div>
                                <label> 
                                    <img src="https://image.tmdb.org/t/p/w500${element.poster_path}"/>
                                </label>
                                <p>${element.title}</p>
                                <p>Fecha de lanzamiento: ${element.release_date}</p>
                            </div>
                        `;
                    var combo = document.getElementById('categoria');
                    header = combo.options[combo.selectedIndex].text;
                } else {

                    html += `<div>
                                <label>
                                <img src="https://image.tmdb.org/t/p/w500${element.poster_path}"/>
                                </label>
                                <p>${element.name}</p>
                                <p>Fecha de lanzamiento: ${element.first_air_date}</p>
                            </div>
                        `;
                    header = 'Series mas populares hoy';
                }

            })
            document.getElementById('header').innerHTML = header;
            document.getElementById('peliculas').innerHTML = html;
        });
    });
}