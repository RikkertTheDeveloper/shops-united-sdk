import { HttpBuilder } from "../src/index"
import { DateTime } from "../src/types";

describe("HTTPClient Tests", () => {
    const USER_ID: number = 1234;
    const API_KEY: string = "fake-key-123";
    const THIS_DATE = new Date();
    const CURRENT_DATE: any | DateTime = `${THIS_DATE.getDate()}-${THIS_DATE.getMonth()}-${THIS_DATE.getFullYear()} ${THIS_DATE.getHours()}:${THIS_DATE.getMinutes()}:${THIS_DATE.getSeconds()}`;

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

        const MY_REQUEST_HEADER = MY_CLIENT.validate_key(CURRENT_DATE);
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

    it("Generate a new post_shipment request, and check it's value.", () => {
        const MY_CLIENT = new HttpBuilder()
            .api_key(API_KEY)
            .user_id(USER_ID)
            .construct();

        const MY_REQUEST_HEADER = MY_CLIENT.post_shipment(10, "0000FK");
        expect(MY_REQUEST_HEADER).toBeDefined()
    });

    it("Generate a new delete_shipment request, and check it's value.", () => {
        const MY_CLIENT = new HttpBuilder()
            .api_key(API_KEY)
            .user_id(USER_ID)
            .construct();

        const MY_REQUEST_HEADER = MY_CLIENT.delete_shipment(123)
        expect(MY_REQUEST_HEADER).toBeDefined()
    });

    it("Generate a new get_label request, and check it's value.", () => {
        const MY_CLIENT = new HttpBuilder()
            .api_key(API_KEY)
            .user_id(USER_ID)
            .construct();

        const MY_REQUEST_HEADER = MY_CLIENT.get_label(123)
        expect(MY_REQUEST_HEADER).toBeDefined()
    });

    it("Generate a new post_pickup request, and check it's value.", () => {
        const MY_CLIENT = new HttpBuilder()
            .api_key(API_KEY)
            .user_id(USER_ID)
            .construct();

        const MY_REQUEST_HEADER = MY_CLIENT.post_pickup(123)
        expect(MY_REQUEST_HEADER).toBeDefined()
    });

    it("Generate a new get_pickup_points request, and check it's value.", () => {
        const MY_CLIENT = new HttpBuilder()
            .api_key(API_KEY)
            .user_id(USER_ID)
            .construct();

        const MY_REQUEST_HEADER = MY_CLIENT.get_pickup_points(10, "0000FK")
        expect(MY_REQUEST_HEADER).toBeDefined()
    });

    it("Generate a new get_webhooks request, and check it's value.", () => {
        const MY_CLIENT = new HttpBuilder()
            .api_key(API_KEY)
            .user_id(USER_ID)
            .construct();

        const MY_REQUEST_HEADER = MY_CLIENT.get_webhooks(CURRENT_DATE)
        expect(MY_REQUEST_HEADER).toBeDefined()
    });

    it("Generate a new post_webhook request, and check it's value.", () => {
        const MY_CLIENT = new HttpBuilder()
            .api_key(API_KEY)
            .user_id(USER_ID)
            .construct();

        const MY_REQUEST_HEADER = MY_CLIENT.post_webhook("Delivered")
        expect(MY_REQUEST_HEADER).toBeDefined()
    });

    it("Generate a new delete_webhook request, and check it's value.", () => {
        const MY_CLIENT = new HttpBuilder()
            .api_key(API_KEY)
            .user_id(USER_ID)
            .construct();

        const MY_REQUEST_HEADER = MY_CLIENT.delete_webhook(1)
        expect(MY_REQUEST_HEADER).toBeDefined()
    });
});
