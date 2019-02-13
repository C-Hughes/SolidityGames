function toggleElement(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
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
        document.getElementById("dayNightBtn").innerHTML = '<button class="w3-right w3-bar-item w3-button" title="Night Mode" onclick="toggleDayNight(\'night\')"><i class="fas fa-moon" aria-hidden="true"></i></button>';

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

        document.getElementById("dayNightBtn").innerHTML = '<button title="Day Mode" class="w3-right w3-bar-item w3-button" onclick="toggleDayNight(\'day\')"><i class="fas fa-sun" aria-hidden="true"></i></button>';

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

function openTab(evt, tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-light-grey", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " w3-light-grey";
}

function completedStatus(){
    //Check if any challanges have been completed
    if (localStorage.getItem("warmUpComplete")){
        document.getElementById("warmUpBtn").classList.add("completed");
        document.getElementById("warmUpBtn").innerHTML = "1. WarmUp <i class=\"fas fa-check\"></i>";
    }
    if (localStorage.getItem("rubixiComplete")){
        document.getElementById("rubixiBtn").classList.add("completed");
        document.getElementById("rubixiBtn").innerHTML = "2. Rubixi <i class=\"fas fa-check\"></i>";
    }
    if (localStorage.getItem("odometerComplete")){
        document.getElementById("odometerBtn").classList.add("completed");
        document.getElementById("odometerBtn").innerHTML = "3. Odometer <i class=\"fas fa-check\"></i>";
    }
    if (localStorage.getItem("keepingSecretsComplete")){
        document.getElementById("keepingSecretsBtn").classList.add("completed");
        document.getElementById("keepingSecretsBtn").innerHTML = "4. keepingSecrets <i class=\"fas fa-check\"></i>";
    }
    if (localStorage.getItem("externalFactorsComplete")){
        document.getElementById("externalFactorsBtn").classList.add("completed");
        document.getElementById("externalFactorsBtn").innerHTML = "5. externalFactors <i class=\"fas fa-check\"></i>";
    }
    if (localStorage.getItem("forcedPaymentsComplete")){
        document.getElementById("forcedPaymentsBtn").classList.add("completed");
        document.getElementById("forcedPaymentsBtn").innerHTML = "6. ForcedPayments <i class=\"fas fa-check\"></i>";
    }
    if (localStorage.getItem("simpleDAOComplete")){
        document.getElementById("simpleDAOBtn").classList.add("completed");
        document.getElementById("simpleDAOBtn").innerHTML = "7. simpleDAO <i class=\"fas fa-check\"></i>";
    }
}

//Set local storage if not initialised
if (!localStorage.getItem("theme")){
    localStorage.setItem("theme", "night");
} else {
    //Set day/night
    toggleDayNight(localStorage.getItem("theme"));
    completedStatus();
}

var path = window.location.pathname;
if(path.substr(path.length - 1) == "/"){
    path = path.substring(0, path.length - 1);
}
$("a[href*='" + path + "']").addClass("current").removeClass("completed");