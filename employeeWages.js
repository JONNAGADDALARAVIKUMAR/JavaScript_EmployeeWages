console.log('\n\tWelcome to Employee Wage Computation Program\n');

let wagePerHour = 20;
let fullTime = 8;
let partTime = 4;

let randomValue = (min, max) => Math.floor(Math.random() * (max - min)) + min;
let totalWage = (time) => wagePerHour * time;

if(randomValue(1, 6) > 2) {
    console.log('Employee is Present');
    switch(randomValue(1, 3)) {
        case 1:
            console.log('Full Time Wage : ', totalWage(fullTime));
            break;
        case 2:
            console.log('Part Time Wage : ', totalWage(partTime));
            break;
        default:
            console.log('Fail');
    }
} else {
    console.log('Employee Absent');
}