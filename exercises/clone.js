function clone(obj) {
    if (typeof obj != 'object' || obj == null) return obj;
    const output = Array.isArray(obj) ? []: {};

    for (const key of Object.keys(obj)) {
        output[key] = clone(obj[key]);
    }

    return output;
}