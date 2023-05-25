import { DigestFactory } from "./factories";
import { DateTime, Digest, EndpoindType, EndpointMethod, WebhookState } from "./types";
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

    validate_key(date: DateTime): Digest {
        const MY_DIGEST = new DigestFactory(this.api_key, this.user_id)
            .date(date)
            .date_digest();

        return MY_DIGEST
    }

    get_shipment(shipment_id: number): Digest {
        const MY_DIGEST = new DigestFactory(this.api_key, this.user_id)
            .shipment_id(shipment_id)
            .shipment_digest();

        return MY_DIGEST
    }

    post_shipment(house_number: number, zip_code: string): Digest {
        const MY_DIGEST = new DigestFactory(this.api_key, this.user_id)
            .house_number(house_number)
            .zip_code(zip_code)
            .address_digest();

        return MY_DIGEST
    }

    delete_shipment(shipment_id: number): Digest {
        const MY_DIGEST = new DigestFactory(this.api_key, this.user_id)
            .shipment_id(shipment_id)
            .shipment_digest()

        return MY_DIGEST
    }

    get_label(shipment_id: number): Digest {
        const MY_DIGEST = new DigestFactory(this.api_key, this.user_id)
            .shipment_id(shipment_id)
            .shipment_digest()

        return MY_DIGEST
    }

    post_pickup(shipment_id: number): Digest {
        const MY_DIGEST = new DigestFactory(this.api_key, this.user_id)
            .shipment_id(shipment_id)
            .shipment_digest()

        return MY_DIGEST
    }

    get_pickup_points(house_number: number, zip_code: string): Digest {
        const MY_DIGEST = new DigestFactory(this.api_key, this.user_id)
            .house_number(house_number)
            .zip_code(zip_code)
            .address_digest();

        return MY_DIGEST
    }

    get_webhooks(date: DateTime): Digest {
        const MY_DIGEST = new DigestFactory(this.api_key, this.user_id)
            .date(date)
            .date_digest();

        return MY_DIGEST
    }

    post_webhook(web_status: WebhookState): Digest {
        const MY_DIGEST = new DigestFactory(this.api_key, this.user_id)
            .web_state(web_status)
            .web_digest();

        return MY_DIGEST
    }

    delete_webhook(webhook_id: number): Digest {
        const MY_DIGEST = new DigestFactory(this.api_key, this.user_id)
            .webhook_id(webhook_id)
            .webhook_digest();

        return MY_DIGEST
    }
}

export class HttpBuilder {
    key: string = "";
    user: number = 0;

    constructor() {
        return this;
    }

    api_key(api_key: string): this {
        this.key = api_key;
        return this;
    }

    user_id(user_id: number): this {
        this.user = user_id;
        return this;
    }

    construct() {
        return new HttpClient(this.key, this.user);
    }
}
