function ShowCorrectSchedule() {
    let currentDate = new Date();
    let one = new Date(currentDate.getFullYear(), 0, 1);
    let numberOfDays = Math.floor((currentDate - one) / (24 * 60 * 60 * 1000));
    let weekNumber = Math.ceil((currentDate.getDay() + 1 + numberOfDays) / 7);

    let labelIra = document.getElementById("Ira");
    let labelGrisha = document.getElementById("Grisha");

    let tableForEvenIra = document.getElementById("tableForEvenIra");
    let tableForOddIra = document.getElementById("tableForOddIra");
    let tableForEvenGrisha = document.getElementById("tableForEvenGrisha");
    let tableForOddGrisha = document.getElementById("tableForOddGrisha");

    HideAll(tableForEvenGrisha, tableForOddGrisha, tableForEvenIra, tableForOddIra);

    if (labelIra.checked === true) {
        if (weekNumber % 2 === 1) {
            alert('EI');
            tableForEvenIra.style.display = "block";
            tableForOddIra.style.display = "none";
        } else {
            alert('OI');
            tableForOddIra.style.display = "block";
            tableForEvenIra.style.display = "none";
        }
    }

    else if (labelGrisha.checked === true) {
        if (weekNumber % 2 === 1) {

            tableForEvenGrisha.style.display = "block";
            tableForOddGrisha.style.display = "none";
        } else {
            tableForOddGrisha.style.display = "block";
            tableForEvenGrisha.style.display = "none";
        }
    }
}

function HideAll(tableForEvenGrisha, tableForOddGrisha, tableForEvenIra, tableForOddIra) {
    tableForEvenGrisha.style.display = "none";
    tableForOddGrisha.style.display = "none";
    tableForOddIra.style.display = "none";
    tableForEvenIra.style.display = "none";
}
