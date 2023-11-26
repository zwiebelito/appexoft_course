// 15 Об'єднання об'єктів зі значеннями за замовчуванням: Створіть два об'єкта, які містять дані про піца
// (розмір, начинка, ціна) та об'єднайте їх в один об'єкт, встановивши значення за замовчуванням для невказаних полів.

const pizza1 = {
    price: '10.50$'
}

const pizza2 = {
    size: 'medium',
    ingredients: ['flour', 'mozzarella',  'tomatoes', 'mushroom' , 'salt', 'yeast', 'truffle oil', 'parmesan']
}

const mergePizza = {...pizza1, ...pizza2}

console.log(mergePizza)