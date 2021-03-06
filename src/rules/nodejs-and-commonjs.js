/**
 * Node.js and CommonJS
 * https://eslint.org/docs/rules/#nodejs-and-commonjs
 *
 * These rules relate to code running in Node.js, or in browsers with CommonJS
 */
module.exports = {
    rules: {
        'callback-return': 'off',          // require return statements after callbacks
        'global-require': 'error',         // require require() calls to be placed at top-level module scope
        'handle-callback-err': 'error',    // require error handling in callbacks
        'no-buffer-constructor': 'error',  // disallow use of the Buffer() constructor
        'no-mixed-requires': 'error',      // disallow require calls to be mixed with regular variable declarations
        'no-new-require': 'error',         // disallow new operators with calls to require
        'no-path-concat': 'error',         // disallow string concatenation with __dirname and __filename
        'no-process-env': 'off',           // disallow the use of process.env
        'no-process-exit': 'error',        // disallow the use of process.exit()
        'no-restricted-modules': 'off',    // disallow specified modules when loaded by require
        'no-sync': 'off',                  // disallow synchronous methods
    },
};
