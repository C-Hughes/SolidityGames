function toggleElement(param) {
    var x = document.getElementById(param);
    if (x.style.display == 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
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
        var textColorNight = "#bebebe";

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
    if (localStorage.getItem("randomnessComplete")){
        document.getElementById("randomnessBtn").classList.add("completed");
        document.getElementById("randomnessBtn").innerHTML = "8. Randomness <i class=\"fas fa-check\"></i>";
    }
}

function acceptConsent(){
    // Get the checkbox
    var checkBox = document.getElementById("surveyCheck");
    // Get the output text
    var btn = document.getElementById("continueBtn");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

function showSurvey(){
    var surveyConsent = document.getElementById("surveyConsent");
    var survey = document.getElementById("survey");

    survey.className = survey.className.replace(" w3-hide", " w3-show");
    surveyConsent.className += " w3-hide";
    document.body.scrollTop = document.documentElement.scrollTop = 0;
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

function showMenu(x) {
    if (x.matches) { // If media query matches
        document.getElementById('leftSidebar').style.display = 'block';
    } else {
        document.getElementById('leftSidebar').style.display = 'none';
    }
}

var x = window.matchMedia("(min-width: 768px)")
showMenu(x) // Call listener function at run time
x.addListener(showMenu) // Attach listener function on state changes