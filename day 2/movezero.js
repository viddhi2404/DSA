let inputArray = [1, 2, 3, 4, 5, 6, 0, 7, 0, 5, 0, 0, 0];
function moveZerosToEnd(arr) {
   let index = 0;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        [arr[i], arr[index]] = [arr[index], arr[i]];
        index++;  
      }
    }
   
  }
  let outputArray = moveZerosToEnd(inputArray); 
  console.log(outputArray); 


  