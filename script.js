// Write your JavaScript code here!

// const { pickPlanet, addDestinationInfo, formSubmission, myFetch } = require("./scriptHelper");

window.addEventListener("load", function () {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    // let listedPlanetsResponse;

    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
console.log(listedPlanets, "firstthen");
    }).then(function () {
        console.log(listedPlanets, "Secondthen")
        let randomPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, randomPlanet.name,
            randomPlanet.diameter,
            randomPlanet.star,
            randomPlanet.distance,
            randomPlanet.moons,
            randomPlanet.image);
    })

    let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";
    let form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let pilotInput = document.querySelector("input[name=pilotName]");
        let pilot = pilotInput.value;

        let coPilotInput = document.querySelector("input[name=copilotName]");
        let coPilot = coPilotInput.value;

        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let fuelLevel = fuelLevelInput.value;

        let cargoLevelInput = document.querySelector("input[name=cargoMass]");
        let cargoLevel = cargoLevelInput.value;

        formSubmission(document, list, pilot, coPilot, fuelLevel, cargoLevel);
    });

});
