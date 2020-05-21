/**
 * 按照指定的顺序输入数字的值
 * @param arr 二维数组
 */
function outPutArrayByOrder (arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return
  }

  // if ()

  const horizontalLength = arr[0].length // 二维矩阵
  const verticalLength = arr.length // 垂直

  const finalArr= []


  for (let i = 0; i < horizontalLength; i++) {
    finalArr.push(arr[0][i])
  }

  return finalArr
}


const arr= [[5, 4, 7], [3, 2, 6], [1, 8, 9], [10, 11, 12]]

console.log(outPutArrayByOrder(arr))


