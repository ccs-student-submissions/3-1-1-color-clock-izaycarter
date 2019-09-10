
    (function() {
        "use strict";

        var currentTime, hours, minutes, seconds, hexHours, hexMinutes, hexSeconds, progress;

        var $colorClock = document.querySelector(".color-clock");
        var $colorClockText = document.querySelector(".color-clock-text");
        var $colorClockProgressBar = document.querySelector(".color-clock_progress-bar");

        var isHovering = false;

        $colorClock.addEventListener("mouseover", function() {
            isHovering = true;

            isHovering = !isHovering;
        });

        $colorClock.addEventListener("mouseout" , function() {
            isHovering = false;
        });


        setInterval(function() {
            if(isHovering= true){

                currentTime = new Date();

                hexHours = ("0" + currentTime.getHours().toString(16)).slice(-2);
                hexMinutes = ("0" + currentTime.getMinutes().toString(16)).slice(-2);
                hexSeconds = ("0" + currentTime.getSeconds().toString(16)).slice(-2);

                $colorClockText.textContent = hours + ":" + minutes + ":" + seconds;
            }
            else{
                currentTime = new Date();
                hours = ("0" + currentTime.getHours()).slice(-2);
                minutes = ("0" + currentTime.getMinutes()).slice(-2);
                seconds = ("0" + currentTime.getSeconds()).slice(-2);

                $colorClockText.textContent = hours + ":" + minutes + ":" + seconds;
        }

        },1000);
    })();
