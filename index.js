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
        
    errorMessage(isValid);

    if(isValid) multiplicationTable(min_x, max_x, min_y, max_y);

}

function check_values(value) {
    if (value < n_fifty || value > p_fifty) {
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

function multiplicationTable(min_x, max_x, min_y, max_y) {
    const tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';
    const table = document.createElement('table');
    
    min_x = parseInt(min_x);
    max_x = parseInt(max_x);
    min_y = parseInt(min_y);
    max_y = parseInt(max_y);
    
    let headerRow = document.createElement('tr');
    let emptyCell = document.createElement('th');
    headerRow.appendChild(emptyCell);
    for (let x = min_x; x <= max_x; x++) {
        let row = document.createElement("th");
        row.textContent = x;
        headerRow.appendChild(row);
    }
    table.appendChild(headerRow);

    for (let y = min_y; y <= max_y; y++) {
        let row = document.createElement("tr");
        let newLine = document.createElement("th");
        newLine.textContent = y;
        row.appendChild(newLine);

        for (let x = min_x; x <= max_x; x++) {
            let content = document.createElement("td");
            content.textContent = x * y;
            row.appendChild(content);
        }
        table.appendChild(row);
    }
    tableContainer.appendChild(table);
}