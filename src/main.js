import { Tamagotchi } from './tamagotchi.js';
import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=kitty&api_key=YOUR_API_KEY&limit=5");
// xhr.done(function(data) { console.log("success got data", data); });



$(document).ready(function() {
  $("form#name").submit(function(event) {
    event.preventDefault();

    $("#game").show();
    $("#name").hide();

    let name = $(".showName").val();
    let newTamagotchi = new Tamagotchi(name);
    $("#food-bar").text(newTamagotchi.foodLevel);
    $("#play-bar").text(newTamagotchi.playLevel);
    $("#energy-bar").text(newTamagotchi.energyLevel);
    newTamagotchi.setHunger();
    newTamagotchi.setPlay();
    newTamagotchi.setEnergy();
    

    $(".showName").text(newTamagotchi.name);
    
    // if (newTamagotchi.foodLevel > 65) {
    //   $("#food-bar").removeClass();
    //   $("#food-bar").addClass('progress-bar progress-bar-success');
    // } else if ( newTamagotchi.foodLevel < 65 && newTamagotchi.foodLevel > 30) {
    //   $("#food-bar").removeClass();
    //   $("#food-bar").addClass('progress-bar progress-bar-warning');
    // } else if (newTamagotchi.foodLevel < 30) {
    //   $("#food-bar").removeClass();
    //   ("#food-bar").addClass('progress-bar progress-bar-danger');
    // }

    $("#feed").click(function() {
      newTamagotchi.feed();
    });
    $("#play").click(function() {
      newTamagotchi.play();
    });
    $("#sleep").click(function() {
      newTamagotchi.nap();
    });
    $("#movie").click(function() {
      newTamagotchi.giveMovie();
    });
    $("#cake").click(function() {
      newTamagotchi.giveCake();
    });
    $("#redBull").click(function() {
      newTamagotchi.giveRedBull();
    });
    $("#apple").click(function() {
      newTamagotchi.giveApple();
    });
    $("#tea").click(function() {
      newTamagotchi.giveTea();
    });
    $("#toy").click(function() {
      newTamagotchi.giveToy();
    });
  
    

    let down = setInterval(function() {
      $("#food-bar").html(newTamagotchi.foodLevel);
      $("#play-bar").html(newTamagotchi.playLevel);
      $("#energy-bar").html(newTamagotchi.energyLevel);
      $("#food-bar").css("width", newTamagotchi.foodLevel + "%");
      $("#play-bar").css("width", newTamagotchi.playLevel + "%");
      $("#energy-bar").css("width", newTamagotchi.energyLevel + "%");
      if (newTamagotchi.dieTime()) {
        $("#dead").show();
        $("#game").hide();
        clearInterval(down);
      }

    }, 1000);
    

    $("#reset").click(function() {
      $("#dead").hide();
      $("#game").hide();
      $("#name").show();
    });
  });
}); 