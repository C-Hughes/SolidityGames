//Show/hide element
function toggleElement(param) {
    var x = document.getElementById(param);
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

//Function to set localstorage & change style wh en day/night toggle is pressed.
function toggleDayNight(changeTo){

    if (changeTo == "day"){
        //Set Colours
        var primaryDay = "#F5F6FA";
        var secondaryDay = "#FFFFFF";
        var headerDay = "#F5F5F5";
        var textColorDay = "#172130";

        //Change theme to day colours
        document.getElementById("dayNightBtn").innerHTML = '<span title="Night Mode" onclick="toggleDayNight(\'night\')"><i class="far fa-moon" aria-hidden="true"></i></span>';

        var elements = document.getElementsByClassName("primary");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor=primaryDay;
            elements[i].style.color=textColorDay;
        }
        elements = document.getElementsByClassName("secondary");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor=secondaryDay;
            elements[i].style.color=textColorDay;
        }

        elements = document.getElementsByClassName("header");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor=headerDay;
            elements[i].style.color=textColorDay;
        }
        localStorage.setItem("theme", "day");
    } else {
        //Change theme to night colours
        //Set Colors
        var primaryNight = "#1A1B1F";
        var secondaryNight = "#202126";
        var headerNight = "#2A2B31";
        var textColorNight = "#A1A29A";

        document.getElementById("dayNightBtn").innerHTML = '<span title="Day Mode" onclick="toggleDayNight(\'day\')"><i class="far fa-sun" aria-hidden="true"></i></span>';

        var elements = document.getElementsByClassName("primary");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor=primaryNight;
            elements[i].style.color=textColorNight;
        }
        elements = document.getElementsByClassName("secondary");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor=secondaryNight;
            elements[i].style.color=textColorNight;
        }

        elements = document.getElementsByClassName("header");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor=headerNight;
            elements[i].style.color=textColorNight;
        }
        localStorage.setItem("theme", "night");
    }
};


//Set local storage if not initialised
if (!localStorage.getItem("theme")){
    localStorage.setItem("theme", "night");
} else {
    //Set day/night
    toggleDayNight(localStorage.getItem("theme"));
    completedStatus();
}

function completedStatus(){
    //Check if any challanges have been completed
    if (localStorage.getItem("warmUpComplete")){
        document.getElementById("warmUpBtn").classList.add("w3-green");
        document.getElementById("warmUpBtn").innerHTML = "1. WarmUp <i class=\"fas fa-check\"></i>";
    }
}