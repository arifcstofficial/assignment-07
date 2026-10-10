import React from "react";

import { ProductDetailsType } from "../types/ProductDetailsType";

type Direction = ProductDetailsType["change"]["dir"];

const changeStyle: Record<Direction, { symbol: string; text: string }> = {
    up: { symbol: "▲", text: "text-red-600" },
    down: { symbol: "▼", text: "text-green-600" },
    flat: { symbol: "–", text: "text-gray-500" },
};

const ProductCard = ({ item }: { item: ProductDetailsType }) => {
    const { symbol, text } = changeStyle[item.change.dir];

    return (
        <div className="w-full rounded-3xl border border-[#e3e9e3] bg-[#f9fbf9] p-4 lg:p-6">
            
            <div className="flex items-center gap-3 lg:gap-5">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[#f0f5f0] text-3xl lg:size-[72px] lg:text-4xl">
                    {item.image}
                </div>
                <div className="min-w-0">
                    <h3 className="truncate text-lg font-bold text-[#1c2b1c] lg:text-2xl">
                        {item.nameBn}
                    </h3>
                    <p className="text-sm text-[#3d4a3d] lg:text-base">প্রতি কেজি</p>
                </div>
            </div>

           
            <div className="mt-4 flex items-end justify-between gap-2 lg:mt-6">
                <div>
                    <p className="text-sm text-[#3d4a3d] lg:text-base">আজকের দাম</p>
                    <p className="text-[#1c2b1c]">
                        <span className="text-2xl font-bold lg:text-3xl">
                            {item.today.toLocaleString("bn-BD")}
                        </span>{" "}
                        <span className="text-base lg:text-lg">টাকা</span>
                    </p>
                </div>

                <span
                    className={`flex items-center gap-1.5 rounded-full bg-[#f0f2f0] px-3 py-1.5 text-xs font-semibold lg:px-4 lg:py-2 lg:text-sm ${text}`}
                >
                    <span aria-hidden="true">{symbol}</span>
                    {Math.abs(item.change.pct).toLocaleString("bn-BD", {
                        maximumFractionDigits: 1,
                    })}
                    %
                </span>
            </div>
        </div>
    );
};

export default ProductCard;