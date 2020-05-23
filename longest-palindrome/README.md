# 最长回文字串
[leetcode题库链接](https://leetcode-cn.com/problems/longest-palindromic-substring/submissions/)

## 中心扩展法

>从中间某一项开始，依次对比该项左右的值是否相等

  回文的形式有两种：1). cbbd 2). ababd，所以传值的方式也有两种

```js
function getLen(left, right) {
  // ...
  left--
  right++
}

// 第一种
getLen(i, i)

// 第二种
getLen(i, i + 1)
```

从而可以拿到回文的最长长度，继而可以获取最长回文的start位置，和end位置。具体方法可以看 ./lib/index.ts。测试文件./test/index.spec.js
