import AsecendingDescendingPage from '@/app/components/AsecendingDescending';
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


async function ProductContents({ params }: { params: Promise<{ category: string }> }) {
    await requireSession(); // validates the session, redirects to "/" if invalid

    const { category } = await params;

    const resData = await fetch(
        `https://api.abcz.workers.dev/api/bazardor/products?category=${encodeURIComponent(category)}`
    );

    if (!resData.ok) {
        throw new Error(`Failed to fetch products for ${category}`);
    }

    const data: ProductDetailsType[] = await resData.json();

    return (
        <div className="px-4 sm:px-6">
            <div className="mt-4 sm:mt-6 lg:mt-8 bg-white p-4 sm:p-6 lg:p-8">
                <AsecendingDescendingPage data={data} />
            </div>
        </div>
    );
}

export default FilteredPage;