import { scoreDescription } from '../src/client/js/formHandler'

describe("Testing the score description function", () => {
    test("testing the switch statements functionality", () => {
        expect(scoreDescription("P")).toBe("POSITIVE")
    });
});