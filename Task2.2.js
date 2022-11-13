
// Написать функцию, которая принимает три аргумента: массив чисел, первое значение интервала, второе значение интервала. Результатом вызова функции должен быть массив из значений, переданного массива, которые входят в этот интервал (концы включая). Договоримся использовать только массивы чисел. При этом значения интервала могут быть только числами. Если в качестве первого параметра передан не массив или массив, содержащий не только числа - кидать ошибку (throw new Error('error message')). Если хотя бы одно из значений интервала - невалидное число - также кидать ошибку.
// Если первое значение интервала < второго, то считать за интервал значения от первого до второго, в ином случае - от второго до первого.
// Функция должна называться selectFromInterval. Это важно, т.к. проверять буду тестами.
// > Примеры:
// Вызываем функцию: selectFromInterval([1,3,5], 5, 2)
// Получаем результат: [3,5]
// Вызываем функцию: selectFromInterval([-2, -15, 0, 4], -13, -5)
// Получаем результат: []
// Вызываем функцию: selectFromInterval(['aaa'], 2, 3)
// Получаем результат: Ошибка!

function selectFromInterval(array, indexA, indexB) {
  const isArray = Array.isArray(array);
  const isValidArray =
    isArray && array.every((item) => typeof item === "number");
  const isValidBaundaries =
    typeof indexA === "number" && typeof indexB === "number";

  if (isValidArray && isValidBaundaries) {
    let start;
    let end;
    if (indexA < indexB) {
      start = indexA;
      end = indexB;
    } else {
      start = indexB;
      end = indexA;
    }
    const result = array.slice(start - 1, end);
    return result;
  } else {
    throw new Error("not valid array");
  }
}
console.log(selectFromInterval([1, 3, 5], 5, 2))
console.log(selectFromInterval([-2, -15, 0, 4], -13, -5))
console.log(selectFromInterval(["aaa"], 2, 3))
