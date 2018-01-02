// run these test using jest
const {sum , subtract} = require('./math')

test('sum adds number', () => {
    const result = sum(3,7)
    const expected = 10

    expect(result).toBe(expected)
})

test('subtract subtracts numbers', () => {
    const result = subtract(7, 3)
    const expected = 4

    expect(result).toBe(expected)
})
