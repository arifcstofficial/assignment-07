
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavBarCategories } from "../types/NavBarCategories";

type Props = {
    navData: NavBarCategories[];
};

const NavBarLinks = ({ navData }: Props) => {
    const pathname = usePathname();

    return (
        <div className="flex justify-start mt-5 text-sm md:text-base px-6 gap-6">
            {navData.map((data) => {
                const href = `/categories/${data.id}`;
                const isActive = pathname === href;

                return (
                    <Link
                        href={href}
                        key={data.id}
                        className={`flex items-center gap-2 pb-2 ${
                            isActive
                                ? "text-green-600 border border-green-600 font-bold bg-amber-300 p-2"
                                : "text-gray-600 border-transparent hover:text-green-600"
                        }`}
                    >
                        <span>{data.icon}</span>
                        <span>{data.nameBn}</span>
                    </Link>
                );
            })}
        </div>
    );
};

export default NavBarLinks;
