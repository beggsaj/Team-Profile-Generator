const Employee = require("../lib/Employee")

test("assigns name based on prompt responses", () => {
    const testInput = "Abi"
    const e = new Employee(testInput, "123", "none@test.com", "test")
    expect(e.name).toBe(testInput)
})

test("assigns email based on prompt responses", () => {
    const testInput = "beggsaj@gmail.com"
    const e = new Employee("Abi", "123", testInput, "test" )
    expect(e.email).toBe(testInput)
})

test("assigns ID based on prompt responses", () => {
    const testInput = "456"
    const e = new Employee("Abi", testInput , "none@test.com", "test")
    expect(e.id).toBe(testInput)
})