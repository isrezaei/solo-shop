import {ApiData} from "./ApiData";

export const PromiseFunc = () => new Promise((resolve) => {
    return  setTimeout(()=>  resolve(ApiData) , 1000)
} )


export const LiveSearch = (product) => new Promise(resolve => {

    const setCondition = ApiData.filter(items => items.product.split(" ").join("").toLowerCase().includes(product.toLowerCase()))

    return setTimeout(()=> resolve(setCondition) , 500)
})