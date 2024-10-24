function work() {
    console.log('what');
}
work();
function greet(name) {
    console.log("hello ".concat(name));
}
greet('noman');
greet('usman');
greet('saba');
function fruit(mango, falsa, apple) {
    return (mango);
}
console.log(fruit);
function check(val1, val2) {
    //return val1 && val2
    return val1 || val2;
}
console.log(check(true, false));
function greet1(name) {
    return "Hello, ".concat(name, "!");
}
console.log(greet("NOman \n\tI love you\t\n")); // Output: Hello, noman!
function Mysum() {
    var a = 20;
    var b = 10;
    var sum = a + b;
    return sum;
}
console.log(Mysum());
function mySum() {
    var a = 20;
    var b = 10;
    var sum = a + b;
    console.log(sum);
}
mySum();
