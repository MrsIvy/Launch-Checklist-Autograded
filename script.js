// Write your JavaScript code here!

const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    async function fetchPlanets() {
        try {
listedPlanetsResponse = await myFetch();
console.log("listed Planets Repsonse:", listedPlanetsResponse);
        } catch (error) {
            console.log("Error fetching planets:", error);
        }
    }
    fetchPlanets()

    let randomPlanet = pickPlanet(listedPlanetsResponse);
    addDestinationInfo(document, randomPlanet.name,
        randomPlanet.diameter,
        randomPlanet.star,
        randomPlanet.distance,
        randomPlanet.moons,
        randomPlanet.imageUrl);
} catch (error);

        listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
    })

 });