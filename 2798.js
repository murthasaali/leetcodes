var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let count=0
for (let i = 0; i < hours.length; i++) {
    if(hours[i]>=target){
        count++


    }
}
return count
    
    
};

numberOfEmployeesWhoMetTarget([8,1,0,2,3,4],2)