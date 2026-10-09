import React from 'react';
import { ProductDetailsType } from '../types/ProductDetailsType';

interface LowestPricePageProps{
    data:ProductDetailsType;

}

const LowestPricePage = ({data}:LowestPricePageProps) => {
   const lowest=[...data.markets].sort((a,b)=>a.min-b.min);
  
    return (
        
        <div>
            <p className='text-green-700 text-4xl font-bold'>{lowest[0].min.toLocaleString("bn-BD")}<span className="text-xl"> টাকা </span> </p>
            <p> সবচেয়ে কম দামের বাজারঃ <span className="text-[#506aeb]">{lowest[0].market}</span> <span>, </span>{lowest[0].division}</p>
        </div>
    );
};

export default LowestPricePage;