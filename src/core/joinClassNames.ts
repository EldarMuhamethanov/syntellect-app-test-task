
function joinClassNames(...args: Array<string|undefined|false>) {
    return args
        .filter(className => !!className)
        .join(' ')
}
export {
    joinClassNames,
}