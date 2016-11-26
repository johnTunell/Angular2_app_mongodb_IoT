import {Injectable} from 'angular2/core';
import * as $ from 'jquery';

/**
 * Created by Andreas on 2016-05-23.
 */

@Injectable()
export class HelpsystemService {

    runHelpSystem() {
        let helpcanvas = document.getElementById("helpcanvas");

        window.addEventListener('resize', function (event) {


            helpcanvas.width = window.innerWidth - 17;
            helpcanvas.height = window.innerHeight;
            console.log("Current width on canvas: " + helpcanvas.width);
        })

        //Draws the canvas when clicking the helpbutton
        $("#helpbutton").on("click", function () {
            helpcanvas.style.visibility = 'visible';

            //Setting the width and height for the canvas
            helpcanvas.width = window.innerWidth - 17;
            helpcanvas.height = window.innerHeight;

            var w = helpcanvas.width;
            var h = helpcanvas.height;

            //Loads sound from html file and plays it when pressing then helpbutton
            var drawsound = document.getElementById('drawsound');
            drawsound.play();

            //Hides the settingsfield
            let settingsfield = document.getElementById("settingsfield");
            $("#settingsfield").toggle(400);

            var c = document.getElementById("helpcanvas");
            var ctx = c.getContext("2d");
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

            ctx.font = "1.3em Arial";

            ctx.beginPath();
            //Start drawing the arrow object
            var arrow1 = document.getElementById("arrow1");
            ctx.drawImage(arrow1, w / 2, 125, arrow1.width / 2, arrow1.height / 2);

            let a1w = w / 2;

            //is the main animation loop where everything is drawn.
            var interval = setInterval(function () {

                //Variables that will return values on when to draw and the direction of the arrow
                let x = a1w;
                var y = 90;
                var right = false;
                var left = true;
                var stop = false;
                var passeddev = false;
                var passedset = false;
                var passedlang = false;

                return function () {
                    //Draws the arrow for each frame
                    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                    ctx.drawImage(arrow1, x, y, arrow1.width / 3, arrow1.height / 3);


                    //Adds or subtract the x coordinate of the arrow so that it moves in the desired direction
                    if (right) {
                        x += 7;
                    } else if (left) {
                        x -= 7;
                    } else if (stop) {
                        x += 0;
                    }
                    if (x < 10) {
                        left = false;
                        right = true;
                    }
                    //Stops animation, since stop makes the x coordinate static and boolean value is changed to true
                    if (passeddev && passedlang && passedset && x < w / 2.2) {
                        left = false;
                        right = false;
                        stop = true;
                    }
                    if (x > w - 50) {
                        left = true;
                        right = false;
                    }

                    //If the arrow has passed these coordinates, these booleans changes their value
                    if (x < 10) {
                        passeddev = true;
                    }
                    if (x > w - 60) {
                        passedset = true;
                    }
                    if (x > w - 350) {
                        passedlang = true;
                    }

                    //Writes text if a coordinate has been passed by the arrow, as well as drawing another arrow that
                    // points at the passed item
                    if (passeddev) {
                        if ($("#English").hasClass("activelang")) {
                            ctx.textAlign = "center";
                            ctx.fillText("Click here to view your active devices", 230, 140);
                        } else if ($("#Svenska").hasClass("activelang")) {
                            ctx.textAlign = "center";
                            ctx.fillText("Klicka här för att kolla dina aktiva enheter", 230, 140);
                        }
                        var arrow2 = document.getElementById("arrow2");
                        ctx.drawImage(arrow2, 10, 125, arrow1.width / 2.5, arrow1.height / 2.5);
                    }
                    if (passedset) {
                        if ($("#English").hasClass("activelang")) {
                            ctx.textAlign = "center";
                            ctx.fillText("Click here for settings", w - 130, 140);
                        } else if ($("#Svenska").hasClass("activelang")) {
                            ctx.textAlign = "center";
                            ctx.fillText("Klicka här för inställningar", w - 130, 140);
                        }
                        var arrow3 = document.getElementById("arrow3");
                        ctx.drawImage(arrow3, w - 140, 125, arrow2.width / 2.5, arrow2.height / 2.5);
                    }
                    if (passedlang) {
                        playsound = true;
                        if ($("#English").hasClass("activelang")) {
                            ctx.textAlign = "center";
                            ctx.fillText("Click here to change language", w - 300, 60);
                        } else if ($("#Svenska").hasClass("activelang")) {
                            ctx.textAlign = "center";
                            ctx.fillText("Klicka här för att byta språk", w - 300, 60);
                        }
                        var arrow4 = document.getElementById("arrow4");
                        ctx.drawImage(arrow4, w - 280, 50, arrow4.width / 2.5, arrow4.height / 2.5);
                    }

                    //Writes a final textbox if all pointed out x values above has been passed by the arrow
                    if (passeddev && passedlang && passedset) {
                        if ($("#English").hasClass("activelang")) {
                            ctx.textAlign = "center";
                            ctx.fillText("Click anywhere to exit", w / 2 - 20, 90);
                        } else if ($("#Svenska").hasClass("activelang")) {
                            ctx.textAlign = "center";
                            ctx.fillText("Klicka var som helst för att avsluta", w / 2 - 20, 90);
                        }
                    }
                };
            }(), 1000 / 60);
            ctx.closePath();


            //Hides canvas when clicking anywhere on it and plays a sound

            $("#helpcanvas").on("click", function () {
                helpcanvas.style.visibility = 'hidden';
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                drawsound.play();
            })
        });
    }
}

