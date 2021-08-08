const fs = require('fs');

let employees = {'name':'employee 1 name', 'salary': 2000}

//create
fs.writeFileSync('employees.json', JSON.stringify(employees))

//read
employees = JSON.parse(fs.readFileSync('employees.json', 'utf8'))

//update
employees.workHours = 40;
fs.writeFileSync('employees.json', JSON.stringify(employees))

fs.unlinkSync('employees.json')
