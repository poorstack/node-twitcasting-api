"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Client = (function () {
    function Client(options) {
        this.apiBaseUrl = "https://apiv2.twitcasting.tv";
        var opt = Object.assign({
            clientId: null,
            clientSecret: null,
            accessToken: null
        }, options);
        if ((typeof opt.clientId !== "string" &&
            typeof opt.clientSecret !== "string" &&
            typeof opt.accessToken !== "string") ||
            (typeof opt.accessToken !== "string" &&
                (typeof opt.clientId !== "string" ||
                    typeof opt.clientSecret !== "string"))) {
            throw new TypeError();
        }
        this.options = opt;
        if (opt.accessToken !== null) {
            this.authorizationHeader = "Bearer " + opt.accessToken;
        }
        else {
            var basicBuf = new Buffer(opt.clientId + ":" + opt.clientSecret);
            this.authorizationHeader = "Basic " + basicBuf.toString("base64");
        }
        this.headers = {
            Accept: "application/json",
            "X-Api-Version": "2.0",
            Authorization: this.authorizationHeader
        };
    }
    return Client;
}());
exports.Client = Client;
//# sourceMappingURL=Client.js.map