function sayHello() {
    console.log('hi');
}

function sayBye() {
    console.log('bye')
}

function biggy(callback) {
    console.log('Salam');
    callback()
};

biggy(sayBye);


function test(input) {
    if (input === 'привет') {
        return 'Привет, друг!'
    } else return 'Я не понял, попробуй еще раз'
};

function processUserInput(str, callback) {
    return callback(str)
};

console.log(processUserInput('привет', test))
console.log(processUserInput('hi', test))

String.prototype.isUpperCase = function () {
    return this.toString() === this.toUpperCase();
};


console.log('HELLO'.isUpperCase());
console.log('hEllo'.isUpperCase());
console.log(''.isUpperCase());


String.prototype.isUpperCase1 = function () {
    if (this.toString() === this.toUpperCase()) {
        return true;
    } else {
        return false
    }
}

console.log('sala'.isUpperCase1)

function converter(mpg) {
    const result = mpg / (4.54609188 / 1.609344);
    return result.toFixed(2)
}

console.log(converter(10))
console.log(converter(20))
console.log(converter(30))

const attempt = 2.321321321124;
console.log(+attempt.toFixed(2))

let a = { 'Mike': 'aye', 'Joe': 'aye', 'Johnson': 'aye', 'Peter': 'aye' };
let b = { 'Mike': 'aye', 'Joe': 'nay', 'Johnson': 'aye', 'Peter': 'aye' };

const cannonsReady = (gunners) => {
   for(let i in gunners){
    if(gunners[i] == 'nay') return 'Shiwer me timbers!'
   }
   return 'Fire!'
};
console.log(cannonsReady(a));

