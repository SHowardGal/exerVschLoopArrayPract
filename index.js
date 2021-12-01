const arrToInstanceCountObj = arr.reduce((obj, e) => {
    obj[e] = (obj[e] || 0) + 1;
    return obj;
}, {});

arrToInstanceCountObj(['stapler', 'monitor', 'computer', 'desk', 'lamp', 'computer', 'lamp', 'stapler', 'computer',  'computer'])
/*
computer=4


var peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12,
    gender: "male"
  },{
    name: "Madeline",
    age: 80,
    gender: "female"
  },{
    name: "Cheryl",
    age: 22,
    gender: "female"
  },{
    name: "Sam",
    age: 30,
    gender: "male"
  },{
    name: "Suzy",
    age: 4,
    gender: "female"
  }
] 
console.log(age >=18) {
    return = "old enough";
    if age < 18 return "not old enough"
}