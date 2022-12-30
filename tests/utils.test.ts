import "jest"
import { dateStringToArray } from "../utils"

test("adds 1 + 2 to equal 3", () => {
  expect(1 + 2).toBe(3)
})

test("function dateStringToArray", () => {
  expect(dateStringToArray("2000-01-01")).toStrictEqual(["2000", "01", "01"])
  expect(dateStringToArray("2000-1-1")).toStrictEqual(["2000", "01", "01"])
  expect(() => dateStringToArray("")).toThrow()
  expect(() => dateStringToArray("2000-0-0")).toThrow()
})
