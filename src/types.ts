export type DateTime = '/^([0-9]{2})-([0-9]{2})-([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2})$/'
export type CountryCode = `/^[A-Za-z]{2}$`

export type Digest = {
    user_id: number
    api_key: string
}

export type HSCode = {
    hs_code?: `/^\d{2}(\d{2}|\d{6}|\d{10})$/`,
    amount?: number
    description?: string,
    price?: string,
    country_of_origin?: CountryCode,
    weight?: number,
    mass: string
}

export type OrderItem =  {
    weight: number,
    length?: number,
    width?: number,
    height?: number,

    hs_codes?: [HSCode]
}

export type RequestBody = {
    user_id: number
}

export interface DateDigest extends Digest {
    date: DateTime
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

export interface GetShipmentOptionsBody extends RequestBody {
    date: DateTime,
    courrier?: string
}

export interface GetShipmentsBody extends RequestBody {
    printed_from: DateTime,
    min_datetime?: DateTime,
    max_datetime?: DateTime,
    printed_till?: DateTime,

    page?: number
    status?: OrderState,
    offset?: number
    row_count?: number
}

export interface GetShipmentBody extends RequestBody {
    shipment_id: number
}

export interface PostShipmentBody extends RequestBody {
    courrier: string,
    shipment_type: string,

    sign_at_deliver?: boolean,
    no_dropoff_neighbours?: boolean,
    evening_shipment?: boolean,
    saturday_shipment?: boolean,
    special_dhl_shipment?: boolean,
    deliver_to_service_point?: boolean,
    has_documents?: boolean,
    has_return_label?: boolean,
    pay_at_door?: boolean,
    insured_value?: number,
    total_value?: number,
    mailbox_delivery?: boolean,
    order_reference?: `/^.{0,45}$/`,
    pickup_time?: DateTime,
    sender_name?: `/^.{0,75}$/`,
    contact_point_sender?: `/^.{0,45}$/`,
    street_sender?: `/^.{0,45}$/`,
    house_number_sender?: `/^.{0,15}$/`
    zip_code_sender?: string,
    origin_sender?: string,
    sender_country_iso?: CountryCode,
    email_sender?: string,
    phone_number_sender?: string,
    parcel_point_id?: number,

    receiver_name: `/^.{0,75}$/`,
    receiver_formal?: `/^.{0,50}$/`,
    receiver_department?: `/^.{0,50}$/`,
    receiver_street: `/^.{0,45}$/`
    receiver_house_number: `/^.{0,15}$/`
    receiver_address_insert?: string,
    receiver_address_extra?: string,
    receiver_zip_code: string,
    receiver_city: `/^.{0,45}$/`,
    receiver_country_iso: CountryCode
    receiver_state_iso?: CountryCode
    receiver_email: string,
    receiver_phone_number?: string,
    receiver_vat_code?: string,
    receiver_eori_code?: string,

    items: [OrderItem]
    comment: string,

    invoice_id: string,
    invoice_date: DateTime,
    inco_terms: IncoTerm,
    billing_service: BillingService
}

enum WebhookStateEnum {
    "Printed" = "afgedrukt",
    "Receiving" = "aannamenproces",
    "Delivered" = "afgeleverd"
}

enum OrderStateEnum {
    "Printed" = "Afgedrukt",
    "Processing" = "InProces",
    "Delivered" = "Afgeleverd"
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

enum IncoTermEnum {
    "UPS",
    "CFR",
    "CIF",
    "CIP",
    "CPT",
    "DAF",
    "DDP",
    "DDU",
    "DEQ",
    "DES",
    "EXW",
    "FCA",
}

enum BillingServiceEnum {
    "Duty",
    "DTP"
}

enum EndpointMethodEnum {
    "GET",
    "POST",
    "DELETE"
}

export type BillingService = keyof typeof BillingServiceEnum;
export type WebhookState = keyof typeof WebhookStateEnum;
export type EndpoindType = keyof typeof EndpoindTypeEnum;
export type EndpointMethod = keyof typeof EndpointMethodEnum;
export type OrderState = keyof typeof OrderStateEnum;
export type IncoTerm = keyof typeof IncoTermEnum;
