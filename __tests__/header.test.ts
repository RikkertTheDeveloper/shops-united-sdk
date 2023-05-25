import { ShipmentDigest, generate_header } from "../src/index"

describe('Header Generation', () => {
    it('Construct a header with fake key and arguments.', () => {
        const USER_ID = 1234;
        const SHIPMENT_ID = 123;
        const API_KEY = "fake-key-123";

        const digestTemplate: ShipmentDigest = {
            ApiKey: API_KEY,
            UserId: USER_ID,
            ShipmentId: SHIPMENT_ID,
        }

        expect(generate_header(digestTemplate)).toEqual("2a7ab1b32addaf0235182059cba17f7aa533601f8d54113e1eb2a08bd5e8ed15");
    });
});
