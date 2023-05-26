import { DigestFactory, FormatterBuilder } from "../src/index"
import { DateTime } from "../src/types";

describe("Formatter Tests", () => {
    const USER_ID: number = 1234;
    const API_KEY: string = "fake-key-123";
    const THIS_DATE = new Date();
    const SPLIT_DATE = Date().split(" ");
    var CURRENT_DATE: DateTime | any = SPLIT_DATE[3] + "-" + (THIS_DATE.getMonth() < 10 ? `0${THIS_DATE.getMonth()}` : THIS_DATE.getMonth()) + "-" + SPLIT_DATE[2] + " " + SPLIT_DATE[4]

    it("Construct a new DateDigest body format.", () => {
        const HEADER_DIGEST = new DigestFactory(API_KEY, USER_ID)
            .date(CURRENT_DATE)
            .date_digest();

        const MY_BODY = new FormatterBuilder(HEADER_DIGEST)
            .digest_type("DateDigest")
            .construct();

        expect(MY_BODY?.Datum).toBeDefined();
        expect(MY_BODY?.GebruikerId).toBeDefined();
        expect(MY_BODY?.GebruikerId).toBe(USER_ID);
        expect(MY_BODY?.Datum).toBe(CURRENT_DATE);
    });
});
