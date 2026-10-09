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

async function ProductContents({params}:Props){
     const {productId}=await params;
     const resData=await fetch(`https://api.api-store.workers.dev/api/bazardor/products/${productId}`); 
     const data:ProductDetailsType=await resData.json();
     console.log(data);
     return(
        <div className="mt-6">
           <div className="flex justify-between p-8">
                   <div className="flex gap-4">
                     <p className="text-7xl shadow-2xl">{data.image}</p>
                     <div>
                        <h1 className="text-4xl font-bold">{data.nameBn}</h1>
                        <p>প্রতি কেজি {data.categoryNameBn}</p>
                        <p>গত কালের তুলনায় দাম কমেছে {data.yesterday-data.today}টাকা </p>
                     </div>
                   </div>   

                   <div>
                        <p>ajker dam</p>
                        <p>{data.today}</p>
                        <p></p>
                        <p>{data.change.pct}</p>
                    </div>

                             
           </div>
        </div>
     )
}

export default ProductDetailsPage;