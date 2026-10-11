import { cacheLife } from 'next/cache';

import React from 'react';
import Marquee from "react-fast-marquee";

import Image from 'next/image';
import Link from 'next/link';
import { ProductDetailsType } from '../types/ProductDetailsType';

const ScrollBar = async () => {
    "use cache"
    cacheLife("hours");
    const resData = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
    const scrolledData: ProductDetailsType[] = await resData.json();

    return (
        <div className="mt-3 sm:mt-4 md:mt-6 lg:mt-8 border-y border-slate-400 bg-amber-50 p-2 lg:p-4 text-sm md:text-base">
            <Marquee speed={70} className="overflow-y-hidden">
                <div className="flex gap-3 sm:gap-4">
                    {scrolledData.map((item) => (<Link href={`/product/${item.id}`} key={item.id} className="flex shrink-0 items-center whitespace-nowrap gap-1.5 sm:gap-2 hover:underline hover:text-blue-700">
                        <span>{item.categoryIcon}</span>
                        <span>{item.nameBn}</span>
                        <span className="font-bold">{item.today.toLocaleString("bn-BD")} টাকা/<span>
                        
                            {item.unit === "kg"
                                ? "কেজি"
                                : item.unit === "litre"
                                    ? "লিটার"
                                    : item.unit === "dozen"
                                        ? "ডজন"
                                        : "পিস"}{" "}

                        </span></span>
                        <span>{(item.change.dir) === "up" ? <Image src="/up.png" alt="up-arrow" width={60} height={60} className="w-5 h-auto sm:w-[30px]" /> :
                            (((item.change.dir) === "down") ? <Image src="/down.png" alt="dropDown arrow" height={60} width={60} className="w-5 h-auto sm:w-[30px]" /> : <span className='font-bold '>-</span>)}</span>
                        <span className="font-bold">{Math.abs(item.change.pct).toLocaleString("bn-BD")}%</span>
                    </Link>))}
                </div>

            </Marquee>
        </div>
    );
};

export default ScrollBar;