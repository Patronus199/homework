// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
// Должно работать так:
// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false


let schedule = {};
function isEmpty(obj){
    for( let key in obj){
        if( key == undefined){
            return true
        }
        return false
    }
}