// 10 Функція з параметром-об'єктом: Створіть функцію, яка приймає об'єкт з даними про студента (ім'я, вік, група)
// і виводить ці дані на сторінку.

const showData = (obj) => {
    for (const objKey in obj) {
        console.log(`${objKey} -  ${obj[objKey]}`)
    }
}

showData({name: 'Oleh', age: 41, group: 'MT-23'})