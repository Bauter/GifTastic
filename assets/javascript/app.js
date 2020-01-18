$(document).ready(function() {
    
    
    let carArray = ["ae86", "silvia", "supra", "rx7", "180sx"];
    let gifButton;
    
    function generateButtons() {
    
        $("#button-div").empty();
            
        for (var i = 0; i < carArray.length; i++) {
            let btn = $("<button>");
            btn.addClass("gif-button");
            btn.attr("data-name", carArray[i]);
            btn.text(carArray[i]);
            $("#button-div").append(btn);
        };
    
        $("button.gif-button").on("click", function() {
            gifButton = $(this).attr("data-name");
            console.log(gifButton)
            ajaxCall();
            onClick();
        });   
    };
    
    
    // Grab user input and onClick to add input to Array.
    $("#add-gif").on("click", function(event) {
        event.preventDefault();
        let car = $("#gif-search").val();
        carArray.push(car);
        generateButtons();
    });
    
    generateButtons()
    
    // Use "GET" method to access Giphy API.
    function onClick () {
        $("img.giphy").on("click", function() {
            console.log("clicked a giphy");
            //console.log(state);
            console.log($(this).attr("src"));
            let state= $(this).attr("data-state");
             
            if (state == "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
                $(this).css({
                    "box-shadow":" 0 5px 8px 0 blue",
                    border: "solid 3px blue"
                });
            } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
                $(this).css({
                    "box-shadow":"none",
                    border: "inset 4px"
                });
            }; 
        });   
    };

    function ajaxCall() {
        let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifButton + "&limit=10&rating=g&api_key=iteCBHWxKTj06159RB4MDy59EObpbeRg";
    
        $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
            console.log(response);
            let results = response.data;
                
            for ( var j = 0; j < results.length; j++) {
                let imgDiv = $("<div>");
                imgDiv.addClass("gif-container");
                let rating = results[j].rating;
                let paragraph = $("<p>");
                paragraph.text("rating: " + rating);
                let gifImg = $("<img>");
                gifImg.attr({
                    "data-animate": results[j].images.fixed_height.url,
                    "data-still": results[j].images.fixed_height_still.url,
                    "data-state": "still",
                    src: results[j].images.fixed_height_still.url
                });
                gifImg.addClass("giphy");
                imgDiv.prepend(paragraph);
                imgDiv.prepend(gifImg);
                $("#giphy-div").prepend(imgDiv);
                    
            };
            onClick();
        }); 
    };
});
    