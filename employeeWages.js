console.log('\n\tWelcome to Employee Wage Computation Program\n');

let wagePerHour = 20;
let fullTime = 8;
let partTime = 4;
let totalHours = 0;

let randomValue = (min, max) => Math.floor(Math.random() * (max - min)) + min;

let totalWage = (time) => {
    for(let i = 1; i <= 20; i++) {
        if(randomValue(1, 6) > 2) {
           totalHours += time;
        }
    }
    console.log('No of working days : ', totalHours / time);
    return wagePerHour * totalHours;
}

switch(randomValue(1, 3)) {
    case 1:
        console.log('Full Time Employee');
        console.log('Total Wage : ', totalWage(fullTime));
        break;
    case 2:
        console.log('Part Time Employee');
        console.log('Total Wage : ', totalWage(partTime));
        break;
}