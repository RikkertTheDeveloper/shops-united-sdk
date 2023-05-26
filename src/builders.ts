import axios from "axios";
import { DigestFactory } from "./factories";
import { DateTime, Digest, EndpoindType, EndpoindTypeEnum, EndpointMethod, WebhookState } from "./types";
import { strict as assert } from 'node:assert';

export class HttpClient {
    api_key: string;
    user_id: number;

    constructor(api_key: string, user_id: number) {
        assert(api_key, "No API key has been supplied.")
        assert(user_id, "No UserId has been supplied.")

        this.api_key = api_key;
        this.user_id = user_id

        return this;
    }

    async send_request(Endpoint: EndpoindType, Method: EndpointMethod, Payload: any, Digest: any) {
        assert(Endpoint, "No endpoint has been supplied.")
        assert(Method, "No HTTP method has been supplied.")
        assert(Payload, "No HTTP request body has been supplied.")
        assert(Digest, "No HTTP header digest has been supplied.")

        const request_result = await axios({
            url: `https://login.parcelpro.nl/api/v3/${EndpoindTypeEnum[Endpoint].toString()}`,
            method: Method,
            headers: {
                "Digest": Digest
            },

            validateStatus: () => true,
            data: Payload,
        })

        return request_result.data
    }

    validate_key(date: DateTime, HeaderDigest: string) {
        assert(date, "No date has been supplied.")
        assert(HeaderDigest, "No header digest has been supplied.")

        const MY_DIGEST = new DigestFactory(this.api_key, this.user_id)
            .date(date)
            .date_digest();

        return this.send_request("AuthenticateKey", "POST", {
            GebruikerId: this.user_id,
            Datum: date
        }, HeaderDigest)
    }

    get_shipment(shipment_id: number): Digest {
        assert(shipment_id, "No shipment id has been supplied.")

        const MY_DIGEST = new DigestFactory(this.api_key, this.user_id)
            .shipment_id(shipment_id)
            .shipment_digest();

        return MY_DIGEST
    }

    post_shipment(house_number: number, zip_code: string): Digest {
        assert(house_number, "No house number has been supplied.")
        assert(zip_code, "No zip code has been supplied.")

        const MY_DIGEST = new DigestFactory(this.api_key, this.user_id)
            .house_number(house_number)
            .zip_code(zip_code)
            .address_digest();

        return MY_DIGEST
    }

    delete_shipment(shipment_id: number): Digest {
         assert(shipment_id, "No shipment id has been supplied.")

        const MY_DIGEST = new DigestFactory(this.api_key, this.user_id)
            .shipment_id(shipment_id)
            .shipment_digest()

        return MY_DIGEST
    }

    get_label(shipment_id: number): Digest {
        assert(shipment_id, "No shipment id has been supplied.")

        const MY_DIGEST = new DigestFactory(this.api_key, this.user_id)
            .shipment_id(shipment_id)
            .shipment_digest()

        return MY_DIGEST
    }

    post_pickup(shipment_id: number): Digest {
        assert(shipment_id, "No shipment id has been supplied.")

        const MY_DIGEST = new DigestFactory(this.api_key, this.user_id)
            .shipment_id(shipment_id)
            .shipment_digest()

        return MY_DIGEST
    }

    get_pickup_points(house_number: number, zip_code: string): Digest {
        assert(house_number, "No house number has been supplied.")
        assert(zip_code, "No zip code has been supplied.")

        const MY_DIGEST = new DigestFactory(this.api_key, this.user_id)
            .house_number(house_number)
            .zip_code(zip_code)
            .address_digest();

        return MY_DIGEST
    }

    get_webhooks(date: DateTime): Digest {
        assert(date, "No date has been supplied.")

        const MY_DIGEST = new DigestFactory(this.api_key, this.user_id)
            .date(date)
            .date_digest();

        return MY_DIGEST
    }

    post_webhook(web_status: WebhookState): Digest {
        assert(web_status, "No web status has been supplied.")

        const MY_DIGEST = new DigestFactory(this.api_key, this.user_id)
            .web_state(web_status)
            .web_digest();

        return MY_DIGEST
    }

    delete_webhook(webhook_id: number): Digest {
        assert(webhook_id, "No webhook id has been supplied.")

        const MY_DIGEST = new DigestFactory(this.api_key, this.user_id)
            .webhook_id(webhook_id)
            .webhook_digest();

        return MY_DIGEST
    }
}

export class HttpBuilder {
    key?: string;
    user?: number;

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
        assert(this.key, "No API key supplied.")
        assert(this.user, "No UserId supplied.")

        return new HttpClient(this.key, this.user);
    }
}
