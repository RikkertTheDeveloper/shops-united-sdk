import { HttpBuilder } from "../src/index"

describe("HTTPClient Tests", () => {
    const USER_ID: number = 1234;
    const API_KEY: string = "fake-key-123";

    it('Construct a new HTTPClient class using the HTTPBuilder class.', () => {
        const MY_CLIENT = new HttpBuilder()
            .api_key(API_KEY)
            .user_id(USER_ID)
            .construct();

        expect(MY_CLIENT.api_key).toBeDefined();
        expect(MY_CLIENT.user_id).toBeDefined();

        expect(MY_CLIENT.api_key).toEqual(API_KEY);
        expect(MY_CLIENT.user_id).toEqual(USER_ID);
    });

    it("Generate a new validate_key request, and check it's value", () => {
        const MY_CLIENT = new HttpBuilder()
            .api_key(API_KEY)
            .user_id(USER_ID)
            .construct();

        const MY_REQUEST_HEADER = MY_CLIENT.validate_key("25-05-2023");
        expect(MY_REQUEST_HEADER).toBeDefined();
    });

    it("Generate a new get_shipment request, and check it's value.", () => {
        const MY_CLIENT = new HttpBuilder()
            .api_key(API_KEY)
            .user_id(USER_ID)
            .construct();

        const MY_REQUEST_HEADER = MY_CLIENT.get_shipment(123);
        expect(MY_REQUEST_HEADER).toBeDefined()
    });
});
