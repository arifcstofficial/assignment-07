import Image from 'next/image';
 import {Avatar} from "@heroui/react";
import Link from 'next/link';
import CurrentTimePage from './CurrentTime';

const HeaderPage = () => {


    return (
        <div className="flex justify-between p-2 md:p-3 lg:p-4">
            <div className="flex gap-2">
                <div>
                    <Image src="/logo.png" alt="logo image" width={500} height={500} className="w-10 h-auto md:w-12 lg:w-[50px]" />
                </div>
                <div>
                    <div className="font-bold text-base md:text-lg lg:text-xl ">
                        বাজার দর
                    </div>
                    <div className="text-sm">
                        <CurrentTimePage></CurrentTimePage>
                    </div>
            </div>

            </div>
          
            <div>
                <div className="flex sm:gap-2 md:gap-3 lg:gap-4 justify-center items-center">
                    {/* <Avatar className="size-10 sm:size-11 lg:size-13">
                        <Avatar.Image alt="John Doe"  src="/logo.png" />
                        <Avatar.Fallback>JD</Avatar.Fallback>
                    </Avatar> */}
                    {/* <p className='hidden md:block gap-3 md:gap-4'>Name</p>
                    <Link href="/"><img src="/dropdown.png"></img></Link> */}

                    <button className='btn btn-primary bg-transparent text-blue-500'>সাইন ইন</button>
                    <Link href="/sign-up" className="btn bg-green-500 text-white">সাইন আপ</Link>
                    
                </div>
                

            </div>
        </div>
    );
};

export default HeaderPage;