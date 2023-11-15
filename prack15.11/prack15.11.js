// Робота з класом Array
function modifyArray(arr) {
    arr.unshift("start");
    arr.pop();
    arr[1] = "modified";
    return arr;
  }
  
  // Приклад використання:
  let myArray = [1, 2, 3, 4, 5];
  let modifiedArray = modifyArray(myArray);
  console.log(modifiedArray);
  
  // Робота з методами класу Array
  function arrayOperations(arr) {
    arr.push("end");
    arr.shift();
    arr.splice(3, 0, "middle");
    return arr;
  }
  
  // Приклад використання:
  let myArray2 = [1, 2, 3, 4, 5];
  let modifiedArray2 = arrayOperations(myArray2);
  console.log(modifiedArray2);
  
  // Робота з класом Number
  function checkInteger(number) {
    if (Number.isInteger(number)) {
      return "Число ціле";
    } else {
      return "Число не ціле";
    }
  }
  
  // Приклад використання:
  let myNumber = 42;
  let result = checkInteger(myNumber);
  console.log(result);