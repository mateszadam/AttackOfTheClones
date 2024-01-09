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

function createDiv(thing, select) {
    let div = document.createAttribute('div');
    let ul = document.createAttribute('ul');
    let ulInner = '';
    if (select === 'species')
        ulInner = `  
            <li>Name: ${thing.name}</li>
            <li>Classification: ${thing.classification}</li>
            <li>Designation: ${thing.designation}</li>
            <li>Average height: ${thing.average_height}</li>
            <li>Skin colors: ${thing.skin_colors}</li>
            <li>Hair colors: ${thing.hair_colors}</li>
            <li>Eye colors: ${thing.eye_colors}</li>
            <li>Average lifespan: ${thing.average_lifespan}</li>
            <li>Homeworld: ${thing.homeworld}</li>
            <li>Language: ${thing.language}</li>
        `
    else if (select == 'people')
        ulInner = `
            <li>Name: ${thing.name}</li>
            <li>Height: ${thing.height}</li>
            <li>Mass: ${thing.mass}</li>
            <li>Hair color: ${thing.hair_color}</li>
            <li>Skin color: ${thing.skin_color}</li>
            <li>Eye color: ${thing.eye_color}</li>
            <li>Birth year: ${thing.birth_year}</li>
            <li>Gender: ${thing.gender}</li>
        `
    else if (select == 'planets')
        ulInner = `
            <li>Name: ${thing.name}</li>
            <li>Rotation period: ${thing.rotation_period}</li>
            <li>Orbital period: ${thing.orbital_period}</li>
            <li>Diameter: ${thing.diameter}</li>
            <li>Climate: ${thing.climate}</li>
            <li>Gravity: ${thing.gravity}</li>
            <li>Terrain: ${thing.terrain}</li>
            <li>Population: ${thing.population}</li>
        `
    else if (select == 'starships'){
        ulInner = `[{"name":"CR90 corvette","model":"CR90 corvette","manufacturer":"Corellian Engineering Corporation","cost_in_credits":"3500000","length":"150","max_atmosphering_speed":"950","crew":"30-165","passengers":"600","cargo_capacity":"3000000","consumables":"1 year","hyperdrive_rating":"2.0","MGLT":"60","starship_class":"corvette","pilots":[],"films":["1","3","6"],"created":"2014-12-10T14:20:33.369000Z","edited":"2014-12-20T21:23:49.867000Z","url":"2","id":"2"}]
            <li>Name: ${thing.name}</li>
            <li>Model: ${thing.model}</li>
            <li>Manufacturer: ${thing.manufacturer}</li>
            <li>Cost in credits: ${thing.cost_in_credits}</li>
            <li>Length: ${thing.lenght}</li>
            <li>Max speed: ${thing.max_atmosphering_speed}</li>
            <li>Crew: ${thing.crew}</li>
            <li>Passengers: ${thing.passengers}</li>

<<<<<<< HEAD
        `
    }
}

function selectById(e) {
    const selected = e.dataset.id;
    const response = fetch('https://bgs.jedlik.eu/swapi/api/' + selected);
    const thing = response.json();
    this.createDiv(thing, selected);
}
=======
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
>>>>>>> 99d961d35df03e6642d6a84a4f999fefdc07df46
