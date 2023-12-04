// const urlPattern = "/settings/:settingID/title";
// const path = "/settings/123/profile";

// // Split the pattern and path into segments
// const patternSegments = urlPattern.split('/');
// const pathSegments = path.split('/');

// if (patternSegments.length === pathSegments.length) {
//     const params = {};

//     for (let i = 0; i < patternSegments.length; i++) {
//         if (patternSegments[i] === pathSegments[i]) continue;
//         if (patternSegments[i].startsWith(':')) {
//             const paramName = patternSegments[i].slice(1);
//             params[paramName] = pathSegments[i];
//         } else {
//             console.log
//             console.log("Path does not match the expected pattern.");
//             break;
//         }
//     }
//     console.log("Parameter Values:", params);
// } else {
//     console.log("Path does not match the expected pattern.");
// }


const urlPattern = "/settings/:settingID/:title";
const path = "/settings/123/profile";

const patternSegments = urlPattern.split('/');
const pathSegments = path.split('/');
if (patternSegments.length === pathSegments.length) {
    const paramRegex = /\/:([^/]+)/g;
    const parameterRegex = new RegExp(urlPattern.replace(/:[^/]+/g, '([^/]+)'));
    const match = path.match(parameterRegex);
    if (match) {
        const parameterValues = match.slice(1);
        const paramsKeyValue = urlPattern?.match(paramRegex)?.map((key, index) => {
            return {
                [key?.slice(2)]: parameterValues[index]
            }
        })
        return Object.assign({}, ...paramsKeyValue);

    } else {
        console.log("Path does not match the expected pattern.");
    }

}
else {
    console.log("Path does not match the expected pattern.");
}
