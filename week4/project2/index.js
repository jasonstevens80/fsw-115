function planets() {
    axios.get("https://swapi.dev/api/planets/")
    .then((response) => {
        for (i = 0; i < response.data.results.length; i++) {
            const h1 = document.createElement("h1")
            h1.innerHTML = `${response.data.results[i].name}`;
            let data = document.getElementById("dataList");
            data.append(h1);
        }
    })
    .catch ((error) => alert("error"));
}

function species() {
    axios.get("http://swapi.dev/api/species/")
    .then((response) => {
        for (i = 0; i < response.data.results.length; i++) {
            const h1 = document.createElement("h1")
            h1.innerHTML = `${response.data.results[i].name}`;
            let data = document.getElementById("dataList");
            data.append(h1);
        }
    })
    .catch ((error) => alert("error"));
}