export type Digest =  {
    UserId: number
    ApiKey: string
}

export interface DateDigest extends Digest {
    Date: string
}

export interface ShipmentDigest extends Digest {
    ShipmentId: number
}

export interface AddressDigest extends Digest {
    HouseNumber: number,
    ZipCode: string
}

export interface WebhookDigest extends Digest {
    WebhookId: number
}

export interface WebDigest extends Digest {
    State: string
}
