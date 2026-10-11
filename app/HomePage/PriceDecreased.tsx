import { cacheLife } from 'next/cache';
import React from 'react';
import ProductCard from '../Products/ProductCard';
import Link from 'next/link';
import { ProductDetailsType } from '../types/ProductDetailsType';

const PriceDecreased = async() => {
     "use cache";
    cacheLife("hours");
    const resData=await fetch("https://api.abcz.workers.dev/api/bazardor/products");
    const data: ProductDetailsType[]=await resData.json();
    const filteredData=data.filter((item)=>item.change.dir==="down").sort((a,b)=>(a.change.pct-b.change.pct)).slice(0,6);

    return (
        <div>
            <h1 className="pt-4 pb:3 lg:pt-8 lg:pb-4"><span className="text-green-600 text-2xl sm:text-3xl lg:text-4xl">▼</span> <span className="text-2xl sm:text-3xl lg:text-4xl font-bold">আজ দাম কমেছে</span></h1>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">

            {filteredData.map((item)=><Link href={`/product/${item.id}`} key = { item.id } > <ProductCard item={item}/></Link>)}
                         
        </div>
        </div>
        
    );
};

export default PriceDecreased;