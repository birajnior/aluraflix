let lista_filmes = [
    'https://br.web.img2.acsta.net/pictures/17/09/29/21/15/4233147.jpg',
    'https://br.web.img2.acsta.net/medias/nmedia/18/89/43/82/20052140.jpg', 'https://upload.wikimedia.org/wikipedia/pt/7/7f/Arrow_%28cast%29.jpg',
    'https://cineclick-static.flixmedia.cloud/1280/69/1080x1620_1591191585.jpg',
    'https://cinema10.com.br/upload/series/series_1410_pswat.jpg',
    'https://media.fstatic.com/jWg862ksbIPOCPdYCK5UPtqZ9Ag=/210x312/smart/media/movies/covers/2021/10/wP9Ho6PCmmrFHLK1VjSAwZKVKtX.jpeg',
    'https://images.fanart.tv/fanart/station-19-5e51513235adc.jpg',
    'https://upload.wikimedia.org/wikipedia/pt/b/bd/Click_film.jpg'    
]
let listaNomes = [
    'The Flash',
    'Os Vingadores',
    'Arqueiro Verde',
    'Tropa de Elite',
    'S.W.A.T.',
    '9-1-1',
    'STATION 19',
    'CLICK'
    
]

document.getElementById('listaFilmes').innerHTML = ""
for (let i = 0; i < lista_filmes.length; i++) {
    document.getElementById("listaFilmes").innerHTML +=
        "<div>" +
        "<img src=" +
        lista_filmes[i] +
        ">" +
        "<p id=" +
        "posterName" +
        ">" +
        listaNomes[i] +
        "</p>" +        
        "</div>";
}

function adicionarFilme() {
    let addFilmes = document.getElementById('filme').value
    let addNomes = document.getElementById('nome-filme').value
    if (addFilmes.endsWith('.jpg' || '.png')) {
        if (lista_filmes.includes(addFilmes)) {
            alert("Essa Série já foi adicionada");
            document.getElementById("filme").value = "";
            document.getElementById("nome-filme").value = "";
        } else {
            lista_filmes.push(addFilmes);
            listaNomes.push(addNomes);
            document.getElementById('listaFilmes').innerHTML = "";
            for (let i = 0; i < lista_filmes.length; i++) {
                document.getElementById("listaFilmes").innerHTML +=
                    "<div>" +
                    "<img src=" +
                    lista_filmes[i] +
                    ">" +
                    "<p id=" +
                    "posterName" +
                    ">" +
                    listaNomes[i] +
                    "</p>" +        
                    "</div>";
            }          
        }
    } else {
        console.error("Endereço de filme invalido")
    }
}

// function litarFilmesNaTela(filme) {}
//     console.log(filme)
//     let filmesFavoritos = "<img src=" + filme + ">"
//     let listaFilmes = document.getElementById('listaFilmes')
//     listaFilmes.innerHTML = listaFilmes.innerHTML + filmesFavoritos
//{}
