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

function createEmployeeRecords(arr){
    newArr = [];
    for (employee of arr){
        newArr.push(createEmployeeRecord(employee));
    }; 
    console.log(newArr)
    return newArr; 
};

// let testArr = [['kailee', 'selzer', 'mrs.', 30],['andrew', 'smit', 'mr.', 30]];
// // // console.log(testArr);
// createEmployeeRecords(testArr);
let andrew = createEmployeeRecord(['andrew', 'smit', 'mr.', 30])
// console.log(andrew);



function createTimeInEvent(obj, dateStr){
    obj.timeInEvents.push({
        type:'TimeIn',
        hour: findHour(dateStr),
        date: findDate(dateStr)
    });
    return obj;
};
createTimeInEvent(andrew,"2022-11-09 0600");


function createTimeOutEvent(obj, dateStr){
    obj.timeOutEvents.push({
        type : 'TimeOut',
        hour: findHour(dateStr),
        date: findDate(dateStr)
    })
    return obj;
};

createTimeOutEvent(andrew,"2022-11-09 1200");
console.log(andrew);


function findHour(str){
    return str.substring(11,13);
};

function findDate(str){
    return str.substring(0,10);
};

function hoursWorkedOnDate(obj, dateStr){
    for (elem of obj.timeInEvents){
       let idx = elem.findIndex((obj, index)=>{
            if(obj.timeInEvents.date === findDate(dateStr)){
                return index;
            }});
        }
    let start = obj.timeInEvents[idx].hour;
    let end = obj.timeOutEvents[idx].hour;
    return end - start;
    
};


hoursWorkedOnDate()