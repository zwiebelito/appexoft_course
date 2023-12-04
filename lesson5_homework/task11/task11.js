// 11 Видалення властивостей: Створіть об'єкт з даними про замовлення (номер, товари, адреса).
// Видаліть властивість "адреса" з використанням деструктуризації і виведіть результат.

const order = {
    number: 23593,
    goods: ['shorts', 'pants', 'socks'],
    address: 'Tershakovtsiv Street 16'
}

const {address, ...newOrder} = order;

console.log(newOrder)