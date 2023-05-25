var crypto = require('crypto');

export function generate_header(parameters: { [x: string]: any; }): string {
    const sortedKeys = Object.keys(parameters).sort();
    const totalString = sortedKeys.map((key) => `${key}=${parameters[key]}`).join("");

    return crypto.createHash('HMAC-SHA256').update(totalString, "utf8").digest("hex");
}
