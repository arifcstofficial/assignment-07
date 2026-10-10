"use client"
import Image from 'next/image';
import Link from 'next/link';
import CurrentTimePage from './CurrentTime';
import { signOut, useSession } from '../lib/auth-client';
import { Button, Dropdown, Label } from '@heroui/react';


const HeaderPage = () => {
    const handleSignOut=async()=>{
        await signOut();
        window.location.reload();
    }
    const { data: session } = useSession();
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

                    {
                        session ? <div className="flex justify-center items-center">
                            <Dropdown>
                                <Button aria-label="Menu" variant="secondary">
                                    {session.user.name}▼
                                </Button>
                                <Dropdown.Popover>
                                    <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
                                        <Dropdown.Item id="new-file" textValue="New file">
                                            <Link href="/profile-update" >👤আমার প্রোফাইল</Link>
                                        </Dropdown.Item>
                                        <Dropdown.Item id="copy-link" textValue="Copy link">
                                            <Button onClick={handleSignOut} className="bg-transparent text-black"> ↩ সাইন আউট</Button>
                                        </Dropdown.Item>
                                        
                                    </Dropdown.Menu>
                                </Dropdown.Popover>
                            </Dropdown>

                        </div>
                            : <div>
                                <Link href="/sign-in" className='btn btn-primary bg-transparent text-blue-500'>সাইন ইন</Link>
                                <Link href="/sign-up" className="btn bg-green-500 text-white">সাইন আপ</Link>
                            </div>
                    }

                </div>


            </div>
        </div>
    );
};

export default HeaderPage;