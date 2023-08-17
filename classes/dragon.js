// Your code here
class Dragon{
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`
  }

  static getDragons(...arr) {
    let dragonArray = [];

    for (let i = 0; i < arr.length; i++) {
      dragonArray.push(arr[i].name)
    }
    return dragonArray;
  }
}

const puff = new Dragon("Puff", "green");
// console.log(puff);
// console.log(puff.breathesFire());
// console.log(Dragon.getDragons(puff))
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
