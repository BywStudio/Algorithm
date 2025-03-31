const array = [3, 6, 4, 2, 5]

// 交换数组元素位置的函数
function swap(array, a, b) {
  let temp = array[a]
  array[a] = array[b]
  array[b] = temp
}

// 简单的冒泡排序 1
function bubbleSort(array) {
  let n = array.length
  // 外层定义循环的总次数，总次数为 n - 1
  for(i = 0; i < n - 1; i++) {
    console.log(`\ni 执行的第 ${i+1} 次`)
    /* 内层根据元素的位置相互进行比较:
    1. j 执行第一次: 1-2 2-3 3-4 4-5
    2. j 执行第二次: 2-3 3-4 4-5
    3. j 执行第三次: 3-4 4-5
    4. j 执行第四次: 4-5，此时其实已经比较完了，所以会多出这一次重复的，所以可以优化为判断是否有序
    */
    for(j = 0; j < n - i; j++) {
      if(array[j] > array[j+1]) {
        swap(array, j, j+1)
      } 
    }
    console.log(`j 一共执行的次数${n - i}\n`)
    console.log(`${array}`)
    console.log('================\n')
  }
}

bubbleSort(array)