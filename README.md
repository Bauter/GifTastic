# GifTastic

## What is this repo?

This repo was created to design a webpage with dynamic images and to practice using API's and using the AJAX method to retrieve data          .

-Simply click one of the preloaded buttons to generate 10 gifs in a "paused" state. Click on each Gif to animate it, and once more to stop it.

-If you wish to search for new gifs, input your request into the search bar and hit search. A new button will appear next to the preloaded buttons, click on the new button to load some gifs.

-Each active gif can be identified by the glowing blue shadow displayed on click. 



## How was this project created?

-Coding was done using Visual Studio Code ("https://code.visualstudio.com/") a text editor can be downloaded from their website.

-The styling for this project was done using CSS and media queries to control page responsiveness.

-Local CSS file created and used to style. Linked in between 'head' tags and within an opening 'script' tag, the file path relative to the html file, and closed by a closing script tag. 

-assets folder created to hold CSS code, JS code, and images. 

-Giphy.developers API was used to load gig images into this page. To make use of Giphy's API, go to (https://developers.giphy.com/) and create an account to get started. Be sure to read the documentation to understand how to make use of Giphy's API 

### Javascript/Jquery
-Javascript file was created to write the logic for the gif generator using jquery library. creating functions to: <br>
 -Generate buttons function was used to loop through a 'car' themed array of strings and utilize jquery methods of 'addClass', 'attr', and 'text' to create buttons and place them on the page with DOM manipulation.
 -Each search term is then pushed to this array and a new button is created.

 -Event listeners are used to capture click events on the "search" button, each generated button from the array, and each gif image on the page.

 -The search button grabs the value of the input field (search bar) and assign's it to a variable that is then pushed to the array, the the generateButtons function is called to created a new button.
 -The array buttons (generated buttons) use a variable to assign the 'data-name' attribute  to the button. Then the ajaxCall function is called making use of the variable in the API url to access the API database and load gifs related to that specific data name. A onClick function is called to evaluate the state of the generated images and insure they function dynamically.
 -The Gif images themselves become buttons, making use of a conditional statement inside the onClick function that evaluates the image data-state. If still the images url is changed to an active one, "playing" the gif. Each active image in assigned a box shadow using jquery css method to modify the styling inside the if statement. If the data-state is equal to animate, The image url changes back to a still version and the css method is once again used to apply a box shadow of 'none'.

 -The ajaxCall method uses jquery's ajax method to retrieve the data from the API. The data-name that is assigned to the variable mentioned before is placed in a specific location within the API url that allows for multiple searches. Then a url (combined with the data-name search term) and method known as "GET" is used to retrieve the information. Within this ajax function lies a chained function called 'then'. 
 -The then method is used to determine what to do with the data upon retrieval. Inside a variable is assigned the value of the response (saving time when using dot notation to define the path of said items we wish to retrieve). A for loop is then used to loop through the retrieved data array. Within this for loop, for each item in the array, a div, paragraph and img element is create using jquery methods, styled using jquery css methods, and then placed in the page using the jquery prepend method.

#### Guidelines for Collaboration

-As I am still new to coding, and my initial projects will be used to create a portfolio to show to potential employers, i ask that no modifications are made at this time.

**However**

 -Any input to improve my coding would be GREATLY appreciated. I am not opposed to the files being pulled for the sake of modifying and using as an example to teach/explain alt. methods, better practice, etc. Again I would ask they not be pushed to the repo to modify the initial document, but instead be sent to me an some alt. way.

 --Thank you for taking the time to look over this 'README' file--