import { cacheLife } from 'next/cache';
import React from 'react';
import { NavBarCategories } from '../types/NavBarCategories';

const NavBarPage = async() => {
    "use cache";
    cacheLife("hours");
    const resData=await fetch("https://api.api-store.workers.dev/api/bazardor/categories");
    const navData:NavBarCategories[]=await resData.json();
    
    return (
        <div className="flex justify-start mt-5 text-sm md:text-base px-6 gap-6">
              {
                navData.map((data,ind)=>(<div key={ind} > <span>{data.icon}</span><span>  {data.nameBn}</span> </div>))
              }
        </div>
    );
};

export default NavBarPage;