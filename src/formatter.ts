import { DateDigest, Digest, DigestType } from "./types";
import { strict as assert } from 'node:assert';

export class FormatterBuilder {
    digestArgument?: Digest
    digestType?: DigestType

    constructor(digest_argument: Digest) {
        this.digestArgument = digest_argument;
        return this;
    }

    digest_type(digest_type: DigestType) {
        this.digestType = digest_type;
        return this;
    }

    construct() {
        assert(this.digestType, "No digest type has been supplied.")
        assert(this.digestArgument, "No digest argument has been supplied.")

        switch (this.digestType.toString()) {
            case "DateDigest":
                return {
                    "GebruikerId": (this.digestArgument as DateDigest).user_id,
                    "Datum": (this.digestArgument as DateDigest).date
                }
            default:
                break;
        }
    }
}
