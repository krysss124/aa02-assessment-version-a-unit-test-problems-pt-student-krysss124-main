/*******************************************************************************
Your company is giving every employee earning less than $50,000 a 10% raise!

Write a function `employeeRaises(peopleObj)` that takes an array of objects
containing employee names and their salaries and returns an array containing
the employees that need raises, along with their new salaries.

Example:

employees = [
  { name: "Alice", salary: 80000 },
  { name: "Bob", salary: 40000 },
  { name: "Carol", salary: 60000 },
  { name: "Dan", salary: 70000 },
  { name: "Ellen", salary: 100000 },
];

console.log(employeeRaises(employees)); // [ { name: 'Bob', salary: 44000 } ]
*/

function employeeRaises(peopleObj) {
  // Use the filter method to find employees with a salary less than $50,000
  return peopleObj
    .filter(employee => employee.salary < 50000) // Filter employees who need raises
    .map(employee => ({
      name: employee.name,
      salary: employee.salary * 1.1 // Calculate the new salary with a 10% raise
    }));
}

// Example usage:
const employees = [
  { name: "Alice", salary: 80000 },
  { name: "Bob", salary: 40000 },
  { name: "Carol", salary: 60000 },
  { name: "Dan", salary: 70000 },
  { name: "Ellen", salary: 100000 },
];

console.log(employeeRaises(employees)); // [ { name: 'Bob', salary: 44000 } ]


/*****************DO NOT MODIFY ANYTHING UNDER THIS LINE*********************/
try {
  module.exports = employeeRaises;
} catch (e) {
  module.exports = null;
}
