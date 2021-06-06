const REACT_SIMPLE_MAPS_DEPENDENCIES = [
    "react-simple-maps",
    "d3-array",
    "d3-geo",
    "internmap",
]

// Workaround related to the breaking changes for `ESM`
// reference: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c#gistcomment-3760583
const withTM = require("next-transpile-modules")([
    ...REACT_SIMPLE_MAPS_DEPENDENCIES,
]); // pass the modules you would like to see transpiled

module.exports = withTM({
    future: {
        webpack5: true, // if you want to use webpack 5
    },
});
