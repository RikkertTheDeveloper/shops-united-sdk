import { AddressDigest, DateDigest, Digest, ShipmentDigest, WebDigest, WebhookDigest, WebhookState } from "./types";
import { strict as assert } from 'node:assert';

export class DigestFactory {
    apiKey: string
    userId: number

    shipmentDate?: string
    shipmentId?: number
    houseNumber?: number
    zipCode?: string
    webhookId?: number
    webState?: WebhookState

    constructor(api_key: string, user_id: number) {
        assert(api_key, "No API key has been supplied.")
        assert(user_id, "No UserId has been supplied.")

        this.apiKey = api_key;
        this.userId = user_id;

        return this;
    }

    date(date: string): this {
        this.shipmentDate = date;
        return this;
    }

    shipment_id(shipment_id: number): this {
        this.shipmentId = shipment_id;
        return this;
    }

    house_number(house_number: number): this {
        this.houseNumber = house_number
        return this;
    }

    zip_code(zip_code: string): this {
        this.zipCode = zip_code;
        return this;
    }

    webhook_id(webhook_id: number): this {
        this.webhookId = webhook_id;
        return this;
    }

    web_state(web_state: WebhookState): this {
        this.webState = web_state;
        return this;
    }

    date_digest(): DateDigest {
        assert(this.shipmentDate, "No shipment date has been supplied.")

        return {
            api_key: this.apiKey,
            user_id: this.userId,
            date: this.shipmentDate
        }
    }

    shipment_digest(): ShipmentDigest {
        assert(this.shipmentId, "No shipment ID has been supplied.")

        return {
            api_key: this.apiKey,
            user_id: this.userId,
            shipment_id: this.shipmentId
        }
    }

    address_digest(): AddressDigest {
        assert(this.houseNumber, "No house number has been supplied.")
        assert(this.zipCode, "No ZIP code has been supplied.")

        return {
            api_key: this.apiKey,
            user_id: this.userId,
            house_number: this.houseNumber,
            zip_code: this.zipCode
        }
    }

    webhook_digest(): WebhookDigest {
        assert(this.webhookId, "No webhook id has been supplied.")

        return {
            api_key: this.apiKey,
            user_id: this.userId,
            webhook_id: this.webhookId
        }
    }

    web_digest(): WebDigest {
        assert(this.webState, "No webhook state has been supplied.")

        return {
            api_key: this.apiKey,
            user_id: this.userId,
            web_state: this.webState
        }
    }
}
