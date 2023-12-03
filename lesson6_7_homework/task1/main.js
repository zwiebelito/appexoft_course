// Завдання 2
// Зробити запит на публічну API JSONPlaceholder https://jsonplaceholder.typicode.com/users/1
//
// Зробити цей запит 2 способами
// За допомогою async await
// І за допомогою Promise Chaining (Нагадую .then(()=>{}).catch(()=>{})) і так дальше
// в консоль ви повинні вивести дані з запиту про користувача а саме
// id,name,username,email,phone,website


// ------------------------------------------ Перший спосіб ----------------------------------------------------------
const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const data = await response.json()
    const {id, name, username, email, phone, website} = data;
    console.log(`Id: ${id}, name: ${name}, username: ${username}, email: ${email}, phone: ${phone}, website: ${website}`)
}

getData()


// ------------------------------------------ Другий спосіб ----------------------------------------------------------

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json()
        .then(data => {
            const {id, name, username, email, phone, website} = data;
            console.log(`Id: ${id}, name: ${name}, username: ${username}, email: ${email}, phone: ${phone}, website: ${website}`)
        }))
    .catch(error=> alert(error));