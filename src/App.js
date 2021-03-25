import React from 'react'


function Tasks () {

                                                          //Задание 1

  //Допиши код так, чтобы в переменной positive остались 
  //только положительные числа из массива

const array = [22, 0, -45, 1001, 8, -6, -0.1, 101, 2.5, -55555];
const positive = array.filter(item => item>=0)

console.log(positive);


                                                           //Задание 2

  //Напиши фильтр, который пропустит только те элементы (объекты), 
  //у которых свойство error равно false. 
  //Выведи полученный результат в консоль.

const messages = [
  {message: 'hello', error: true},  
  {message: 'javascript', error: false},  
  {message: 'intocode', error: true},  
  {message: 'react', error: true},  
  {message: 'angular', error: false}, 
  {message: 'es6', error: false}, 
];
const newMessages = messages.filter(item => item.error===false)

console.log(newMessages);

                                                         //Задание 3

//Используя метод .map создай новый массив, 
//где слова короче пяти символов заменены на звездочку.


const words= ['intocode', 'js', 'react', 'css', 'angular', 'bootstrap', 'html'];
const newWords = words.map(i => i.length<5 ? i="*" :i);

console.log(newWords);


                                                         //Задание 4
//Измени следующие функцию на стрелочные

//функция 1

/*function sendMessage() {
 
}*/

//функция 2
/*
function half(number) {
  return number / 2;
}*/
const half = (number => number/2)
console.log(half(15));


//функция 3
/*
function showConsole() {
  console.log('intocode');
}
*/
const showConsole = () => 'intocode';
console.log(showConsole());


//функция 4
/* 
function concatWords(first, second) {
  return first + second;
}
*/
 const concatWords = ((first, second) => first + second);
 console.log(concatWords('Java', 'Script'))

                                                         //Задание 5
//Измени следующие функции из стрелочных в обычные

//функция 1 
//const justText = () => 'intocode';

const justText = () => 'intocode';
console.log(justText());

//функция 2
//const logging = text => console.log(text);

const logging = function (text){
  return text
  }
  console.log(logging("react"));

//функция 3
/*

const add = (x,y) => {
  const z = 3;

  return z * x * y;
}

*/

const add = function (x,y) {
  const z = 3;
  return z * x * y;
}
console.log(add(2,3));


//функция 4
/*

const onlyPositive = (number) => {
  if(number < 0) {
    return false;
  }

  return true;
}
*/

const onlyPositive = function (number){
  if(number < 0) {
    return false;
  }
  return true;
}
console.log(onlyPositive(2));


    return (
        <div>
             Задания (массивы и стрелочные функции)
        </div>
    )
}

export default Tasks