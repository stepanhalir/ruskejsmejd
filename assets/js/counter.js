
/* Level Counter */
/* Zaznamenání kliknutí */
let numberOfClick = 0;
let clickState = document.getElementById("datacount");

let clickarea = document.getElementById("clickarea");

clickarea.addEventListener("click", function(){
    numberOfClick++;
    clickState.innerHTML = numberOfClick;

    // Interakce s obsahem
    let datamaxnumber = document.getElementById("datamaxnumber"); // Max. click number per level
    let currentLevel = document.getElementById("datalevel");

    // level 1
    if (numberOfClick == 0) {  
    }
    if (numberOfClick >= 10) {
        //clickState.setAttribute('style', 'font-size: 30px');
        datamaxnumber.innerHTML = 100;
        currentLevel.innerHTML = "Fucker";
    }
    if (numberOfClick >= 100) {
        datamaxnumber.innerHTML = 500;
        currentLevel.innerHTML = "Motherfucker";
    }


});