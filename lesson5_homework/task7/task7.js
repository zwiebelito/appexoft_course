// 7 Деструктуризація об'єкту: Створіть об'єкт, що представляє користувача з полями "ім'я", "вік" і "email".
// Використовуючи деструктуризацію, виведіть ці значення на сторінку.

const data = {
    name: 'Ihor',
    age: 34,
    email: 'ihor34@gmail.com'
}

const {name, age, email} = data;

console.log(name)
console.log(age)
console.log(email)