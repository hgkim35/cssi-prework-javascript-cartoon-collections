function dwarfRollCall(dwarves) {
	//our code here!
var rollCall = ""
  dwarves.forEach(function(dwarf, index){
    var number = index + 1;
  rollCall = rollCall + number + ". " + dwarf + " "
  });
return rollCall
}

function summonCaptainPlanet(planeteerCalls){
	//your code here!
    planeteerCalls.forEach(function(call, index){
        call = call.toUpperCase() + "!"
      planeteerCalls[index] = call
});
  return planeteerCalls
}
//
function longPlaneteerCalls(words) {
	//your code here!
var i = 0;
while (i< words.length) {
  if(words[i].length<=4){
    i = i + 1
    return false;
  }
  else {
    return true
  }
}
}

function findTheCheese(foods) {
	// your code here!
  var i = 0
  var noCheese = "no cheese!"
  var cheese = ["cheddar", "gouda", "camembert"]
  while(i < foods.length){
    if(cheese.includes(foods[i])){
    noCheese = foods[i]
  }
i +=1
  }
return noCheese
}
