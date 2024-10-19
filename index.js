const n_fifty = -50;
const p_fifty = 50;
function Submit () {
    let isValid = true;
    let min_x = document.querySelector(".min-x input").value;
    if(!check_values(min_x)) isValid = false;
    
    let min_y = document.querySelector(".min-y input").value;
    if(!check_values(min_y)) isValid = false;

    let max_x = document.querySelector(".max-x input").value;
    if(!check_values(max_x)) isValid = false;

    let max_y = document.querySelector(".max-y input").value;
    if(!check_values(max_y)) isValid = false; 
    
    if(errorMessage(isValid)) multiplicationTable();
}

function check_values(value) {
    if (value <= n_fifty || value >= p_fifty) {
        return false;
    }
    else if (isNaN(value)) {
        return false;
    }
    return true;
}

function errorMessage (check) {
    var err = document.getElementById("error");
    if (check) {
        err.textContent = "";
        return;
    }
    err.textContent = "Please enter in a valid message";
    err.style.color = "red";
}

function multiplicationTable() {
    
}
