"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlParse = void 0;
const urlParse = (url = '') => {
    var _a;
    if (url === null || url === void 0 ? void 0 : url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    const queryRegex = /\?([^#]*)/, authRegex = /\/\/(?:([^:]+)(?::([^@]+)))?/, pathnameRegex = /(?:^[^:]+:\/\/[^/]+)?(\/[^?#]*)/, portRegex = /:(\d+)/, hashRegex = /#([^]*)/, protocolRegex = /^(?:([^:]+):\/\/)?(?:([^:]+))/, urlRegex = /^(?:(\w+):\/\/)?(?:([^:]+)(?::([^@]+))?@)?([a-zA-Z0-9.-]+|(?:\d{1,3}\.){3}\d{1,3}|\[[a-fA-F0-9:]+\])(?::(\d+))?(\/[^?#]*)?(\?[^#]*)?(#.*)?$/;
    function query() {
        // Extract the query part of the URL
        const queryMatch = url.match(queryRegex);
        if (queryMatch && queryMatch[1]) {
            const queryPart = decodeURIComponent(queryMatch[1]);
            // Split the query into individual key-value pairs
            const keyValuePairs = queryPart.split('&');
            const paramsObj = keyValuePairs === null || keyValuePairs === void 0 ? void 0 : keyValuePairs.map(keyValue => {
                const [key, value] = keyValue.split('=');
                return {
                    [key]: value
                };
            });
            return paramsObj.reduce(function (total, value) {
                return Object.assign(Object.assign({}, total), value);
            }, {});
        }
        else {
            return {};
        }
    }
    const matches = url.match(urlRegex);
    const hashMatch = url.match(hashRegex);
    const hash = hashMatch && hashMatch[1] || null;
    const protocol = matches && matches[1] || null;
    const username = matches && matches[2] || null;
    const password = matches && matches[3] || null;
    const hostname = matches && matches[4] || null;
    const port = matches && matches[5] || null;
    const path = ((_a = url === null || url === void 0 ? void 0 : url.match(pathnameRegex)) === null || _a === void 0 ? void 0 : _a[1]) || null;
    const origin = matches && (hostname ?
        (protocol ?
            `${protocol}://${hostname}${port ? `:${port}` : ""}`
            : `${hostname}${port ? `:${port}` : ""}`)
        : null) || null;
    return {
        path,
        hash,
        protocol,
        origin,
        username,
        password,
        hostname,
        href: url,
        port,
        query: query(),
    };
};
exports.urlParse = urlParse;
