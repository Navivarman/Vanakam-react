import { sum } from "../sum"

test('Should calculate the two numbers', () => { 
    const result = sum(3,7)
    expect(result).toBe(10)
})
