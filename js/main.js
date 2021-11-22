// 1 Переменные (3)
//  camelCase
//const firstName = 'Nazar'
//let age = 18 //number 
//const isProgrammer = true //boolean

// 2 Мутирование 
//('Имя человека: '  + firstName  + '\nВозраст человека: '+ age)
//const lastName = prompt('Введите фамилию')
//alert(firstName+' '+lastName)
// 3 Операторы 
//let currentYear = 2020
//const birthYear = 1993

//const age = currentYear - birthYear
//const a=10
//const b=5

//console.log(a-b)
//console.log(currentYear++)
//console.log(--currentYear)

//let c = 32
//c = c + a
//console.log(c)
// 4 Типы даных 
//const isProgrammer = true 
//const name = 'Nazar'
//const age = 26
//console.log(typeof isProgrammer)
//console.log(typeof name)
//console.log(typeof age)
// 5 Приоритет операторов 
//const fullAge = 18
//const birthYear = 2003
//const currentYear = 2020
//const isfullAge = currentYear - birthYear >= fullAge
//console.log(isfullAge)
// 6 Условные операторы 
// const courseStatus = 'ready'
// if (courseStatus==='ready'){
//     console.log('Курс уже готов и его можно проходить')
// } else if (courseStatus==='pending'){
//     console.log('Курс находится в процесе разработки')
// } else {
//     console.log('Курс не получился')
// }
// const num1 = 42//number 
// const num2 = '42'//string

// console.log(num1==num2)

// const isReady = false

// if (isReady){
//     console.log("Всё готово")
// }else {
//     console.log("Все не готово")
// }
// Тернарное выражение
// isReady ? console.log("Всё готово") : console.log("Все не готово")
// 7 Функции 
//  function calculateAge(year){
//     return 2021 - year
// }
//  const myAge = calculateAge(2003)
//  console.log(myAge)

// function logInfoAbout(name, year){
//     const age = calculateAge(year)
//     if(age>0){
//         console.log('Человек по имени ' + name + ' Сейчас имеет возраст ' + age)
//     } else {
//         console.log('Вообще-то это уже будущее!')
//     }
// }
// logInfoAbout('Назар',20025)
// 8 Массвы 
// const cars = ['Мазда','Мерседес','Форд']
// // const cars = new Array ('Мазда','Мерседес','Форд')
// console.log(cars.length)

// cars[0] = 'Porshe'

// cars[cars.length]='Mazda'
// console.log(cars)
// 9 Циклы 
const cars = ['Мазда','Мерседес','Форд']
// for (let i=0;i<cars.length;i++){
//     const car = cars[i]
//     console.log(car)
// }
for (let car of cars){
    console.log(car)
}






