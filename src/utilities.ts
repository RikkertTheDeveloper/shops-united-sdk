import CryptoJS from "crypto-js"

export function generate_header(api_key: string, parameters: { [x: string]: any; }): string {
    if (parameters.hasOwnProperty("api_key")) {
        delete parameters["api_key"];
    }

    const sortedKeys = Object.keys(parameters).sort();
    const totalString = sortedKeys.map((key) => `${key}=${parameters[key]}`).join("");

    return CryptoJS.HmacSHA256(totalString, api_key).toString();
}
