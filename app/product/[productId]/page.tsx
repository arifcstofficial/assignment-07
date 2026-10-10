import AveragePricePage from '@/app/Products/AveragePrice';
import HighestPricePage from '@/app/Products/HighestPrice';
import LowestPricePage from '@/app/Products/LowestPrice';
import ProductTablePage from '@/app/Products/ProductTable';
import { ProductDetailsType } from '@/app/types/ProductDetailsType';
import React, { Suspense } from 'react';

type Props = {
    params: Promise<{ productId: string }>;
}
const ProductDetailsPage = ({ params }: Props) => {

    return (
        <div>
            <Suspense fallback={<div>Loading product..</div>}>
                <ProductContents params={params}></ProductContents>
            </Suspense>
        </div>
    );
};

async function ProductContents({ params }: Props) {
    const { productId } = await params;
    const resData = await fetch(`https://api.abcz.workers.dev/api/bazardor/products/${productId}`);
    const data: ProductDetailsType = await resData.json();
    console.log(data);
    return (
        <div>


            <div className="mt-6 bg-white rounded-xl">
                <div className="flex justify-between p-8 items-center">
                    <div className="flex gap-4">
                        <p className="text-7xl shadow-2xl">{data.image}</p>
                        <div>
                            <h1 className="text-4xl font-bold">{data.nameBn}</h1>
                            <p>প্রতি কেজি {data.categoryNameBn}</p>
                            <p>গত কালের তুলনায় দাম কমেছে {data.yesterday - data.today}টাকা </p>
                        </div>
                    </div>

                    <div className="text-slate-600 rounded-md bg-red-200 p-4">
                        <p className="font-semibold text-2xl">আজকের দাম</p>
                        <p className="flex justify-center font-bold text-4xl">{data.today}</p>
                        <p className="flex justify-center">টাকা / কেজি </p>
                        <p className="flex justify-center">{data.change.pct}%</p>
                    </div>


                </div>
            </div>



            <div>
                <div>
                    <p className="font-bold text-3xl mt-10">দামের সারসংক্ষেপ</p>
                         
                        
                    <div className="grid grid-cols-3  mt-6 gap-5 px-4"> 
                        <div className='border border-green-500 rounded-2xl p-6 bg-olive-300'>
                            <p>সর্বনিম্ন দাম</p>
                            <LowestPricePage data={data}></LowestPricePage>
                        </div>

                        <div  className='border border-green-500 rounded-2xl p-6 bg-olive-300'>
                            <p>সর্বাধিক দাম</p>
                            <HighestPricePage data={data}></HighestPricePage>
                        </div>

                        <div  className='border border-green-500 rounded-2xl p-6 bg-olive-300'>
                            <p>গড় দাম</p>
                            <AveragePricePage data={data}></AveragePricePage>
                        </div>

                        <div>

                        </div>
                    </div>
                </div>
            </div>

        <div>
             <p className="font-bold text-3xl mt-7">বাজারভিত্তিক আজকের দাম</p>
             <ProductTablePage data={data}></ProductTablePage>
        </div>

       
    </div>
    

    )
}

export default ProductDetailsPage;