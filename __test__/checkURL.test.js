import { checkURL } from '../src/client/js/urlChecker'

describe("function to check for valid URL", () => {
    test("reject URL with space", () => {
        const url = 'https://uda city.com'
        expect(checkURL(url)).toBe(false)
    })
    test("reject misspelled url", () => {
        const url = 'htts://udacity.com'
        expect(checkURL(url)).toBe(false)
    })
    test("reject protocol with no URL", () => {
        const url = 'udacity.com'
        expect(checkURL(url)).toBe(false)
    })
  
    test("reject URL with protocol not at the beginning", () => {
        const url = 'udacity.https://com'
        expect(checkURL(url)).toBe(false)
    })
   
    test("accept valid URL", () => {
        const url = 'https://udacity.com'
        expect(checkURL(url)).toBe(true)
    })
})