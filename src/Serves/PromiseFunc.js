import {ApiData} from "./ApiData";

export const PromiseFunc = () => new Promise((resolve , reject) => {
   return setTimeout(()=> resolve(ApiData) , 1000)
} )