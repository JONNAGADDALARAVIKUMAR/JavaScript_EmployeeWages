console.log('\n\tWelcome to Employee Wage Computation Program\n');

let wagePerHour = 20;
let fullTimeHours = 8;
let partTimeHours = 4;
let totalHours = 0;
let dailyWage;
const dailyAndTotalWage = [];

let randomValue = (min, max) => Math.floor(Math.random() * (max - min)) + min;//Generates Random Number between two numbers

const getTotalHours = (workingHoursPerDay, workingHoursPerMonth) => { //method to get total working Hours
    for(let i = 1; i <= 20; i++) {
       
        if(randomValue(1, 6) < 4 && totalHours < workingHoursPerMonth) {
           totalHours += workingHoursPerDay;
           dailyWage = workingHoursPerDay * wagePerHour;
       
           if(totalHours > workingHoursPerMonth) {
               totalHours -= workingHoursPerDay / 2;
               dailyWage = workingHoursPerDay * (wagePerHour / 2);
           }
           dailyAndTotalWage.push(dailyWage, totalHours * 20);
        } else {
            dailyAndTotalWage.push(0, totalHours * 20);
        } 
    }
    return totalHours;
}

let totalWage = (workingHoursPerDay, workingHoursPerMonth) => { // Calculates total Wage and stores in array
    totalHours = getTotalHours(workingHoursPerDay, workingHoursPerMonth);
    console.log('No of working days : ', totalHours / workingHoursPerDay, 
                '\nHours Worked : ', totalHours);
    
    console.log('Daily Wage\tTotal Wage');
    for(let i = 0; i < dailyAndTotalWage.length; i = i+2) {
        console.log(dailyAndTotalWage[i], '\t\t', dailyAndTotalWage[i+1]);
    }
    return wagePerHour * totalHours;
}

switch(randomValue(1, 3)) {
    case 1:
        console.log('Full Time Employee');
        console.log('\nTotal Wage : ', totalWage(fullTimeHours, 100));
        break;
    case 2:
        console.log('Part Time Employee');
        console.log('\nTotal Wage : ', totalWage(partTimeHours, 50));
        break;
}