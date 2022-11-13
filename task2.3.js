// Создать обычный объект и сделать его итерируемым.
// При этом итерация должна происходить следующим 
// образом:
// Должны поочерёдно проходиться все значения от 
// внутреннего свойства объекта from, до внутреннего 
// свойства объекта to. (в случае если to < from - 
// должна возникать ошибка).
// Если to или from не указаны ИЛИ to или from 
// являются не числами, должна возникать ошибка. 
// Объект должен называться myIterable. Это важно, 
// т.к. проверять буду тестами.
// > Примеры:
const myIterable = { from: 1, to: 4 };
// for (let item of myIterable) {
//  console.log(item); // 1, 2, 3, 4
// }

// const myIterable = { from: 'aaa', to: 4 };
// for (let item of myIterable) { // Ошибка!
//  console.log(item);
// }

// myIterable[Symbol.iterator] = function() {

//     // ...она возвращает объект итератора:
//     // 2. Далее, for..of работает только с этим итератором, запрашивая у него новые значения
//     if (this.from === Number && this.to === Number){
//     }  
//         if (this.from < this.to){
//     return {
//       current: this.from,
//       last: this.to,
  
//       // 3. next() вызывается на каждой итерации цикла for..of
//       next() {
//         // 4. он должен вернуть значение в виде объекта {done:.., value :...}
//         if (this.current <= this.last && this.from === Number && this.to === Number) {
//           return { done: false, value: this.current++ };
//         } else {
//           return { done: true };
//         }
//       }
//     } 
// } else {
//         console.log('error')
//     };
//   };

  
  myIterable[Symbol.iterator] = function () {
    if (!Number.isInteger(this.from) || !Number.isInteger(this.to)) {
      throw new Error("From or to must be a number");
    }
    if (this.from > this.to) {
      throw new Error("From must be a bigger then to");
    }
    return {
      current: this.from,
      last: this.to,
  
      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  };
  
  
  for (let item of myIterable) {
 console.log(item); // 1, 2, 3, 4
}