const Manager = require("./lib/Manager")

test("assigns office information based on prompt responses", () => {
    const testInput = "456"
    const e = new Intern("Abi", "123", "none@test.com", testInput)
    expect(e.github).toBe(testInput)
})