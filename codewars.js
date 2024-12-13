function salam(a, b) {
    return a + b;
};

console.log(salam(6, 5));

// let greetings = function hello(){
//     return console.log('HEllo!')
// };

// greetings;

class Warrior {
    constructor(name) {
        this.name = name;
        this.health = 100;
    }
}

Warrior.strike = function (enemy, swings) {
    enemy.health = Math.max(0, enemy.health - (swings * 10));
};

