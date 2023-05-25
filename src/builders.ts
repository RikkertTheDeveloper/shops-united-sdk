import { DateDigest } from "./types";
import { generate_header } from "./utilities";

class HttpClient {
    api_key: string | undefined;
    user_id: number | undefined;

    constructor(api_key: string, user_id: number) {
        this.api_key = api_key;
        this.user_id = user_id
    }

    get_shipments(date: string) {
        const request_digest: DateDigest = {
            api_key: "test-key",
            user_id: 1234,
            date: date
        };

        const request_header = generate_header(request_digest);
        return request_header
    }
}

export class HttpBuilder {
    key: string = "";
    user: number = 0;

    constructor() {
        return this;
    }

    api_key(api_key: string) {
        this.key = api_key;
        return this;
    }

    user_id(user_id: number) {
        this.user = user_id;
        return this;
    }

    construct() {
        return new HttpClient(this.key, this.user);
    }
}
