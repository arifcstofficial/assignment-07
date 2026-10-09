import { cacheLife } from 'next/cache';

import React from 'react';
import Marquee from "react-fast-marquee";
import { ScrollBarType } from '../types/ScrollBarType';
import Image from 'next/image';
import Link from 'next/link';

const ScrollBar = async () => {
    "use cache"
    cacheLife("hours");
    const resData = await fetch("https://api.api-store.workers.dev/api/bazardor/products");
    const scrolledData: ScrollBarType[] = await resData.json();

    return (
        <div className="mt-4 md:mt-6 lg:mt-8 border-y border-slate-400 bg-amber-50 p-2 lg:p-4">
            <Marquee speed={70} className="overflow-y-hidden">
               <div  className="flex  gap-4">
                    {scrolledData.map((item, ind) => (<Link href={`/product/${item.id}`} key = { item } className="flex gap-2 hover:underline hover:text-blue-700" key={ind}>
                        <span>{item.categoryIcon}</span>
                        <span>{item.nameBn}</span>
                        <span className="font-bold">{item.today.toLocaleString("bn-BD")} টাকা/কেজি</span>
                        <span>{(item.change.dir) === "up" ? <Image src="/up_Arrow.png" alt="up-arrow" width={30} height={10} /> :
                            (((item.change.dir) === "down") ? <Image src="/dropdown.png" alt="dropDown arrow" height={10} width={30} /> : <span className='font-bold '>-</span>)}</span>
                        <span className="font-bold">{Math.abs(item.change.pct).toLocaleString("bn-BD")}%</span>
                    </Link>))}
                </div>

            </Marquee>
        </div>
    );
};

export default ScrollBar;