
let weightIn;
let heightIn;
let errMsg = document.getElementById("err");
let indexBMI;
let divRezult = document.getElementById("result");
let result;

let btnCalc = document.getElementById("calc");

btnCalc.addEventListener('click', () => {
    errMsg.innerHTML = "";
    weightIn = parseFloat(document.getElementById("weightIn").value);
    heightIn = parseFloat(document.getElementById("heightIn").value);

    if (isNaN(weightIn) || weightIn < 0) {
        errMsg.innerHTML = "Въведете валидно число за тегло!"
        return;
    }

    if (isNaN(heightIn) || heightIn < 0) {
        errMsg.innerHTML = "Въведете валидно число за височина!"
        return;
    }

    indexBMI = ( weightIn / (heightIn ** 2)).toFixed(2);
console.log(indexBMI);
    if (indexBMI < 16.0) {
        result = `${indexBMI} - тежко недохранване`;
    } else if (indexBMI >= 16.0 && indexBMI <= 16.99) {
        result = `${indexBMI} - средно недохранване`;
    }else if (indexBMI >= 17.0 && indexBMI <= 18.49) {
        result = `${indexBMI} - леко недохранване`;
    }else if (indexBMI >= 18.50 && indexBMI <= 24.99) {
        result = `${indexBMI} - нормално тегло`;
    }else if (indexBMI >= 25.0 && indexBMI <= 29.99) {
        result = `${indexBMI} - предзатлъстяване`;
    }else if (indexBMI >= 30.0 && indexBMI <= 34.99) {
        result = `${indexBMI} - затлъстяване I степен`;
    }else if (indexBMI >= 35.0 && indexBMI <= 39.99) {
        result = `${indexBMI} -  затлъстяване II степен`;
    }else if (indexBMI >= 40.0) {
        result = `${indexBMI} - затлъстяване III степен`;
    }

    divRezult.innerHTML = result;
});
