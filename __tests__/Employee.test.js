const Employee = require("./lib/Employee")

test("assigns name based on prompt responses", () => {
    const testInput = "Abi"
    const e = new Intern(testInput, "123", "none@test.com", "test")
    expect(e.github).toBe(testInput)
})

test("assigns email based on prompt responses", () => {
    const testInput = "beggsaj@gmail.com"
    const e = new Intern("Abi", "123", testInput, "test" )
    expect(e.github).toBe(testInput)
})

test("assigns ID based on prompt responses", () => {
    const testInput = "456"
    const e = new Intern("Abi", testInput , "none@test.com", "test")
    expect(e.github).toBe(testInput)
})