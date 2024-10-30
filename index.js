/*
File: index.js
GUI Assignment: Homework 3, Creating an Interactive Dynamic Table
Jake Shick, UMass Lowell Computer Science, jake_shick@student.uml.edu
Copyright (c) 2024 by Shick. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
updated by JS on October 30, 2024 at 2:15 PM.
*/
const n_fifty = -50; // const value for checking to see if the value is below -50
const p_fifty = 50; // const value for checking to see if the value is above 50

function Submit () {
    let isValid = true; // Variable will be used to check if the value entered in by input box is valid
    let min_x = document.querySelector(".min-x input").value; // gets value entered in in min-x input box
    if(!check_values(min_x)) isValid = false; // checks to see if value is less than -50 or greater than 50
    
    let min_y = document.querySelector(".min-y input").value; // gets value entered in in max-x input box
    if(!check_values(min_y)) isValid = false; // checks to see if value is less than -50 or greater than 50

    let max_x = document.querySelector(".max-x input").value; // gets value entered in in min-y input box
    if(!check_values(max_x)) isValid = false; // checks to see if value is less than -50 or greater than 50

    let max_y = document.querySelector(".max-y input").value; // gets value entered in in max-y input box
    if(!check_values(max_y)) isValid = false;  // checks to see if value is less than -50 or greater than 50
    
    if(min_x > max_x || min_y > max_y) {  // this makes sure that the user cannot have a max value that is below the min value.
        isValid = false;
    }
    errorMessage(isValid); // This looks at the isValid variable which holds a boolean type, if it's false it prints a error message otherwise it prints nothing

    if(isValid) multiplicationTable(min_x, max_x, min_y, max_y); // calls the function that creates the table and handles the multiplication

}

function check_values(value) {
    if (value < n_fifty || value > p_fifty) { // conditional statement to see if the values are greater than 50 OR less than -50
        return false; // returns false if the above statement is triggered, which will later print error message
    }
    else if (isNaN(value)) { // conditional statement to check if value entered in is a letter or string
        return false; // returns false if the above statement is triggered, which will later print error message
    }
    return true; // will not trigger the error message
}

function errorMessage (check) { // function that checks to see if value is false to trigger error message
    var err = document.getElementById("error"); // gets the span element ID in case to print the message
    if (check) { //  checks to see if value is true, and if so return nothing so no error message is printed.
        err.textContent = "";
        return;
    }
    err.textContent = "Please enter in a valid message"; // Tells the user to enter in a valid messgae, and it's red so you know it's serious
    err.style.color = "red";
}

function multiplicationTable(min_x, max_x, min_y, max_y) { // start of the multiplication table which takes the values collected in input boxes
    const tableContainer = document.getElementById('tableContainer'); // gets the element id from the document, in this case tableContainer in order to add to it
    tableContainer.innerHTML = '';
    const table = document.createElement('table'); // creates a table element
    // turns these four numbers into integers
    min_x = parseInt(min_x);
    max_x = parseInt(max_x);
    min_y = parseInt(min_y);
    max_y = parseInt(max_y);
    
    let headerRow = document.createElement('tr'); // creates the table row which 
    // Create an empty cell to align the top left corner of the table
    let emptyCell = document.createElement('th'); 
    headerRow.appendChild(emptyCell); // Append the empty cell to the header row

    // Loop through values from min_x to max_x to create column headers
    for (let x = min_x; x <= max_x; x++) {
        let row = document.createElement("th"); // Create a header cell for each x value
        row.textContent = x; // Set the cell's text to the current x value
        headerRow.appendChild(row); // Append the cell to the header row
    }
    table.appendChild(headerRow); // Add the completed header row to the table

// Loop through values from min_y to max_y to create rows for each y value
    for (let y = min_y; y <= max_y; y++) {
        let row = document.createElement("tr"); // Create a new table row for the current y value
        let newLine = document.createElement("th"); // Create a header cell for the row
        newLine.textContent = y; // Set the row header cell's text to the current y value
        row.appendChild(newLine); // Add the row header cell to the row

        // Loop through values from min_x to max_x to create data cells for each x * y
        for (let x = min_x; x <= max_x; x++) {
            let content = document.createElement("td"); // Create a new table data cell
            content.textContent = x * y; // Set the cell's text to the product of x and y
            row.appendChild(content); // Append the cell to the current row
        }
        table.appendChild(row); // Append the completed row to the table
    }
    tableContainer.appendChild(table); // Add the fully populated table to the table container

}