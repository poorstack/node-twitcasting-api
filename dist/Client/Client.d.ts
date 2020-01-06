import { ClientOptions } from "./ClientOptions";
export declare class Client {
    private options;
    private headers;
    private authorizationHeader;
    private apiBaseUrl;
    constructor(options: ClientOptions);
}
