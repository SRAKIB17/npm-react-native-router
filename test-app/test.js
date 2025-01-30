function getParams({ path, urlPattern }) {
    let params = {};
    // Trim leading and trailing slashes
    path = path.replace(/^\/+|\/+$/g, '');
    urlPattern = urlPattern.replace(/^\/+|\/+$/g, '');
    // Split into segments
    const pathSegments = path.split('/');
    const patternSegments = urlPattern.split('/');

    // If segment counts don't match and there's no wildcard or optional segments, return failure
    if (pathSegments.length !== patternSegments.length && !urlPattern.includes('*') && !urlPattern?.includes("?")) {
        return {
            success: false,
            params: {}
        };
    }
    // Iterate through segments
    for (let i = 0; i < patternSegments.length; i++) {
        const patternSegment = patternSegments[i];
        const pathSegment = pathSegments[i];

        // Handle wildcard segments
        if (patternSegment === '*') {
            params['wildcard'] = pathSegments.slice(i).join('/');
            return {
                success: true,
                params,
            }; // Stop further processing
        }

        // Handle optional segments (ending with '?')
        if (patternSegment.startsWith(':') && patternSegment.endsWith('?')) {
            const paramName = patternSegment.slice(1, -1); // Remove the '?'
            params[paramName] = pathSegment || null; // Use null if segment is missing
        }
        // Handle dynamic segments (starting with ':')
        else if (patternSegment.startsWith(':')) {
            const paramName = patternSegment.slice(1); // Remove the ':'
            if (/^[a-zA-Z0-9_]+$/.test(paramName)) { // Validate dynamic segment name
                params[paramName] = pathSegment;
            } else {
                console.warn(`Invalid dynamic segment name: ${paramName}`);
                return {
                    success: false,
                    params: {}
                }; // Return empty object if segment name is invalid
            }
        }

        // Handle static segments (must match exactly)
        else if (patternSegment !== pathSegment) {
            return {
                success: false,
                params: {}
            }; // If static segments don't match, return empty object
        }
    }
    return {
        success: true,
        params
    };
}

const path = '/dashboard/settings/test';
const urlPattern = '/dashboard/settings/test';

const params = getParams({ path, urlPattern });
console.log(params); // Output: { section: 'settings', tab: 'privacy' }