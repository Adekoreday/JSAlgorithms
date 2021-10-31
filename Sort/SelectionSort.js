const SelectionSort = function (arr) {
  function Swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }
  //const arrClone = [...arr];
  for (let i = 0; i < arr.length; i++) {
    let least = { location: i, value: arr[i] };
    for (let j = i; j <= arr.length; j++) {
      if (arr[j] < least.value) {
        least = { location: j, value: arr[j] };
      }
    }
    Swap(arr, least.location, i);
  }
  return arr;
};

console.log(SelectionSort([5, 1, 4, 9, 4]));
