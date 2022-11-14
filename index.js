function createEmployeeRecord(arr){
    let obj={
    firstName: arr[0],
    familyName: arr[1],
    title: arr[2],
    payPerHour: arr[3],
    timeInEvents: [],
    timeOutEvents: []
    }
    return obj;
};
const andrew = createEmployeeRecord(['andrew', 'smit', 'mr.', 35]);

function createEmployeeRecords(arr){
    let newArr = arr.map(emp => createEmployeeRecord(emp));
    // console.log(newArr);
    return newArr;
};



function createTimeInEvent(obj, dateStr){
    obj.timeInEvents.push({
        type:'TimeIn',
        hour: findHour(dateStr),
        date: findDate(dateStr)
    });
    return obj;
    // console.log(obj);
};
createTimeInEvent(andrew,"2022-11-07 0600");
createTimeInEvent(andrew,"2022-11-09 0800");


function createTimeOutEvent(obj, dateStr){
    obj.timeOutEvents.push({
        type : 'TimeOut',
        hour: findHour(dateStr),
        date: findDate(dateStr)
    })
    return obj;
};

createTimeOutEvent(andrew,"2022-11-07 1200");
createTimeOutEvent(andrew,"2022-11-09 1000");
// console.log(andrew);



function findHour(str){
    return parseInt(str.substring(11));
};

function findDate(str){
    return str.substring(0,10);
};

function hoursWorkedOnDate(obj, dateStr){
    let dateWorked = findDate(dateStr);
    // console.log(dateWorked);
    for (let i=0; i<obj.timeInEvents.length; i++){
        // console.log(obj.timeInEvents[i].date);
       if(obj.timeInEvents[i].date === dateWorked){
        let hours = obj.timeOutEvents[i].hour - obj.timeInEvents[i].hour
        return hours /100;
       }
    } 
};

function wagesEarnedOnDate(obj, dateStr){
    let hours = hoursWorkedOnDate(obj,dateStr);
    return hours * obj.payPerHour;
}

function allWagesFor(obj){
    let total = 0;
    for (let i=0; i<obj.timeInEvents.length; i++){
        let date = obj.timeInEvents[i].date;
        let dayWages = wagesEarnedOnDate(obj, date)
        total +=dayWages
    } 
    return total;
}

function calculatePayroll(arr){
    let total = 0;
    for (const employee of arr){
        total += allWagesFor(employee)
    } 
    return total;
}






// const allWagesFor = function () {
//     const eligibleDates = this.timeInEvents.map(function (e) {
//         return e.date
//     })

//     const payable = eligibleDates.reduce(function (memo, d) {
//         return memo + wagesEarnedOnDate.call(this, d)
//     }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

//     return payable
// }