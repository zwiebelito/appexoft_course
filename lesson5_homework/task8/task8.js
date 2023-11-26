// 8 Об'єднання об'єктів: Створіть два об'єкти, які представляють дані про товари з
// полями "назва", "ціна" і "категорія". Об'єднайте їх в один об'єкт і виведіть результат на сторінку.

const product1 = {
    name: 'banana',
    price: '12.50',
    category: 'fruit'
}

const product2 = {
    name: 'tomato',
    price: '8.99',
    category: 'vegetable'
}

const product3 = {product1, product2}

console.log(product3)