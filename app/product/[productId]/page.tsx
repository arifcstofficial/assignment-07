import AveragePricePage from '@/app/Products/AveragePrice';
import HighestPricePage from '@/app/Products/HighestPrice';
import LowestPricePage from '@/app/Products/LowestPrice';
import ProductTablePage from '@/app/Products/ProductTable';
import { ProductDetailsType } from '@/app/types/ProductDetailsType';
import React, { Suspense } from 'react';
import { requireSession } from "@/app/lib/session";
import ProductsSkeleton from '@/app/components/ProductsSkeleton';

type Props = {
    params: Promise<{ productId: string }>;
}
const ProductDetailsPage = ({ params }: Props) => {

    return (
        <div>
            <Suspense fallback={<ProductsSkeleton />}>
                <ProductContents params={params}></ProductContents>
            </Suspense>
        </div>
    );
};

async function ProductContents({ params }: Props) {
    await requireSession();
    const { productId } = await params;
    const resData = await fetch(`https://api.abcz.workers.dev/api/bazardor/products/${productId}`);
    const data: ProductDetailsType = await resData.json();
    console.log(data);
    return (
        <div>


            <div className="mt-4 sm:mt-6 bg-white rounded-xl">
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-between p-4 sm:p-6 lg:p-8 sm:items-center">
                    <div className="flex gap-3 sm:gap-4 min-w-0">
                        <p className="text-5xl sm:text-6xl lg:text-7xl shadow-2xl shrink-0">{data.image}</p>
                        <div className="min-w-0">
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold break-words">{data.nameBn}</h1>
                            <p>
                                প্রতি{" "}
                                {data.unit === "kg"
                                    ? "কেজি"
                                    : data.unit === "litre"
                                        ? "লিটার"
                                        : data.unit === "dozen"
                                            ? "ডজন"
                                            : "পিস"}{" "}
                                {data.categoryNameBn}
                            </p>

                            <p>গত কালের তুলনায় দাম কমেছে {data.yesterday - data.today}টাকা </p>
                        </div>
                    </div>

                    <div className="text-slate-600 rounded-md bg-red-200 p-3 sm:p-4 w-full sm:w-auto shrink-0">
                        <p className="font-semibold text-xl sm:text-2xl">আজকের দাম</p>
                        <p className="flex justify-center font-bold text-3xl sm:text-4xl">{data.today}</p>
                        <p className="flex justify-center">টাকা / কেজি </p>
                        <p className="flex justify-center">{data.change.pct}%</p>
                    </div>


                </div>
            </div>



            <div>
                <div>
                    <p className="font-bold text-2xl sm:text-3xl mt-6 sm:mt-10">দামের সারসংক্ষেপ</p>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 sm:mt-6 gap-3 sm:gap-5 px-0 sm:px-4">
                        <div className='border border-green-500 rounded-2xl p-4 sm:p-6 bg-olive-300'>
                            <p>সর্বনিম্ন দাম</p>
                            <LowestPricePage data={data}></LowestPricePage>
                        </div>

                        <div className='border border-green-500 rounded-2xl p-4 sm:p-6 bg-olive-300'>
                            <p>সর্বাধিক দাম</p>
                            <HighestPricePage data={data}></HighestPricePage>
                        </div>

                        <div className='border border-green-500 rounded-2xl p-4 sm:p-6 bg-olive-300'>
                            <p>গড় দাম</p>
                            <AveragePricePage data={data}></AveragePricePage>
                        </div>

                        <div>

                        </div>
                    </div>
                </div>
            </div>

            <div>
                <p className="font-bold text-2xl sm:text-3xl mt-6 sm:mt-7">বাজারভিত্তিক আজকের দাম</p>
                <ProductTablePage data={data}></ProductTablePage>
            </div>


        </div>


    )
}

export default ProductDetailsPage;