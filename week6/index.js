async function getData() {

    try{
        const response = await axios.get("https://swapi.dev/api/people/1")
        const homeworld = await axios.get(response.data.homeworld)
        home(homeworld, response)
        console.log(homeworld)

        const lukeData = await axios.get("https://swapi.dev/api/people/1")
    console.log(lukeData.data)
    const lukeFilmUrls = lukeData.data.films
    const movieList = []

    for(let i = 0; i < lukeFilmUrls.length; i++){
        movieList.push(axios.get(lukeFilmUrls[i]))
        

        var movieLists = document.createElement("movieList")
        movieLists.textContent = lukeFilmUrls[i]
        document.body.appendChild(movieLists)
        Promise.all(lukeFilmUrls)

        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
    
    }
    catch(error){
        console.log(error)
    }


    console.log(movieLists)
}
getData()


function home(homeworld, luke){

    const h2 = document.createElement("h2")
    h2.textContent = luke.data.name
    document.body.appendChild(h2)

    const h1 = document.createElement("h1")
    h1.textContent = homeworld.data.name
    document.body.appendChild(h1)

    
}
   

async function getAllLukeMovies(){
    
}

getAllLukeMovies()
