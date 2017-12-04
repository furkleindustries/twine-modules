export function require(passageName, context) {
    let value;
    if (typeof context !== 'object' || !context) {
        throw new Error('Invalid invocation. No context was provided.');
    }
    else if (typeof context.cache === 'object' && context.cache) {
        value = this.cache[passageName];
    }
    if (typeof context.passages !== 'object' || !context.passages) {
        throw new Error('The context.passages property was not an object.');
    }
    if (typeof value === 'undefined') {
        const passage = context.passages[passageName];
        value = generateValue(passage);
    }
    return value;
}
export function generateValue(passage) {
}
//# sourceMappingURL=exports.js.map