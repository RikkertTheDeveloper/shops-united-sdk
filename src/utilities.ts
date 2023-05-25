import { createHash } from "crypto";

export function generate_header(parameters: { [x: string]: any; }): string {
    const sortedKeys = Object.keys(parameters).sort();
    const totalString = sortedKeys.map((key) => `${key}=${parameters[key]}`).join("");
    return createHash('sha256').update(totalString).digest("hex");
}
