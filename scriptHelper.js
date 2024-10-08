// Write your helper functions here!

require('cross-fetch/polyfill');


function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
   let missionTarget = document.getElementById('missionTarget');
   missionTarget.innerHTML = `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${image}">
               `;
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoMass");
   

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" ||
        validateInput(cargoLevel) === "Empty") {
        alert("All fields required");
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Please check your inputs");
    } else {
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `CoPilot ${copilot} is ready for launch`;

        let launchStatus = document.getElementById("launchStatus");

        if (fuelLevel < 10000 && cargoLevel <= 10000) {
            fuelStatus.innerHTML = "Fuel level is too low for launch"
            cargoStatus.innerHTML = "Cargo mass low enough to launch"
            launchStatus.innerHTML = "Shuttle not ready for launch"
            launchStatus.style.color = "red"
        } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
            fuelStatus.innerHTML = "Fuel level is high enough for launch"
            cargoStatus.innerHTML = "Cargo mass too heavy for launch"
            launchStatus.innerHTML = "Shuttle not ready for launch"
            launchStatus.style.color = "red"
        } else if (fuelLevel < 10000 && cargoLevel > 10000) {
            fuelStatus.innerHTML = "Fuel level too low for launch"
            cargoStatus.innerHTML = "Cargo mass too heavy for launch"
            launchStatus.innerHTML = "Shuttle not ready for launch"
            launchStatus.style.color = "red"
        } else {
            fuelStatus.innerHTML = "Fuel level high enough for launch"
            cargoStatus.innerHTML = "Cargo mass low enough for launch"
            launchStatus.innerHTML = "Shuttle is ready for launch"
            launchStatus.style.color = "green"
        }
    }
}

async function myFetch() {
    let planetsReturned;
    
    
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        if (response.status >= 400) {
            throw new Error("Network response was not ok");
        } else {
            return response.json();
        }
        
    });

   
    return planetsReturned;
}


// Data is coming from API that need to be turned into JSON
// don't set API to variable
// use API directly
// check if status from api is greater than 400 alert user bad response 
// otherwise just return response But has to be JSON
// then return planetsreturned 
// 2 returns (planets returned and bad response)
// Set index 
function pickPlanet(planets) {
    let planetIndex = Math.floor(Math.random() * planets.length);
    return planets[planetIndex];
}









module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;