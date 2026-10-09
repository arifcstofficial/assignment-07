import { cacheLife } from 'next/cache';

import React from 'react';
import Marquee from "react-fast-marquee";
import { ScrollBarType } from '../types/ScrollBarType';

const ScrollBar = async() => {
    "use cache"
    cacheLife("hours");
    const resData=await fetch("https://api.api-store.workers.dev/api/bazardor/products");
    const scrolledData:ScrollBarType[]=await resData.json();
    
    return (
        <div className="mt-4 md:mt-6 lg:mt-8 border-y border-slate-400 bg-amber-50 p-2 lg:p-4">
             <Marquee speed={70} className="overflow-y-hidden">
                <div className="flex gap-4">
                     {scrolledData.map((item,ind)=>(<p className="flex gap-2" key={ind}>
                <span>{item.categoryIcon}</span>
                <span>{item.nameBn}</span>
                <span className="font-bold">{item.today.toLocaleString("bn-BD")} টাকা/কেজি</span>
                <span>{(item.change.dir)==="up"?<img src="/up_Arrow.png" />:(((item.change.dir)==="down")?<img src="/dropdown.png"/>:"অপরিবর্তিত")}</span>
                <span className="font-semibold">{Math.abs(item.change.pct).toLocaleString("bn-BD")}%</span>
                </p>))}
                </div>
              
          </Marquee>
        </div>
    );
};

export default ScrollBar;