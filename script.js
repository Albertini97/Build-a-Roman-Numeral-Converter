const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};

document.getElementById("convert-btn").addEventListener("click", function() {
    var num = document.getElementById("number").value;
    if (!num) {
        document.getElementById("output").innerHTML = "Please enter a valid number";
        return;
    }
    if (num < 1) {
        document.getElementById("output").innerHTML = "Please enter a number greater than or equal to 1";
        return;
    }
    if (num >= 4000) {
        document.getElementById("output").innerHTML = "Please enter a number less than or equal to 3999";
        return;
    }
    var roman = '';
    for (var i in romanNumerals) {
        while (num >= romanNumerals[i]) {
            roman += i;
            num -= romanNumerals[i];
        }
    }
    document.getElementById("output").innerHTML = roman;
});
