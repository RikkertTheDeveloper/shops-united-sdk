import { HttpBuilder } from "../src/index"

describe("HTTP Clien Test", () => {
    it('Construct a new HTTPClient class using the HTTPBuilder class.', () => {
        const USER_ID = 1234;
        const API_KEY = "fake-key-123";

        const MY_CLIENT = new HttpBuilder()
        .api_key(API_KEY)
        .user_id(USER_ID)
        .construct();

        expect(MY_CLIENT.api_key).toEqual(API_KEY);
        expect(MY_CLIENT.user_id).toEqual(USER_ID);
    });
});
