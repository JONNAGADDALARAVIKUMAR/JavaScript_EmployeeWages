console.log('\n\tWelcome to Employee Wage Computation Program\n');

let wagePerHour = 20;
let fullTimeHours = 8;
let partTimeHours = 4;
let totalHours = 0;

let randomValue = (min, max) => Math.floor(Math.random() * (max - min)) + min;

let totalWage = (time, workingHoursPerMonth) => {
    for(let i = 1; i <= 20; i++) {
        if(randomValue(1, 6) > 2) {
           totalHours += time;
           
           if(totalHours > workingHoursPerMonth) {
                totalHours -= time / 2;
            }
           if(totalHours == workingHoursPerMonth) {
                break;
           }
        }
    }
    console.log('No of working days : ', totalHours / time, '\nHours Worked : ', totalHours);
    return wagePerHour * totalHours;
}

switch(randomValue(1, 3)) {
    case 1:
        console.log('Full Time Employee');
        console.log('Total Wage : ', totalWage(fullTimeHours, 100));
        break;
    case 2:
        console.log('Part Time Employee');
        console.log('Total Wage : ', totalWage(partTimeHours, 50));
        break;
}