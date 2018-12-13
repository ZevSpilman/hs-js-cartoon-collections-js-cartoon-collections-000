function dwarfRollCall(dwarves) {
  for (let i = 0; i < dwarves.length; i ++){
    dwarves.push(`${i + 1}${dwarves[i]}`)
    if (i < dwarves.length -1){
      dwarves.push(',')
    }
  }
}

function summonCaptainPlanet(planeteerCalls){
}

function longPlaneteerCalls(words) {
}

function findTheCheese (foods) {
  var cheese = ["cheddar", "gouda", "camembert"]
  for (let i = 0; i < foods.length; i ++){
    if (cheese.includes(foods[i]) === true){
      return foods[i]
    }
  }
     return 'no cheese!'
    }

