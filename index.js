function dwarfRollCall(dwarves) {
  var newStr = ('')
  for (let i = 0; i < dwarves.length; i ++){
    newStr += (`${i + 1}. ${dwarves[i]} `)
  }
  return newStr
}

function summonCaptainPlanet(planeteerCalls){
  var newArr = []
  for (let i = 0; i < planeteerCalls.length; i ++){
    newArr.push(`${planeteerCalls[i].toUpperCase()}!`)
  }
  return newArr
}

function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i ++){
  if (words[i].length > 4){
    return true
  }
}
   return false
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

