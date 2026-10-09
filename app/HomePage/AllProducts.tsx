
import { cacheLife } from 'next/cache';
import React from 'react';
import { PriceIncreasedType } from '../types/PriceIncreasedType';
import ProductCard from '../Products/ProductCard';

const AllProducts = async() => {
     "use cache";
    cacheLife("hours");
    const resData=await fetch("https://api.api-store.workers.dev/api/bazardor/products");
    const data: PriceIncreasedType[]=await resData.json();

    return (
        <div>
            <h1 className="pt-4 pb:3 lg:pt-8 lg:pb-4"><span className="text-4xl font-bold">সব পণ্য</span></h1>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">

            {filteredData.map((item)=> <ProductCard key={item.id} item={item}/>)}
                         
        </div>
        </div>
        
    );
};

export default AllProducts;