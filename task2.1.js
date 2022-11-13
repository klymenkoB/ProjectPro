// 1)  Написать свою функцию для глубокого копирования объектов. 
// При этом алгоритм должен осуществляться вручную (никаких вариантов с 
// использованием готовых библиотек и даже JSON.stringify() + JSON.parse(), 
// за это сразу 0 баллов за первую задачу). Функция должна называться makeObjectDeepCopy. 
// Принимать функция должна один параметр - объект, копию которого нужно сделать.  Функции можно не копировать

// объекты могуть быть такими, например: 

let another_sample_object = {
    'instanceOfFunction': new Function('return "test"'),
    'undefiendCheck': undefined,
    0: null,
    1: 'one',
    2: 'two',
    foo: n => {
        return n;
    },
    nestedObjects: {
        nastedArrays: [
            [0, 1, 2],
            [3, 4, {
                objInArray: 12334
            }], {
                nike: 'sneakers'
            }
        ],
        nestedFunction: {
            prostoPrivet: function() {
                return 'test';
            }
        }
    }
}

let sample_object = {
    lev_1_first_key: "first_value",
    lev_1_second_key: 10,
    lev_1_third_key: {
        lev_2_first_key: "first_value",
        lev_2_second_key: [1, 2, { 1:22, 2:[5, 4 , 2 , 6 ,8] }, 4],
        lev_2_third_key: {
            lev_3_first_key: "first_value",
            lev_3_second_key: 30
        }
    }
}

  const cloneAnotherSampleObject = deepClone(another_sample_object);
  function deepClone(obj) {
    const clObj = {};
    for(const i in obj) {
      if (obj[i] instanceof Object) {
        clObj[i] = deepClone(obj[i]);
        continue;
      }
      clObj[i] = obj[i];
    }
    return clObj;
  } 
  alert(cloneAnotherSampleObject)