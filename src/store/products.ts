import { selector } from 'recoil';

const productsAPI = import.meta.env.VITE_PLATZI_FAKE_STORE_API;

interface IProductInfo{
    readonly count : number;
}

export interface IProduct extends IProductInfo{
    readonly id: number;
    readonly title: string;
    readonly description: string;
    readonly category: string;
    readonly price: number;
    readonly image: string;
}

export const productsItem = selector<IProduct[]>({
    key :"productsItem",
    get : async ()=>{
        try {
            const response = await fetch(productsAPI);
            return (await response.json() || []);
        } catch (error) {
            console.log(`Error : ${error}`);
            return [];
        }
    } 
})