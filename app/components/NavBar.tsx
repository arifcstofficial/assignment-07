
import { cacheLife } from "next/cache";
import { Suspense } from "react";
import { NavBarCategories } from "../types/NavBarCategories";
import NavBarLinks from "./NavBarLinks";


const NavBarPage = async () => {
    "use cache";

    cacheLife("hours");
   
    const resData = await fetch(
        "https://api.abcz.workers.dev/api/bazardor/categories"
    );

    if (!resData.ok) {
        throw new Error("Failed to fetch navbar categories");
    }

    const navData: NavBarCategories[] = await resData.json();
    console.log("Navigation data", navData);

    return (
        <Suspense
            fallback={
                <div className="mt-5 px-6 text-sm md:text-base">
                    Loading categories...
                </div>
            }
        >
            <NavBarLinks navData={navData} />
        </Suspense>
    );
};

export default NavBarPage;
