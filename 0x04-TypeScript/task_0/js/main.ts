export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const studentA: Student = {
  firstName: "Harry",
  lastName: "Kimani",
  age: 23,
  location: "Nairobi, Kenya",
};
const studentB: Student = {
  firstName: "Baraka",
  lastName: "Mwamba",
  age: 23,
  location: "Mombasa, Kenya",
};
const studentsList: Array<Student> = [
  studentA,
  studentB,
];
const body = document.querySelector('body');
const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach(student => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
});

table.appendChild(tbody);
body?.appendChild(table);
