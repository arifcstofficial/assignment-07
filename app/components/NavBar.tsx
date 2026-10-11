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
  

    return (
        <Suspense
            fallback={
                <div className="mt-3 px-4 text-sm sm:mt-5 sm:px-6 md:text-base">
                    Loading categories...
                </div>
            }
        >
            <NavBarLinks navData={navData} />
        </Suspense>
    );
};

export default NavBarPage;