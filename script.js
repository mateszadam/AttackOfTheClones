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
        <div class="list">
            <h1 class="modal__title">${thing.name}</h1>
            <ul>
            <li><span>Classification: ${thing.classification}</span></li>
            <li><span>Designation: ${thing.designation}</span></li>
            <li><span>Average height: ${thing.average_height}</span></li>
            <li><span>Skin colors: ${thing.skin_colors}</span></li>
            <li><span>Hair colors: ${thing.hair_colors}</span></li>
            <li><span>Eye colors: ${thing.eye_colors}</span></li>
            <li><span>Average pfespan: ${thing.average_lifespan}</span></li>
            <li><span>Homeworld: ${thing.homeworld}</span></li>
            <li><span>Language: ${thing.language}</span></li>
          </ul>
        </div>
            `
    }


    else if (select == 'people'){
        upnner = `
            <p>Name: ${thing.name}</>
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
        `}
    else if (select == 'starships' || select == 'vehicles'){
        ulInner =` 
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
            createDiv(data[0], selected.split(perjel)[0]);
        })
        .catch(error => {
            // Handle any errors here
            console.error(error);
        });

}



function genDatas(data1, img, idS) {

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
            document.querySelector(`.${img}`).innerHTML += row;
        })
        .catch(error => {
            // Handle any errors here
            console.error(error);
        });
}

function onClicks() {
    let cards = document.querySelectorAll('.card');
    console.log(cards);
    cards.forEach(element => {
        element.addEventListener('click', selectById);
        element.addEventListener('click', function () {
            let fix = document.querySelector('.fix');
            fix.style.opacity = 1;
            fix.style.display = "block";
            
            
        });
    });
}
