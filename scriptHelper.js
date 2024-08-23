// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
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
}

function validateInput(testInput) {
    if (input === "") {
        return "Empty";
    } else if (isNaN(input)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = validateInput(pilot);
    let copilotStatus = validateInput(copilot);
    let fuelStatus = validateInput(fuelLevel);
    let cargoStatus = validateInput(cargoMass);

    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
    document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;

    if (fuelStatus === "Is a number" && cargoStatus === "Is a number") {
        if (fuelLevel < 10000) {
            document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
        } else {
            document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
        }
        if (cargoLevel > 10000) {
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too high for launch";
        } else {
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too low for launch";
        }
    } else {
        document.getElementById("fuelStatus").innerHTML = "Fuel level and cargo mass must be numbers";
    }
}
let faultyItems = document.getElementById("faultyItems");
faultyItems.style.visibility = "visible";

if (fuelStatus === "Is a Number" && cargoStatus === "Is a Number") {
    if (fuelLevel < 10000) {
        document.getElementById("fuelStatus").innerHTML = "Fuel level toolow for launch";
        faultyItems.innerHTML += `<li>Fuel level too low for launch</li>`;
    } else {
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
    }
    if (cargoMass > 10000) {
        document.getElementById("cargoStatus").innerHTML = "Cargo mass too high for launch";
        faultyItems.innerHTML += `<li>Cargo mass too high for launch</li>`;
    } else {
        document.getElementById("fuelStatus").innerHTML = "Fuel level and cargo mass must be numbers";
        faultyItems.innerHTML += `<li>Fuel level and cargo mass must be numbers</li>`;
    }
}
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then(function (response) {
    });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;