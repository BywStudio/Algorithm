const array = [3, 6, 4, 2, 5]

// 交换数组元素位置的函数
function swap(array, a, b) {
  let temp = array[a]
  array[a] = array[b]
  array[b] = temp
}

// 判断原数组是否有序
// 有序 -> 不排列
// 无序 -> 排列
function bubbleSort(array) {
  let n = array.length
  // 判断数组是否有序的条件，默认是有序的
  let hasSort = true
  // 外层定义总循环次数
  for(i = 0; i < n - i; i++){
    console.log(`\ni 执行的第 ${i+1} 次`)
    // 内层根据数组元素位置相互比较大小
    for(j = 0; j < n - i; j++) {
      // 进入这一步，证明数组是无序的，修改 hasSort 的值为 false，继续执行外层循环
      if(array[j] > array[j+1]) {
        swap(array, j, j+1)
        // 数组是无序的
        hasSort = false
      } 
    }
    
    // 如果是有序的，则终止外层循环
    if(hasSort) {
      console.log('数组是有序的, 无需冒泡排序')
      break
    }
    console.log(`j 一共执行的次数${n - i}\n`)
    console.log(`${array}`)
    console.log('================\n')
  }
}

bubbleSort(array)