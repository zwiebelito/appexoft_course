//1. Типи транспортних засобів
// Створіть інтерфейси для різних типів транспортних засобів:
// автомобіль, мотоцикл, велосипед. В кожному з інтерфейсів визначіть
// необхідні властивості та їх типи (наприклад, "марка", "рік випуску", "швидкість" тощо).
// Потім створіть функцію, яка приймає об'єкт транспортного засобу та виводить інформацію про нього на екран.


interface ICar {
    brand: string;
    maxSpeed: number;
    year: number;
}

interface IMoto {
    brand: string;
    maxSpeed: number;
    year: number;
}

interface IBike {
    brand: string;
    maxSpeed: number;
    year: number;
}

const car:ICar = {
    brand: 'BMW',
    maxSpeed: 255,
    year: 2017
}

const moto:IMoto = {
    brand: 'Suzuki',
    maxSpeed: 200,
    year: 2010
}

const bike:IBike = {
    brand: 'Merida',
    maxSpeed: 80,
    year: 2020
}

const showData = (obj:ICar | IMoto | IBike) => {
    console.log(obj)
}

showData(car)
showData(moto)
showData(bike)