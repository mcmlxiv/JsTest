const factories = [
    { name: "BR1", employees: ["John", "Alice", "Bob", "Jessie", "Karen"] },
    { name: "BR2", employees: ["Jessie", "Karen", "John"] },
    { name: "BR3", employees: ["Miles", "Eric", "Henry", "Bob"] },
    { name: "BR4", employees: [] }
  ];

function howManyEmployesByFactory(factories){

    for (let factory  of factories){
         console.log(factory.name,factory.employees.length)
    }

 
}
howManyEmployesByFactory(factories)

function howManyFactoriesByEmployee(factories){

    var employees =[];
    var employeeCount={}
    for (let factory  of factories){
        employees.push(...factory.employees)
   }
   for(let employee of employees){
    employeeCount[employee] = (employeeCount[employee] || 0) + 1
   }
   console.log(employeeCount,'count')
}
howManyFactoriesByEmployee(factories)

function orderEmployeesAlphabetical(factories){
    
    for (let factory  of factories){
        factory.employees.sort()
    }
    
    console.log(factories,'sorted')
}
orderEmployeesAlphabetical(factories)



const employeeType = [
      {id: 1, "name": "FullTime", work_begin: "09:00:00", work_end: "17:00:00"},
      {id: 2, "name": "MidTime", work_begin: "12:00:00", work_end: "21:00:00"},
      {id: 3, "name": "HalfTime", work_begin: "20:00:00", work_end: "00:00:00"},
];

const employees = [
        {id: 1, name: "Alice", type: 2},
        {id: 2, name: "Bob", type: 3},
        {id: 3, name: "John", type: 2},
        {id: 4, name: "Karen", type: 1},
        {id: 5, name: "Miles", type: 3},
        {id: 6, name: "Henry", type: 1}
];

const tasks = [
      {id: 1, title: "task01", duration: 60 },
      {id: 2, title: "task02", duration: 120},
      {id: 3, title: "task03", duration: 180},
      {id: 4, title: "task04", duration: 360},
      {id: 5, title: "task05", duration: 30},
      {id: 6, title: "task06", duration: 220},
      {id: 7, title: "task07", duration: 640},
      {id: 8, title: "task08", duration: 250},
      {id: 9, title: "task09", duration: 119},
      {id: 10, title: "task10", duration: 560},
      {id: 11, title: "task11", duration: 340},
      {id: 12, title: "task12", duration: 45},
      {id: 13, title: "task13", duration: 86},
      {id: 14, title: "task14", duration: 480},
      {id: 15, title: "task15", duration: 900}
];

function howManyHours(employees){
    var totalDuration=0;
    
    for(let employee of employees){

        if(employee.type == 1){
            totalDuration += 8;
        }else if(employee.type == 2){
            totalDuration += 9;
        }else{
            totalDuration += 4;
        }
        
    }
    console.log(totalDuration)

}
howManyHours(employees)

function howManyEmployeeByTime(time){
    
   
    var employeeTypeCount={};
    var employeesWorking=0;
    var employeeTypes=[];
    var fullTime =[];
    var midTime=[];
    var halfTime =[];

    for(let i =9;i<17;i++){
        fullTime.push(i)                                                                                        
    }
    for(let i =12;i<21;i++){
        midTime.push(i)
    }
    for(let i =20;i<24;i++){
        halfTime.push(i)
    }

    for(let employee of employees){
        employeeTypes.push(employee.type)
    }                                                                     

    for(let employee of employeeTypes){
        employeeTypeCount[employee] = (employeeTypeCount[employee] || 0) + 1
   }
                                                        
   if(fullTime.includes(time))employeesWorking+=employeeTypeCount[1];
   if(midTime.includes(time))employeesWorking+=employeeTypeCount[2];
   if(halfTime.includes(time))employeesWorking+=employeeTypeCount[3];
                                            

   console.log(employeesWorking)
    


}
howManyEmployeeByTime(20)

function howManyDaysDone(tasks){
    
   var totalHours=0;

   for(task of tasks){
       totalHours+=task.duration
   }

   console.log(totalHours/60/15)


}
howManyDaysDone(tasks)