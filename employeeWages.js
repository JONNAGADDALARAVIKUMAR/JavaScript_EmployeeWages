console.log('\n\tWelcome to Employee Wage Computation Program\n');

let wagePerHour = 20;
let fullTime = 8;
let partTime = 4;

let randomValue = (min, max) => Math.floor(Math.random() * (max - min)) + min;
let totalWage = (time) => wagePerHour * time;
if(randomValue(1, 5) > 2) {
    console.log('Employee is Present');
    console.log('Full Time Wage : ', totalWage(fullTime));
    console.log('Part Time Wage : ', totalWage(partTime));
} else {
    console.log('Employee Absent');
}