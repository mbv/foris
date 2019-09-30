/** Return undefined if object has no keys, otherwise return object. */
export function undefinedIfEmpty(instance) {
    if (Object.keys(instance).length > 0) {
        return instance;
    }
    return undefined;
}

/** Return object without keys that have undefined value. */
export function withoutUndefinedKeys(instance) {
    return Object.keys(instance).reduce(
        (accumulator, key) => {
            if (instance[key] !== undefined) {
                accumulator[key] = instance[key];
            }
            return accumulator;
        },
        {},
    );
}

/** Return copy of passed object that has only desired keys. */
export function onlySpecifiedKeys(object, desiredKeys) {
    return desiredKeys.reduce(
        (accumulator, key) => { accumulator[key] = object[key]; return accumulator; },
        {},
    );
}
