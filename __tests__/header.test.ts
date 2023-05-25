import { DigestFactory, ShipmentDigest, generate_header } from "../src/index"
import { PostShipmentBody } from "../src/types";

describe('Header Generation', () => {
    it('Construct a header with fake key and arguments.', () => {
        const USER_ID: number = 1234;
        const SHIPMENT_ID: number = 123;
        const API_KEY: string = "fake-key-123";

        const digestTemplate: ShipmentDigest = {
            api_key: API_KEY,
            user_id: USER_ID,
            shipment_id: SHIPMENT_ID,
        }

        expect(generate_header(digestTemplate.api_key, digestTemplate)).toBeDefined();
    });

    it("Should throw an error due to faulty digest.", () => {

        function construct_header() {
            const SHIPMENT_ID: number = 123;
            const API_KEY: string = "fake-key-123";

            // @ts-ignore
            const my_digest = new DigestFactory(undefined, undefined)
                .date_digest()
        }

        expect(construct_header).toThrowError();
    })
});
