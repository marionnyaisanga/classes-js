// You are building a feature rollout system for a startup where a FeatureToggle constructor function has properties: 
// featureName (string), isEnabled (boolean), and userGroupAccess (array of strings like "betaTesters", "admins"), and
//  you must use a prototype method canAccess(userRole) to return true or false, a method toggleFeature(flag) to enable 
//  or disable the feature, and simulate access attempts using if-else and switch statements for different roles.

const { is } = require("@babel/types");

function FeatureToggle(featureName, isEnabled, userGroupAccess){
    this.featureName =featureName;
    this.isEnabled =isEnabled;
    this.userGroupAccess =userGroupAccess;
    
}
FeatureToggle.prototype.canAccess = function (userRole){

    return this.isEnabled && this.userGroupAccess.includes(userRole)
  
};
FeatureToggle.prototype.toggleFeature = function(flag){
    this.isEnabled = flag;
};
const newFeature = new FeatureToggle("Home", false, ["betaTesters","admins"]);
newFeature.toggleFeature(true);

function accessFeature(userRole, feature){
    if (feature.canAccess(userRole)){
        console.log(`user ${userRole} you have access to "${feature.featureName}".`);
        
    }else{
        console.log(`user ${userRole} you don't have access to "${feature.featureName}".`);
        
    }
}

function featureAccess(userRole,feature){
    switch(true){
        case feature.canAccess(userRole):
        console.log(`Access grany=ted to ${userRole} for feature "${feature.featureName}".`);
        break;
        default:
            console.log(`Access denied to ${userRole} for feature "${feature.featureName}".`);
          
    }
}

const roles = ['admins','betaTesters','regularUsers'];
console.log(roles.forEach(role=> accessFeature(role,newFeature)));
console.log( this.newFeature.toggleFeature());

console.log(roles.forEach(role=> featureAccess(role, newFeature)));






// In a freelancer time-tracking platform, create a TimeLog constructor function with properties: freelancerName
//  (string), projectDetails (object with name and hourlyRate), and logs (array of objects with date, hoursWorked), 
//  then add prototype methods to calculate total earnings, filter logs by date range, and determine if weekly hours 
//  exceed 40 using if-else logic.


function TimeLog(freelancerName,projectDetails, logs){
this.freelancerName =freelancerName;
this.projectDetails =projectDetails;
this.logs =logs;
}

TimeLog.prototype.totalEarnings = function(){
    return this.projectDetails.hourlyRate * this.logs.hoursworked;
}
TimeLog.prototype.dateRange = function(){
const hours = weekLogs.reduce((prev,curr))
}




// You are developing a startup’s order management system where an Order constructor function should contain customer
//  (object with name and email), items (array of objects with productName, quantity, and unitPrice), and status (string),
//   then implement prototype methods to compute total cost, update order status based on payment, and categorize order 
//   urgency using switch and conditional statements.

function Order(customer,items, status){
    this.customer = customer;
    this.items = items;
    this.status = status;
}











// In a startup’s employee review tool, design an Employee class with properties: id (number), name (string),
//  performanceMetrics (object with keys like communication, efficiency, and reliability), and feedback (array of strings), 
//  then use prototypes to calculate an average score, classify performance level using control flow, and add new feedback 
//  based on conditions.


// Build a simple e-learning system where a Course class has properties: title (string), instructor
//  (object with name and expertise), and students (array of objects with name and completionStatus), then add prototype 
//  methods to return names of students who completed the course, count enrolled students by expertise area, and use control flow to 
//  output different messages for instructors with more or less than 5 students