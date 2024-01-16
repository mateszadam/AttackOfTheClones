let People;
let Species;
let Planets;
let Starships;
let Vehicles;
let perjel = String("/");
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
            genDatas("people", "characters", People);
            genDatas("species", "species", Species);
            genDatas("planets", "planets", Planets);
            genDatas("starships", "starships", Starships);
            genDatas("vehicles", "vehicles", Vehicles);
            
        }).then(data => {
            setTimeout(function () {
                onClicks();
            }, 2000)
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
    if (select === 'species'){
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
    }
    else if (select == 'people'){
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
    }
    else if (select == 'planets'){
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
<<<<<<< HEAD
    else if (select == 'starships' || select == 'vehicles'){
        ulInner =`
=======
    }
    else if (select == 'starships' || select == 'vehicles'){
        ulInner = `
>>>>>>> 7205e0a9ab7230b12665ff7690a643b92255cf7d
            <li>Name: ${thing.name}</li>
            <li>Model: ${thing.model}</li>
            <li>Manufacturer: ${thing.manufacturer}</li>
            <li>Cost in credits: ${thing.cost_in_credits}</li>
            <li>Length: ${thing.lenght}</li>
            <li>Max speed: ${thing.max_atmosphering_speed}</li>
            <li>Crew: ${thing.crew}</li>
            <li>Passengers: ${thing.passengers}</li>

        `
    }
    document.querySelector('.modal-body').innerHTML = ulInner;

}

<<<<<<< HEAD
function selectById(event) {
    let selected;
    if(event.target.dataset.id == undefined){
        console.log(event.target.parentElement);
        selected = event.target.parentElement.parentElement.dataset.id;
    }
    else{
        console.log("def");
        selected = event.target.dataset.id;
    }
    
    console.log(selected);
    fetch('https://bgs.jedlik.eu/swapi/api/' + selected)
        .then(response => response.json())
        .then(data => {
            createDiv(data, selected.split(perjel)[0]);
        })
        .catch(error => {
            // Handle any errors here
            console.error(error);
        });

}

function genDatas(data1, img, idS) {
=======
function selectById(e) {
    const selected = e.dataset.id;
    const response = fetch('https://bgs.jedlik.eu/swapi/api/' + selected);
    const selectedThing = selected.split("/")
    const thing = response.json();
    this.createDiv(thing, selectedThing[0]);
}
function genSmallSpeciesDatas() {
>>>>>>> 7205e0a9ab7230b12665ff7690a643b92255cf7d
    let row = "";
    let card = "";
    let peoples = "";
    console.log(idS);
    idS.forEach(element => {
        peoples += element + ",";
    });
        fetch(`https://bgs.jedlik.eu/swapi/api/group/${data1}?ids=` + peoples)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.forEach(element => {
                card = "";
                card = `
                <div class="card" data-id="${data1.toString() + perjel.toString() + element.id.toString()}">
                    <p class="card-title">${element.name}</p>
                    <p class="card-text"></p>
                    <div class="center">
                        <img class="card-img-top" src="https://bgs.jedlik.eu/swimages/${img}/${element.id}.jpg"></img>
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
<<<<<<< HEAD

function onClicks() {
    let cards = document.querySelectorAll('.card');
    console.log(cards);
    cards.forEach(element => {
        element.addEventListener('click', selectById);
    });
}
=======
>>>>>>> 7205e0a9ab7230b12665ff7690a643b92255cf7d
