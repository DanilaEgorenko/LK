const getEnumFromArray = <T extends string>(o: Array<T>): { [K in T]: K } => {
    return o.reduce((res, key) => {
        res[key] = key
        return res
    }, Object.create({}))
}

export default getEnumFromArray