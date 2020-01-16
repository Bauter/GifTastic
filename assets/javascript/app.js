// Define global variables and themed Array.
let carArray = ["ae86", "is300", "supra", "rx7", "180sx"];
let car;
let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + car + "&limit=10&rating=g&api_key=iteCBHWxKTj06159RB4MDy59EObpbeRg";

// Use "GET" method to access Giphy API.
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);
});
// Create Buttons for each item in Array and input to DOM.
function createButtons() {

    $('#button-div').empty();

    for(var i =0; i<carArray.length; i++) {
        // create button variable
        let btn = $('<button>');
        // Adding class
        btn.addClass("gif");
        // Adding data-attr.
        btn.attr("data-name", carArray[i]);
        // Input text to button
        btn.text(carArray[i]);
        // Append new button to div
        $('#button-div').append(btn);
    }
    




}
// Grab user input and onClick to add input to Array.
$('#add-gif').on('click', function(event) {
    event.preventDefault();
    // Grab text from input
    car = $('#gif-search').val().trim().toLowerCase();
    // car is added to array
    carArray.push(car);


    createButtons();
    
})

createButtons();

// Input loaded Giphy images to -'giphy-div' with DOM manipulation.