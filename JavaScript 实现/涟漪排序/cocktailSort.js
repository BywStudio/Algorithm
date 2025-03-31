// 双向冒泡排序
const array = [2, 6, 8, 4, 3, 5, 10, 43, 38, 21, 65]

// 交换数组元素位置的函数
function swap(array, a, b) {
  let temp = array[a]
  array[a] = array[b]
  array[b] = temp
}

function cocktailSort(array) {
  let left, right, index, i
  // 数组起始索引
  left = 0 
  // 数组索引的最大值
  right = array.length - 1
  // 临时变量
  index = left

  // 每一次进入 while 循环, 都会找出响应范围内最大、自小的元素并分别放到相应的位置
  while(right > left) {
    let isSorted = false
    // 大的排在后面
    for(i = left; i < right; i++) {
      if(array[i] > array[i+1]){
        swap(array, i, i+1)
        index = i // 记录当前索引
        isSorted = true
      }
      console.log(`-> 从左往右扫描第${i+1}次: ${array}`)
    }
    // 记录最后一个交换的位置
    right = index
    // 小的排在前面
    // 从最后一个交换位置从右向左扫描
    for(i = right; i > left; i--) {
      if(array[i] < array[i -1]){
        swap(array, i, i-1)
        index = i
        isSorted = true
      }
      console.log(`* 从右往左扫描第${9-i}次: ${array}`)
    }
    // 记录最后一个交换的位置
    left = index
    // 判断是否是有序的数组
    if(!isSorted) {
      break
    }
  }
  console.log(`\n${array}`)
}

cocktailSort(array)