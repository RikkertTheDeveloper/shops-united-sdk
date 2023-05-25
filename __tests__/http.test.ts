import { DigestFactory, HttpBuilder, generate_header } from "../src";
import { DateTime } from "../src/types";

describe('HTTP Testing', () => {
    it('Ping URL Endpoint', async () => {
        const USER_ID: number = 1234;
        const API_KEY: string = "fake-key-123";

        const THIS_DATE = new Date();
        const CURRENT_DATE: any | DateTime = `${THIS_DATE.getDate()}-${THIS_DATE.getMonth()}-${THIS_DATE.getFullYear()} ${THIS_DATE.getHours()}:${THIS_DATE.getMinutes()}:${THIS_DATE.getSeconds()}`;

        const DATE_DIGEST = new DigestFactory(API_KEY, USER_ID)
            .date(CURRENT_DATE)
            .date_digest();

        const PARSED_DIGEST = generate_header(API_KEY, DATE_DIGEST)

        const MY_CLIENT = new HttpBuilder()
            .api_key(API_KEY)
            .user_id(USER_ID)
            .construct();

        const MY_RESULT = await MY_CLIENT.validate_key(CURRENT_DATE, PARSED_DIGEST);

        expect(MY_RESULT).toBeDefined()
        expect(MY_RESULT["level"]).toBe("ERROR");
        expect(MY_RESULT["code"]).toBe(1);
    });
});
