// Write your JavaScript code here!

// const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function () {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;


    listedPlanetsResponse = myFetch();
    console.log("listed Planets Repsonse:", listedPlanetsResponse);
    listedPlanetsResponse.then(response => {
        listedPlanets = response
    }
    ).then(() => {

        let randomPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, randomPlanet.name,
            randomPlanet.diameter,
            randomPlanet.star,
            randomPlanet.distance,
            randomPlanet.moons,
            randomPlanet.imageUrl);
    })
}
);