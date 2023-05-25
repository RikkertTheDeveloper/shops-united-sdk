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

enum WebhookStateEnum {
    "Printed" = "afgedrukt",
    "Receiving" = "aannamenproces",
    "Delivered" = "afgeleverd"
}

enum EndpoindTypeEnum {
    "AuthenticateKey" = "validate.php",
    "GetShipmentOptions" = "type.php",
    "GetShipments" = "zendingen.php",
    "GetShipment" = "zending.php",
    "PostShipment" = "zending.php",
    "DeleteShipment" = "zending.php",
    "GetLabel" = "zending/label.php",
    "PostPickupPoint" = "pickup.php",
    "GetPickupPoints" = "uitreiklocatie.php",
    "GetWebhooks" = "webhook.php",
    "PostWebhook" = "webhook.php",
    "DeleteWebhook" = "webhook.php"
}

enum EndpointMethodEnum {
    "GET",
    "POST",
    "DELETE"
}

export type WebhookState = keyof typeof WebhookStateEnum;
export type EndpoindType = keyof typeof EndpoindTypeEnum;
export type EndpointMethod = keyof typeof EndpointMethodEnum;
