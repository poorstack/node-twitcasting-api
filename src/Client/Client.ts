import { ClientOptions } from "./ClientOptions";

export class Client {
  private options: ClientOptions;
  private headers: object;
  private authorizationHeader: string;
  private apiBaseUrl: string = "https://apiv2.twitcasting.tv";

  constructor(options: ClientOptions) {
    const opt: ClientOptions = Object.assign(
      {
        clientId: null,
        clientSecret: null,
        accessToken: null
      },
      options
    );

    if (
      (typeof opt.clientId !== "string" &&
        typeof opt.clientSecret !== "string" &&
        typeof opt.accessToken !== "string") ||
      (typeof opt.accessToken !== "string" &&
        (typeof opt.clientId !== "string" ||
          typeof opt.clientSecret !== "string"))
    ) {
      throw new TypeError();
    }

    this.options = opt;

    // authorizationHeader
    if (opt.accessToken !== null) {
      this.authorizationHeader = `Bearer ${opt.accessToken}`;
    } else {
      const basicBuf = new Buffer(`${opt.clientId}:${opt.clientSecret}`);
      this.authorizationHeader = `Basic ${basicBuf.toString("base64")}`;
    }

    // headers
    this.headers = {
      Accept: "application/json",
      "X-Api-Version": "2.0",
      Authorization: this.authorizationHeader
    };
  }
}
