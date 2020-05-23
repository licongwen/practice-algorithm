const testFn = require('../lib')

describe('longest Palindrome', function () {
  it('test', () => {
    expect(testFn.longestPalindrome('abba')).toEqual('abba')
    expect(testFn.longestPalindrome('a')).toEqual('a')
    expect(testFn.longestPalindrome('babad')).toEqual('aba')
    expect(testFn.longestPalindrome('cbbd')).toEqual('bb')
  })
})
