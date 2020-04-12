/* eslint-disable no-unused-expressions */
// sc: https://ru.hexlet.io/courses/regexp/lessons/lookaround/exercise_unit

// solution
// Напишите регулярное выражение, которое находит подстроку 1, за которой следует
// подстрока 2:

// 1. 80
// 2. : и один или более символов не входящих в класс a-z
// Используйте позитивный просмотр вперед.

// // match
// ['80:8080, 80:!@#$'];

// // not match
// ['80:', '80', '80:d123f'];

/80(?=:[^a-z]+)/; // + не обязателен, если есть больше одного совпадения, то есть и одно.

/80(?=:[^a-z])/;
