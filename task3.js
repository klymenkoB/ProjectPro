// 3) Создать обычный объект и сделать его итерируемым. При этом итерация должна происходить следующим образом:
// Должны поочерёдно проходиться все значения от внутреннего свойства объекта from, до внутреннего свойства объекта to. (в случае если to < from - должна возникать ошибка).
// Если to или from не указаны ИЛИ to или from являются не числами, должна возникать ошибка. Объект должен называться myIterable. Это важно, т.к. проверять буду тестами.
// > Примеры:
// const myIterable = { from: 1, to: 4 };
// for (let item of myIterable) {
//  console.log(item); // 1, 2, 3, 4
// }

// const myIterable = { from: 'aaa', to: 4 };
// for (let item of myIterable) { // Ошибка!
//  console.log(item);
// }

const myIterable = { 
    from: 1, 
    to: 4 
}
myIterable[Symbol.iterator] = function () {
    const start = this.from
    const end = this.to
    return {
        next () {
            if (start <= end) {
                return {
                    done: false
                    value: start++ 
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }
}

for (let num of myIterable) {
    alert(num)
}
