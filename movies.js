const apiKey = "483aed68"
const searchBtn = document.querySelector("#searchBtn");
const input = document.querySelector("#input");
const movieTitle = document.querySelector(".movieTitle");
const imgHolder = document.querySelector(".imgholder");
const titleBox = document.querySelector(".titleBox")
const info = document.querySelector(".info")
let main = document.getElementById("#main")


searchBtn.addEventListener('click',function(e){ 

    e.preventDefault();
    let word = input.value;

    if(input.value === ""){
        alert("Type Movie Name")
    }
    else{
        getData(word);
        document.getElementById("main").classList.remove("mainHide");
    }
})

async function getData(word){
    //Fetching API
    const url = `https://www.omdbapi.com/?t=$${word}&apikey=483aed68`
    const res = await fetch(`${url}`)
    const data = await res.json();

    // if(Response === True){

        // Movie poster 
    let poster = document.createElement('img')
    poster.src = data.Poster
    poster.classList.add("moviePoster")
    imgHolder.appendChild(poster)

    // Movie Title 
    let title = document.createElement('h1');
    title.innerText = data.Title
    title.classList.add('movieTitle');
    imgHolder.appendChild(title);

    // Released Date 
    let date = document.createElement('p')
    date.innerText = "Released: " + data.Released
    date.classList.add("date");
    info.appendChild(date);

    // OverView
    let plot = document.createElement('p')
    plot.innerText = data.Plot
    plot.classList.add("date");
    info.appendChild(plot);

    // Runtime
    let runtime = document.createElement('span')
    runtime.innerText = data.Runtime
    runtime.classList.add("runtime");
    info.appendChild(runtime);

    // Runtime
    let director = document.createElement('p')
    director.innerText = "Director: " + data.Director
    director.classList.add("director");
    info.appendChild(director);

    // Runtime
    let genre = document.createElement('p')
    genre.innerText = "Genre: " + data.Genre
    genre.classList.add("genre");
    info.appendChild(genre);

    console.log(data);
    console.log(data.Title);
    console.log(data.Poster);
    console.log(data.Released);
    console.log(data.Response);

    // const movieName = data.Title
    // titleBox.innerText = movieName


    //  let Plot = data.Plot
    // plotbox.innerText = Plot
    // }

    
    
}

    // console.log(data);
    // console.log(data.Title);
    // console.log(data.Poster);
    // console.log(data.Plot);
    // console.log(data.Runtime);
    // console.log(data.Director);
    // console.log(data.Genre);

