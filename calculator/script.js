
function clearScreen() {
    document.getElementById("answer").value = "";
}


// This function display values
function display(value) {
    document.getElementById("answer").value += value;
}

// This function evaluates the expression and return result
function calculate() {
    var p = document.getElementById("answer").value;
    var q = eval(p);
    document.getElementById("answer").value = q;
}