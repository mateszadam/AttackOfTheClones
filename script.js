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
            document.querySelector(".desc").innerHTML = data[0].opening_crawl
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
    let films = '';
    if (select === 'species'){
        filmList = thing.films.join(',');
        fetch('https://bgs.jedlik.eu/swapi/api/group/films?ids=' + filmList)
        .then(response => response.json())
        .then(data => {
            console.log("dsad");
            data.forEach(element => {
                films += `<p><span>${element.title}</span></p>`;
            });
            ulInner = ` 
            <div class="list">
                <h1 class="modal__title">${thing.name}</h1>
                <p><span>Classification: ${thing.classification}</span></p>
                <p><span>Designation: ${thing.designation}</span></p>
                <p><span>Average height: ${thing.average_height}</span></p>
                <p><span>Skin colors: ${thing.skin_colors}</span></p>
                <p><span>Hair colors: ${thing.hair_colors}</span></p>
                <p><span>Eye colors: ${thing.eye_colors}</span></p>
                <p><span>Average pfespan: ${thing.average_lifespan}</span></p>
                <p><span>Homeworld: ${thing.homeworld}</span></p>
                <p><span>Language: ${thing.language}</span></p>
                <p><span>Films:</span></p>
                ${films}
            </div>
                `
                console.log(films);
            document.querySelector('.modal-inner').innerHTML = ulInner;

        })
        .catch(error => {
            // Handle any errors here
            console.error(error);
        });
        

    }


    else if (select == 'people'){
 
        console.log(thing.films);
        filmList = thing.films.join(',');
        console.log(filmList);
        fetch('https://bgs.jedlik.eu/swapi/api/group/films?ids=' + filmList)
        .then(response => response.json())
        .then(data => {
            console.log("dsad");
            data.forEach(element => {
                console.log(element);
                films += `<p><span>${element.title}</span></p>`;
            });
            ulInner = `
            <div class="list">
                <h1 class="modal__title">${thing.name}</h1>
                <p><span>Height: ${thing.height}</span></p>
                <p><span>Mass: ${thing.mass}</span></p>
                <p><span>Hair color: ${thing.hair_color}</span></p>
                <p><span>Skin colors: ${thing.skin_color}</span></p>
                <p><span>Eye colors: ${thing.eye_color}</span></p>
                <p><span>Birth year: ${thing.birth_year}</span></p>
                <p><span>Gender: ${thing.gender}</span></p>
                <p><span>Films:</span></p>
                ${films}
            </div>
            `
                console.log(films);
            document.querySelector('.modal-inner').innerHTML = ulInner;

        })
        .catch(error => {
            // Handle any errors here
            console.error(error);
        });
    }
    else if (select == 'planets'){
        ulInner = `

        
        <div class="list">
            <h1 class="modal__title">${thing.name}</h1>
            <p><span>Rotation period: ${thing.rotation_period}</span></p>
            <p><span>Orbital period: ${thing.orbital_period}</span></p>
            <p><span>Diameter: ${thing.diameter}</span></p>
            <p><span>Climate: ${thing.climate}</span></p>
            <p><span>Gravity: ${thing.gravity}</span></p>
            <p><span>Terrain: ${thing.terrain}</span></p>
            <p><span>Population: ${thing.population}</span></p>
        </div>
        `}
    else if (select == 'starships' || select == 'vehicles'){
        ulInner =` 
        
        <div class="list">
            <h1 class="modal__title">${thing.name}</h1>
            <p><span>Manufacturer: ${thing.manufacturer}</span></p>
            <p><span>Cost in credits: ${thing.cost_in_credits}</span></p>
            <p><span>Length: ${thing.length}</span></p>
            <p><span>Max speed: ${thing.max_atmosphering_speed}</span></p>
            <p><span>Crew: ${thing.crew}</span></p>
            <p><span>Passengers: ${thing.passengers}</span></p>
        </div>

        `
    }

    if(ulInner != ''){
    document.querySelector('.modal-inner').innerHTML = ulInner;

}}

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
function closeBTN(){
    let fix = document.querySelector('.fix');
    fix.style.opacity = 0;
    fix.style.display = "none";
}


function onClicks() {
    let cards = document.querySelectorAll('.card');
    document.querySelector(".close").addEventListener("click", closeBTN)
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
