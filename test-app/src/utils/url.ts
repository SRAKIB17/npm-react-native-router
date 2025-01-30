
export const urlParse = (url: string = '') => {

    const queryRegex = /\?([^#]*)/,
        authRegex = /\/\/(?:([^:]+)(?::([^@]+)))?/,
        pathnameRegex = /(?:^[^:]+:\/\/[^/]+)?(\/[^?#]*)/,
        portRegex = /:(\d+)/,
        hashRegex = /#([^]*)/,
        protocolRegex = /^(?:([^:]+):\/\/)?(?:([^:]+))/,
        urlRegex = /^(?:(\w+):\/\/)?(?:([^:]+)(?::([^@]+))?@)?([a-zA-Z0-9.-]+|(?:\d{1,3}\.){3}\d{1,3}|\[[a-fA-F0-9:]+\])(?::(\d+))?(\/[^?#]*)?(\?[^#]*)?(#.*)?$/;

    function query() {
        // Extract the query part of the URL
        const queryMatch = url.match(queryRegex);
        if (queryMatch && queryMatch[1]) {
            const queryPart = decodeURIComponent(queryMatch[1]);
            // Split the query into individual key-value pairs
            const keyValuePairs = queryPart.split('&')
            const paramsObj: Array<{ [key: string]: any }> = keyValuePairs?.map(keyValue => {
                const [key, value] = keyValue.split('=');
                return {
                    [key]: value
                }
            });
            return paramsObj.reduce(function (total: any, value: any) {
                return { ...total, ...value }
            }, {});

        } else {
            return {}
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

    let path = url?.match(pathnameRegex)?.[1] || null;
    const origin = matches && (
        hostname ?
            (
                protocol ?
                    `${protocol}://${hostname}${port ? `:${port}` : ""}`
                    : `${hostname}${port ? `:${port}` : ""}`
            )
            : null
    ) || null
    if (path?.endsWith('/')) {
        path = path.slice(0, -1);
    }
    return {
        path: path,
        asPath: path,
        hash,
        protocol,
        origin,
        username,
        password,
        hostname,
        href: url,
        port,
        query: query(),
    }
}


export const getParams = ({ urlPattern, path }: { urlPattern: any, path: any }) => {
    const patternSegments = urlPattern?.split('/');
    const pathSegments = path?.split('/');
    if (patternSegments?.length === pathSegments?.length && urlPattern !== path) {
        const paramRegex = /\/:([^/]+)/g;
        const parameterRegex = new RegExp(urlPattern?.replace(/:[^/]+/g, '([^/]+)'));
        const match = path?.match(parameterRegex);

        if (match) {
            const parameterValues = match?.slice(1);
            console.log(parameterValues)
            const paramsKeyValue = urlPattern?.match(paramRegex)?.map((key: string, index: string) => {
                return {
                    [key?.slice(2)]: parameterValues[index]
                }
            })
            if (paramsKeyValue?.length) {
                return paramsKeyValue.reduce(function (total: any, value: any) {
                    return { ...total, ...value }
                }, {});
            }
            else {
                return {}
            }
        } else {
            // console.log("Path does not match the expected pattern.");
            return {}
        }
    }
    else {
        // console.log("Path does not match the expected pattern.");
        return {}
    }
}