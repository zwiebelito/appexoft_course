// 4. Валідація даних
// Створіть інтерфейс для об'єкта "Замовлення", який має поля
// "назва товару", "кількість", "ціна за одиницю". Напишіть функцію,
// яка приймає на вхід об'єкт замовлення, перевіряє, чи всі поля заповнені вірно
// (наприклад, кількість та ціна - цілі числа більше 0), і повертає відповідний результат валідації.

interface IOrder {
    name: string;
    quantity: number;
    price: number;
}

const checkOrder = (obj: IOrder) => {
    if (obj.price > 0 && obj.quantity > 0) {
        console.log('Order has created successfully')
    } else {
        console.log('Please try again')
    }
}

const order1: IOrder = {
    name: 'chair',
    quantity: 1,
    price: 25.99
}
const order2: IOrder = {
    name: 'chair',
    quantity: 0,
    price: 0
}

checkOrder(order1)
checkOrder(order2)