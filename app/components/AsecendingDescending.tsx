
"use client";

import { useState } from "react";
import ShowCard from "./ShowCard";
import { ProductDetailsType } from "../types/ProductDetailsType";

type AscendingDescendingProps = {
  data: ProductDetailsType[];
};

const AsecendingDescendingPage = ({
  data,
}: AscendingDescendingProps) => {
  const [showItems, setShowItems] = useState("default");

   if (data.length === 0) {
        return <p className="mt-8 px-6">এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।</p>;
    }

    const first = data[0];
    const count = data.length.toLocaleString("bn-BD");
     if (data.length === 0) {
        return <p className="mt-8 px-6">এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।</p>;
    } 

  const sortedData = [...data].sort((a, b) => {
    if (showItems === "ascending") {
      return a.today - b.today;
    }

    if (showItems === "descending") {
      return b.today - a.today;
    }

    return 0;
  });

  return (
    <div>
      <div className="dropdown dropdown-center">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 bg-transparent border border-blue-400"
        >
          {showItems === "default"
            ? "ডিফল্ট"
            : showItems === "ascending"
              ? "দাম কম থেকে বেশি"
              : "দাম বেশি থেকে কম"}
          ⬇️
        </div>

        <ul className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">
          <li>
            <button onClick={() => setShowItems("default")}>
              ডিফল্ট
            </button>
          </li>

          <li>
            <button onClick={() => setShowItems("ascending")}>
              দাম কম থেকে বেশি
            </button>
          </li>

          <li>
            <button onClick={() => setShowItems("descending")}>
              দাম বেশি থেকে কম
            </button>
          </li>
        </ul>
      </div>

       <div className="px-6">
                <div className="mt-8 flex items-center gap-4 rounded-3xl bg-white p-8">
                    <span className="text-4xl">{first.categoryIcon}</span>
                    <div>
                        <p className="text-xl font-bold">{first.categoryNameBn}</p>
                        <p>{count}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                    </div>
                </div>

                <p className="my-4">মোট {count}টি পণ্য দেখানো হচ্ছে</p>

               
            </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sortedData.map((item) => (
          <ShowCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AsecendingDescendingPage;
