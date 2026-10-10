
import { cacheLife } from 'next/cache';
import React from 'react';
import { PriceIncreasedType } from '../types/PriceIncreasedType';
import ProductCard from '../Products/ProductCard';
import Link from 'next/link';

const PriceIncreased = async() => {
     "use cache";
    cacheLife("hours");
    const resData=await fetch("https://api.abcz.workers.dev/api/bazardor/products");
    const data: PriceIncreasedType[]=await resData.json();
    const filteredData=data.filter((item)=>item.change.dir==="up").sort((a,b)=>(b.change.pct-a.change.pct)).slice(0,6);

    return (
        <div>
            <h1 className="pt-4 pb:3 lg:pt-8 lg:pb-4"><span className="text-red-600 text-4xl">▲</span> <span className="text-4xl font-bold text-4xl">আজ দাম বেড়েছে</span></h1>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">

            {filteredData.map((item)=><Link href={`/product/${item.id}`} key = { item.id } > <ProductCard key={item.id} item={item}/></Link>)}
                         
        </div>
        </div>
        
    );
};

export default PriceIncreased;