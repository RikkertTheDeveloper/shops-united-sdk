export type Digest =  {
    user_id: number
    api_key: string
}

export interface DateDigest extends Digest {
    date: string
}

export interface ShipmentDigest extends Digest {
    shipment_id: number
}

export interface AddressDigest extends Digest {
    house_number: number,
    zip_code: string
}

export interface WebhookDigest extends Digest {
    webhook_id: number
}

export interface WebDigest extends Digest {
    web_state: string
}
