const Intern = require("./lib/Intern")

test("assigns school information based on prompt responses", () => {
    const testInput = "Wake Forest"
    const e = new Intern("Abi", "123", "none@test.com", testInput)
    expect(e.github).toBe(testInput)
})