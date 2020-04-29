const { sum, avg } = require('./index.mjs')


test('測試加總: (1,2)', () => {
  expect(sum(1, 2)).toBe(3)
})

test('測試平均: (2,8)', () => {
  expect(avg(2, 8)).toBe(5)
})