// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers,name) {
    
    return drivers.filter(function(driver) {
        return  driver.toLowerCase() === name.toLowerCase(); 
})
}

findMatching(drivers ,'bobby');
findMatching(drivers ,'Sammy');


function fuzzyMatch(drivers,query) {

    return drivers.filter(function(driver) {
        return  driver.toLowerCase().startsWith(query.toLowerCase());
})
}

fuzzyMatch(drivers ,'Sa');
fuzzyMatch(drivers ,'Y');


const drivers2 = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(drivers , name) {
   

    return drivers2.filter(function(driver) {
        return  driver.name === name; 
})

}

matchName(drivers, 'Bobby');
