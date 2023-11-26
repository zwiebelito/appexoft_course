// 12 Ітерація по об'єкту: Створіть об'єкт з даними про рецепт (назва, інгредієнти, інструкція).
// Пройдіться по всім інгредієнтам використовуючи цикл for...in і виведіть їх на сторінку.

const receipt = {
    name: 'strawberry cake',
    ingredients: ['sugar', 'butter', 'eggs', 'flour', 'baking powder', 'milk', 'strawberries', 'vanilla'],
    instruction: 'Beat the butter, sugar, and Jell-O together. Add the eggs. Combine the dry ingredients. Gradually the dry mixture into the wet mixture, alternating with the milk. Add the remaining ingredients and transfer the batter to prepared cake pans. Bake in the preheated oven until a toothpick comes out clean.'
}

for (const receiptKey in receipt) {
    if (receiptKey === 'ingredients'){
        for (const ingredient of receipt[receiptKey]) {
            console.log(ingredient)
        }
    }
}