import { Tamagotchi } from './tamagotchi.js';
import $ from "jquery";
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';



// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=kitty&api_key=YOUR_API_KEY&limit=5");
// xhr.done(function(data) { console.log("success got data", data); });


$(document).ready(function() {
  $("form#name").submit(function(event) {
    event.preventDefault();

    $("#game").show();
    $("#name").hide();

    let name = $("#enterName").val();
    let newTamagotchi = new Tamagotchi(name);
    $("#food-bar").text(newTamagotchi.foodLevel);
    $("#play-bar").text(newTamagotchi.playLevel);
    $("#energy-bar").text(newTamagotchi.energyLevel);
    newTamagotchi.setHunger();
    newTamagotchi.setPlay();
    newTamagotchi.setEnergy();
  

    $("#feed").click(function() {
      newTamagotchi.feed();
    });
    $("#play").click(function() {
      newTamagotchi.play();
    });
    $("#sleep").click(function() {
      newTamagotchi.nap();
    });
  

    $("#reset").click(function() {
      $("#dead").hide();
      $("#game").hide();
      $("#name").show();
    });
  });
}); 