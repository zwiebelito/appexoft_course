// 2. Об'єкти та їх динамічні властивості
// Створіть інтерфейс для об'єкту "Користувач".
// У користувача може бути базова інформація, така як ім'я, вік та стать.
// Але також користувач може мати додаткову інформацію, яку ви не знаєте наперед
// (наприклад, "хобі", "улюблений фільм" тощо). Використовуючи конструкцію об'єкту
// з динамічними властивостями, додайте можливість вводу цих додаткових даних для кожного користувача.

interface IUser {
    name: string;
    age: number;
    gender: string;
    [key: string]: any;
}

const user: IUser = {
    name: 'we',
    age: 22,
    gender: 'male',
    hobby: 'football',
    films: ['Spider-man', 'The Creator']
}

console.log(user);