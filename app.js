'use strict';


function Employee(employeeId, fullName, department, level, imageURL) {
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    this.salary = this.calculateSalary();
    this.netSalary = this.calculateNetSalary();
}

// Define salary ranges for each level
const salaryRanges = {
    "Senior": { min: 1500, max: 2000 },
    "Mid-Senior": { min: 1000, max: 1500 },
    "Junior": { min: 500, max: 1000 }
};

// Prototype function to calculate salary based on employee level
Employee.prototype.calculateSalary = function() {
    const range = salaryRanges[this.level];
    if (range) {
        // Generate a random salary within the range
        return Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
    } else {
        return 0; // Return 0 if level is not found in salaryRanges
    }
};

// Prototype function to calculate net salary (after tax)
Employee.prototype.calculateNetSalary = function() {
    const taxPercent = 7.5;
    return this.salary * (1 - taxPercent / 100);
};

// Prototype function to render employee name and salary
Employee.prototype.render = function() {
    document.write(`<p>${this.fullName} - Salary: ${this.salary}, Net Salary: ${this.netSalary.toFixed(2)}</p>`);
};

// Example employee instances based on provided information
const employees = [
    new Employee(1000, "Ghazi Samer", "Administration", "Senior", "https://example.com/ghazi.jpg"),
    new Employee(1001, "Lana Ali", "Finance", "Senior", "https://example.com/lana.jpg"),
    new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "https://example.com/tamara.jpg"),
    new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "https://example.com/safi.jpg"),
    new Employee(1004, "Omar Zaid", "Development", "Senior", "https://example.com/omar.jpg"),
    new Employee(1005, "Rana Saleh", "Development", "Junior", "https://example.com/rana.jpg"),
    new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "https://example.com/hadi.jpg")
];

// Render employee information
employees.forEach(employee => {
    employee.render();
});