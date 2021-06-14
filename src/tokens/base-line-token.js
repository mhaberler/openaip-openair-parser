const checkTypes = require('check-types');

/**
 * @typedef typedefs.openaipOpenairParser.TokenConfig
 * @type Object
 * @property {typedefs.openaipOpenairParser.TokenTypes} tokenTypes - List of all known token types. Required to do "isAllowedNextToken" type checks.
 */

class BaseLineToken {
    static type = '';

    /**
     * @param {typedefs.openaipOpenairParser.TokenConfig} config
     */
    constructor(config) {
        const { tokenTypes } = config;

        checkTypes.assert.nonEmptyObject(tokenTypes);

        this._tokenTypes = tokenTypes;
        this._tokenized = null;
    }

    /**
     * @return {string}
     */
    getType() {
        return this.constructor.type;
    }

    /**
     * Returns true if the token can handle the string. False if not.
     *
     * @param {string} line
     * @return {boolean}
     */
    canHandle(line) {
        throw new Error('NOT_IMPLEMENTED');
    }

    /**
     * Returns a new token that contains the tokenized representation of the parsed openair line.
     *
     * @param {string} line
     * @param {number} lineNumber
     * @return {BaseLineToken}
     */
    tokenize(line, lineNumber) {
        throw new Error('NOT_IMPLEMENTED');
    }

    /**
     * Returns the tokenized line.
     *
     * @return {{line: string, lineNumber: number, [metadata]: Object}}
     */
    getTokenized() {
        return this._tokenized;
    }

    /**
     * Checks if the input token as next token or not.
     *
     * @param {BaseLineToken} token
     * @return {boolean}
     */
    isAllowedNextToken(token) {
        throw new Error('NOT_IMPLEMENTED');
    }
}

module.exports = BaseLineToken;
