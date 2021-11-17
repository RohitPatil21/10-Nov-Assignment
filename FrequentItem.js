// Find Frequent item 

var arr = [1,2,3,4,5,2,7,5,8,2,1,5,3];
var arr1 = new Array();
var freqItem;
function frequentItem() {
  arr = arr.sort();
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count = count + 1;
      }
    }
    arr1.push(count);
  }
  let max = arr1[0];
  for (x in arr1) {
    if (x > max) {
      max = x;
    }
  }
  frequentitem = arr[max];
  return frequentitem;
}

console.log(frequentItem());