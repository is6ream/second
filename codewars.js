class Warrior {
    constructor(name) {
      this.name = name;
      this.health = 100;
    }
  
    strike(enemy, strikes) {
      enemy.health = Math.max(0, enemy.health - (strikes * 10));
    }
  };


  let ninja = new Warrior('Ninja');
  let samurai = new Warrior('Samurai');


  samurai.strike(ninja,3)
  console.log(ninja.health);

  function longestWord(stringOfWords){
    let words = stringOfWords.split(' ');
    let longestWord = "";

    for(let word of words){
      if(word.length >= longestWord.length){
        longestWord = word
      }
    }
    return longestWord;
  };


  console.log(longestWord('banans mexico russionfederation'))