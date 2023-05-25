import { createHmac } from "crypto";

export function generate_header(api_key: string, parameters: { [x: string]: any; }): string {
    if (parameters.hasOwnProperty("api_key")) {
        delete parameters["api_key"];
    }

    const sortedKeys = Object.keys(parameters).sort();
    const totalString = sortedKeys.map((key) => `${key}=${parameters[key]}`).join("");

    return createHmac('sha256', api_key).update(totalString).digest('base64');;
}
