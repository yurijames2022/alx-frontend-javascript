interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
  };
  
  const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
  };
  
  const studentsList: Student[] = [student1, student2];

  // Function to render the table
function renderTable(students: Student[]) {
    const table = document.createElement("table");
    const tableHeader = table.createTHead();
    const headerRow = tableHeader.insertRow();
    
    // Create table headers
    const header1 = document.createElement("th");
    const header2 = document.createElement("th");
    header1.textContent = "First Name";
    header2.textContent = "Location";
    headerRow.appendChild(header1);
    headerRow.appendChild(header2);
  
    // Create table rows for each student
    students.forEach(student => {
      const row = table.insertRow();
      const cell1 = row.insertCell();
      const cell2 = row.insertCell();
      cell1.textContent = student.firstName;
      cell2.textContent = student.location;
    });
  
    // Append the table to the document body
    document.body.appendChild(table);
  }
  
  // Call the renderTable function with the studentsList array
  renderTable(studentsList);