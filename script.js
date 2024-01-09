let People;
let Species;
let Planets;
let Starships;
let Vehicles;

getDatas();
function getDatas() {
    console.log('getDatas');
    fetch('https://bgs.jedlik.eu/swapi/api/films/5')
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            People = data[0].characters;
            Species = data[0].species;
            Planets = data[0].planets;
            Vehicles = data[0].vehicles;
            Starships = data[0].starships;
            genSmallPeopleDatas();
            genSmallSpeciesDatas();
        })
        .catch(error => {
            // Handle any errors here
            console.error(error);
        });
}

function genSmallPeopleDatas() {
    let row = "";
    let card = "";
    // console.log(People);
    let peoples = "";
    People.forEach(element => {
        peoples += element + ",";
    });
        fetch('https://bgs.jedlik.eu/swapi/api/group/people?ids=' + peoples)
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                card = "";
                card = `
                <div class="card">
                    <p class="card-title">${element.name}</p>
                    <p class="card-text"></p>
                    <div class="center">
                        <img class="card-img-top" src="https://bgs.jedlik.eu/swimages/characters/${element.id}.jpg"></img>
                    </div>
                </div>
                `;
                row += card;
                // console.log(row);
            });

            document.querySelector('.cards').innerHTML = row;
        })
        .catch(error => {
            // Handle any errors here
            console.error(error);
        });
}


function genSmallSpeciesDatas() {
    let row = "";
    let card = "";
    let peoples = "";
    console.log(Species);
    Species.forEach(element => {
        peoples += element + ",";
    });
        fetch('https://bgs.jedlik.eu/swapi/api/group/species?ids=' + peoples)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.forEach(element => {
                card = "";
                card = `
                <div class="card">
                    <p class="card-title">${element.name}</p>
                    <p class="card-text"></p>
                    <div class="center">
                        <img class="card-img-top" src="https://bgs.jedlik.eu/swimages/species/${element.id}.jpg"></img>
                    </div>
                </div>
                `;
                row += card;
            });
            // console.log(row);
            document.querySelector('.cards').innerHTML += row;
        })
        .catch(error => {
            // Handle any errors here
            console.error(error);
        });
}
