import {ApiData} from "./ApiData";

export const PromiseFunc = () => new Promise((resolve) => {
   return  setTimeout(()=>  resolve(ApiData) , 1000)
} )