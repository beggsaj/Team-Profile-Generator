const Engineer = require("./lib/Engineer")

test("assigns github account information based on prompt responses", () => {
    const testInput = "beggsaj"
    const e = new Engineer("Abi", "123", "none@test.com", testInput)
    expect(e.github).toBe(testInput)
})