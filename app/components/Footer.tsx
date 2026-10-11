import React from 'react';

const FooterPage = () => {
    return (
        <div className="flex flex-col gap-2 text-center md:flex-row md:justify-between md:gap-4 md:text-left mt-10 lg:mt-15 p-3 lg:p-6 rounded-2xl bg-[#f7fcfe]">
            <div>
                বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
            </div>
            <div>
                সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
            </div>
        </div>
    );
};

export default FooterPage;