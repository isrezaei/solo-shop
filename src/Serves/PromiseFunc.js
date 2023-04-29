import {ApiData} from "./ApiData";

export const LiveSearch = (product) => new Promise(resolve => {
    const setCondition = ApiData.filter(items => items.product.split(" ").join("").toLowerCase().includes(product.split(" ").join("").toLowerCase()))
    return setTimeout(() => resolve(setCondition), 500)
})