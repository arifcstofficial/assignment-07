import Image from 'next/image';
import React from 'react';
import CurrentTimePage from '../components/CurrentTime';


const HeroSectionPage = () => {
    return (
        <div className="bg-base-200 my-4 md:my-6 lg:my-8 p-2 lg:p-4">
            <div className="p-2 lg:p-4 text-sm lg:text-base bg-[#d9efd9] w-fit text-green-600 rounded-4xl font-bold">
                <CurrentTimePage />
            </div>

            <div className="hero-content flex-row-reverse gap-3 lg:gap-8 p-0 pt-3 lg:p-4">
                <Image
                    alt="Image of Items in a busket"
                    src="/hero.png"
                    width={500}
                    height={500}
                    priority
                    className="w-24 sm:w-40 md:w-56 lg:w-96 h-auto shrink-0 rounded-lg"
                />
                <div className="min-w-0">
                    <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-5xl font-bold">
                        আজকের বাজারের দাম এক নজরে
                    </h1>
                    <p className="py-5 lg:py-6 text-xs sm:text-sm lg:text-base line-clamp-3 sm:line-clamp-none">
                        চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
                    </p>
                    <button className="btn btn-sm lg:btn-md bg-green-600 text-white">
                        সব পণ্য দেখুন
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSectionPage;