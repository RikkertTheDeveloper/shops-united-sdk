class HttpClient {
    api_key: string | undefined;
    user_id: number | undefined;

    constructor(api_key: string, user_id: number) {
        this.api_key = api_key;
        this.user_id = user_id
    }
}

export class HttpBuilder {
    key: string = "";
    user: number = 0;

    constructor() {
        return this;
    }

    api_key(api_key: string) {
        this.key = api_key;
        return this;
    }

    user_id(user_id: number) {
        this.user = user_id;
        return this;
    }

    construct() {
        return new HttpClient(this.key, this.user);
    }
}
