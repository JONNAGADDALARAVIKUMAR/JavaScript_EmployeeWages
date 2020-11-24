console.log('\n\tWelcome to Employee Wage Computation Program\n');
let attendence = Math.floor(Math.random() * 5) + 1;
let wagePerHour = 20;
let time = 8;
let totalWage;

if(attendence > 2) {
    console.log('Employee Present');
    totalWage = wagePerHour * time;
    console.log('Total Wage : ', totalWage);
} else {
    console.log('Employee Absent');
}