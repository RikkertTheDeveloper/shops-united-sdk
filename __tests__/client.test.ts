import { DigestFactory, HttpBuilder, generate_header } from "../src/index"
import { DateTime } from "../src/types";

describe("HTTPClient Tests", () => {
    const USER_ID: number = 1234;
    const API_KEY: string = "fake-key-123";
    const THIS_DATE = new Date();
    const SPLIT_DATE = Date().split(" ");
    var CURRENT_DATE: DateTime | any = SPLIT_DATE[3] + "-" + (THIS_DATE.getMonth() < 10 ? `0${THIS_DATE.getMonth()}` : THIS_DATE.getMonth()) + "-" + SPLIT_DATE[2] + " " + SPLIT_DATE[4]

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

        const HEADER_DIGEST = new DigestFactory(API_KEY, USER_ID)
            .date(CURRENT_DATE)
            .date_digest();

        const PARSED_HEADER = generate_header(API_KEY, HEADER_DIGEST)

        const MY_REQUEST_HEADER = MY_CLIENT.validate_key(CURRENT_DATE, PARSED_HEADER);
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
