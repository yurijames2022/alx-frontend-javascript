var student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};
var student2 = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};
var studentsList = [student1, student2];
// Function to render the table
function renderTable(students) {
    var table = document.createElement("table");
    var tableHeader = table.createTHead();
    var headerRow = tableHeader.insertRow();
    // Create table headers
    var header1 = document.createElement("th");
    var header2 = document.createElement("th");
    header1.textContent = "First Name";
    header2.textContent = "Location";
    headerRow.appendChild(header1);
    headerRow.appendChild(header2);
    // Create table rows for each student
    students.forEach(function (student) {
        var row = table.insertRow();
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        cell1.textContent = student.firstName;
        cell2.textContent = student.location;
    });
    // Append the table to the document body
    document.body.appendChild(table);
}
// Call the renderTable function with the studentsList array
renderTable(studentsList);
