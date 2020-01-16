// Define global variables and themed Array.
let carArray = ["ae86", "silvia", "supra", "rx7", "180sx"];
let car;// = $('#gif-search').val();
//let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + car + "&limit=10&rating=g&api_key=iteCBHWxKTj06159RB4MDy59EObpbeRg";


$(document).ready(() => {
// Create Buttons for each item in Array and input to DOM.
    function generateButtons() {

        $("#button-div").empty();

        for (var i = 0; i < carArray.length; i++) {
            
            let btn = $("<button>");
            btn.addClass("gif-button");
            btn.attr("data-name", carArray[i]);
            btn.text(carArray[i]);
            $("#button-div").append(btn);
        };
    };


    // Grab user input and onClick to add input to Array.
    $("#add-gif").on("click", function(event) {
        event.preventDefault();
        let car = $("#gif-search").val();
        carArray.push(car);
        
        generateButtons()
        
    });

    generateButtons()

    // Use "GET" method to access Giphy API.
    $(".gif-button").on("click", function() {
        car = $(this).attr("data-name");
        let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + car + "&limit=10&rating=g&api_key=iteCBHWxKTj06159RB4MDy59EObpbeRg";
        

        $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
            console.log(response);
            let results = response.data;
            
            for ( var j = 0; j < results.length; j++) {
                let imgDiv = $("<div>");
                let rating = results[j].rating;
                let paragraph = $("<p>");
                paragraph.text("rating: " + rating);
                let gifImg = $("<img>");
                gifImg.attr("src", results[j].images.fixed_height.url);
                imgDiv.prepend(paragraph);
                imgDiv.prepend(gifImg);
                $("#giphy-div").prepend(imgDiv);
            };





            
        }); 
    });



});

// Input loaded Giphy images to -'giphy-div' with DOM manipulation.