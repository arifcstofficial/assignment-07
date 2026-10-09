import React from 'react';
import { ProductDetailsType } from '../types/ProductDetailsType';

interface AveragePricePageProps {
    data: ProductDetailsType;

}

const AveragePricePage = ({ data }: AveragePricePageProps) => {
    const lowest = Math.min(...data.markets.map(m => m.min));
    const highest = Math.max(...data.markets.map(m => m.max));
    const average = ((lowest + highest) / 2);
    return (
        <div>
            <p className='text-green-700 text-4xl font-bold'>{average.toLocaleString("bn-BD",{ maximumFractionDigits: 2 })}<span className="text-xl"> টাকা </span> </p>
            <p>প্রতি কেজি-এর হিসেবে</p>
        </div>
    );
};

export default AveragePricePage;