import { DigestFactory } from "./factories";
import { EndpoindType, EndpointMethod } from "./types";
import { strict as assert } from 'node:assert';

export class HttpClient {
    api_key: string;
    user_id: number;

    constructor(api_key: string, user_id: number) {
        assert(api_key, "No API key has been supplied.")
        assert(user_id, "No UserId has been supplied.")

        this.api_key = api_key;
        this.user_id = user_id
    }

    send_request(Endpoint: EndpoindType, Method: EndpointMethod, Payload: BodyInit, Digest: any) {
        fetch(`https://login.parcelpro.nl/api/v3/${Endpoint}`, {
            method: Method,
            body: Payload,
            headers: {
                "Digest": Digest
            }
        }).then((request_result) => {
            request_result.json().then((parsed_data) => {
                return parsed_data;
            })
        });
    }

    validate_key(date: string) {
        const MY_DIGEST = new DigestFactory(this.api_key, this.user_id)
            .date(date)
            .date_digest();

        return MY_DIGEST
    }

    get_shipment(shipment_id: number) {
        const MY_DIGEST = new DigestFactory(this.api_key, this.user_id)
            .shipment_id(shipment_id)
            .shipment_digest();

        return MY_DIGEST
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
