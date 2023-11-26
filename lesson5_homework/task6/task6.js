// 6 Обробка умов: Створіть функцію, яка перевіряє, чи є число додатнім, від'ємним чи нулем і
// повертає відповідне повідомлення.

const checkNumber = (num) => {
    num > 0 ? console.log("Число є додатнім") :
        num < 0 ? console.log("Число є від'ємним")
            : console.log("Число є нулем")
}

checkNumber(1)
checkNumber(-1)
checkNumber(0)