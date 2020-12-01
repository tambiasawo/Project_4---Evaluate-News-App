import { getServerData } from '../src/client/js/formHandler'

const fetch = require('node-fetch')
jest.mock('node-fetch')

describe("Testing the connection between server and API return", () => {

    test("Should return status code '0' from API", async () => {

        fetch.mockResolvedValue({
            'status': {
                'code': "0"
            }
        })
        const result = await getServerData('http://localhost:8080/call', "sampleString")
        expect(result.status.code).toEqual("0")
    })

})