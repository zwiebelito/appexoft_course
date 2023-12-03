// Завдання 3
// Зробити запит на публічну API JSONPlaceholder https://jsonplaceholder.typicode.com/users
//
// створити асинхронну функцію getUsers, яка отримує список користувачів з API. За допомогою async/await отримати
// дані з сервера та деструктуризувати необхідні поля (id, name, email) для кожного користувача. Після отримання
// списку користувачів, вивести їх дані в консоль.

const getUsers = async (url) => {
    const response = await fetch(url)
    const users = await response.json()
    users.map(user => {
        const {id, name, email} = user;
        console.log(`Id: ${id}, name: ${name}, email: ${email}`)
    })
}

getUsers('https://jsonplaceholder.typicode.com/users')