import { requireSession } from '@/app/lib/session';
import { ProductDetailsType } from '@/app/types/ProductDetailsType';
import React, { Suspense } from 'react';

type FilteredPageProps = {
    params: Promise<{ category: string }>;
};

type Direction = ProductDetailsType["change"]["dir"];

const changeStyle: Record<Direction, { symbol: string; text: string }> = {
    up: { symbol: "▲", text: "text-red-600" },
    down: { symbol: "▼", text: "text-green-600" },
    flat: { symbol: "–", text: "text-gray-500" },
};

const FilteredPage = ({ params }: FilteredPageProps) => {
    return (
        <div>
            <Suspense fallback={<div>Loading product</div>}>
                <ProductContents params={params} />
            </Suspense>
        </div>
    );
};

function ShowCard({ item }: { item: ProductDetailsType }) {
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
}

async function ProductContents({ params }: { params: Promise<{ category: string }> }) {
     await requireSession(); 
    const { category } = await params;

    const resData = await fetch(
        `https://api.abcz.workers.dev/api/bazardor/products?category=${encodeURIComponent(category)}`
    );

    if (!resData.ok) {
        throw new Error(`Failed to fetch products for ${category}`);
    }

    const data: ProductDetailsType[] = await resData.json();

    if (data.length === 0) {
        return <p className="mt-8 px-6">এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।</p>;
    }

    const first = data[0];
    const count = data.length.toLocaleString("bn-BD");

    return (
        <div className="px-6">
            <div className="mt-8 flex items-center gap-4 rounded-3xl bg-white p-8">
                <span className="text-4xl">{first.categoryIcon}</span>
                <div>
                    <p className="text-xl font-bold">{first.categoryNameBn}</p>
                    <p>{count}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                </div>
            </div>

            <p className="my-4">মোট {count}টি পণ্য দেখানো হচ্ছে</p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {data.map((item) => (
                    <ShowCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

export default FilteredPage;