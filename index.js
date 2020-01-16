const calculator = {
  sum: function(a, b) {
    return a + b;
  },
  sub: function(a, b) {
    return a - b;
  },
  mul: function(a, b) {
    return a * b;
  },
  div: function(a, b) {
    return a / b;
  },
  pow: function(a, b) {
    return a ** b;
  }
};

const sum = calculator.sum(5, 5);
const sub = calculator.sub(8, 7);
const mul = calculator.mul(3, 2);
const div = calculator.div(8, 2);
const pow = calculator.pow(6, 3);

console.log(sum);
console.log(sub);
console.log(mul);
console.log(div);
console.log(pow);
