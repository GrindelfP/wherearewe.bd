function weekIsEven() {
    let currentDate = new Date();
    let startDate = new Date(currentDate.getFullYear(), 0, 1);
    let daysPassed = Math.floor((currentDate - startDate) / (24 * 3600 * 1000));
    let weekNumber = Math.ceil(daysPassed / 7);

    return weekNumber % 2 === 0
}

function ShowCorrectSchedule() {
    let radioIra = document.getElementById("Ira");
    let radioGrisha = document.getElementById("Grisha");

    let tableForEvenIra = document.getElementById("tableForEvenIra");
    let tableForOddIra = document.getElementById("tableForOddIra");
    let tableForEvenGrisha = document.getElementById("tableForEvenGrisha");
    let tableForOddGrisha = document.getElementById("tableForOddGrisha");

    HideAll();

    if (radioIra.checked === true) {
        if (weekIsEven()) {
            tableForEvenIra.style.display = "block";
            tableForOddIra.style.display = "none";
        } else {
            tableForOddIra.style.display = "block";
            tableForEvenIra.style.display = "none";
        }
    } else if (radioGrisha.checked === true) {
        if (weekIsEven()) {

            tableForEvenGrisha.style.display = "block";
            tableForOddGrisha.style.display = "none";
        } else {
            tableForOddGrisha.style.display = "block";
            tableForEvenGrisha.style.display = "none";
        }
    }
}

function HideAll() {
    let tableForEvenIra = document.getElementById("tableForEvenIra");
    let tableForOddIra = document.getElementById("tableForOddIra");
    let tableForEvenGrisha = document.getElementById("tableForEvenGrisha");
    let tableForOddGrisha = document.getElementById("tableForOddGrisha");

    tableForEvenGrisha.style.display = "none";
    tableForOddGrisha.style.display = "none";
    tableForOddIra.style.display = "none";
    tableForEvenIra.style.display = "none";
}
