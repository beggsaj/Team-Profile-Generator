const Manager = require("../lib/Manager")

test("assigns office information based on prompt responses", () => {
    const testInput = "456"
    const e = new Manager("Abi", "123", "none@test.com", testInput)
    expect(e.officeNumber).toBe(testInput)
})