// 3 Створіть простий калькулятор, який зчитує два числа та операцію (+, -, *, /) від користувача та повертає результат.

const calculate = (num1, num2, operation) => {
    switch (operation){
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "/":
            return num1 / num2;
        case "*":
            return num1 * num2;
        default:
            alert('Something went wrong, try again')
    }
}

console.log(calculate(5, 2, "+"));
console.log(calculate(5, 2, "-"));
console.log(calculate(5, 2, "*"));
console.log(calculate(5, 2, "/"));
// console.log(calculate(5, 2, "="));
