/**
 * 最长回文字串
 * @param {string} s
 */
function longestPalindrome (s: string): string {
  if (typeof s !== 'string' || s.length < 2) {
    return s
  }


  const sLength: number = s.length
  let start: number = 0
  let end: number = 0

  // 选定一个中心点，然后向两边扩展
  const getLen = function (left: number, right: number) {
    while (left >= 0 && right < sLength && s[left] === s[right]) {
      left--
      right++
    }

    return right - left - 1
  }

  for (let i = 0; i < sLength ; i++) {
    // 回文的方式有两种，一种是 aba，另一种是 abba，取长度最长的
    let len1 = getLen(i, i)
    let len2 = getLen(i, i + 1)

    let maxLen = Math.max(len1, len2)

    if (maxLen > end - start) {
      start = i - Math.floor((maxLen - 1) / 2)
      end = i + Math.floor(maxLen / 2)
    }
  }

  return s.substring(start, end + 1)
}

export {
  longestPalindrome
}
