import React from 'react';
import { ProductDetailsType } from '../types/ProductDetailsType';

interface HighestPricePageProps{
    data:ProductDetailsType;

}

const HighestPricePage = ({data}:HighestPricePageProps) => {
   const highest=[...data.markets].sort((a,b)=>b.max-a.max);
   console.log("highest Price",highest);
    return (
        
        <div>
            <p className='text-green-700 text-4xl font-bold'>{highest[0].max.toLocaleString("bn-BD")}<span className="text-xl"> টাকা </span> </p>
            <p> সবচেয়ে বেশি দামের বাজারঃ <span className="text-[#506aeb]">{highest[0].market}</span> <span>, </span>{highest[0].division}</p>
        </div>
    );
};

export default HighestPricePage;