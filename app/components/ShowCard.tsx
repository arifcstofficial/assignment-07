
import { ProductDetailsType } from "../types/ProductDetailsType";

type Direction = ProductDetailsType["change"]["dir"];

const changeStyle: Record<
    Direction,
    { symbol: string; text: string }
> = {
    up: { symbol: "▲", text: "text-red-600" },
    down: { symbol: "▼", text: "text-green-600" },
    flat: { symbol: "–", text: "text-gray-500" },
};

export default function ShowCard({
    item,
}: {
    item: ProductDetailsType;
}) {
    const { symbol, text } = changeStyle[item.change.dir];

    return (
        <article className="flex h-full w-full flex-col rounded-2xl border border-[#e3e9e3] bg-[#f9fbf9] p-4 transition-shadow hover:shadow-md sm:p-5 lg:p-6">
            {/* Product image and name */}
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-[#f0f5f0] text-3xl sm:size-16 lg:size-[72px] lg:text-4xl">
                    {item.image}
                </div>

                <div className="min-w-0 flex-1">
                    <h3 className="break-words text-base font-bold leading-snug text-[#1c2b1c] sm:text-lg lg:text-xl">
                        {item.nameBn}
                    </h3>


                    <p className="mt-1 text-sm text-[#647064]">
                        প্রতি{" "}
                        {item.unit === "kg"
                            ? "কেজি"
                            : item.unit === "litre"
                                ? "লিটার"
                                : item.unit === "dozen"
                                    ? "ডজন"
                                    : "পিস"}{" "}

                    </p>
                </div>
            </div>

            {/* Price and price change */}
            <div className="mt-5 flex flex-wrap items-end justify-between gap-3 border-t border-[#e3e9e3] pt-4 sm:mt-6 sm:pt-5">
                <div className="min-w-0">
                    <p className="text-sm text-[#647064]">
                        আজকের দাম
                    </p>

                    <p className="mt-1 flex flex-wrap items-baseline gap-1 text-[#1c2b1c]">
                        <span className="text-2xl font-bold sm:text-3xl">
                            {item.today.toLocaleString("bn-BD")}
                        </span>

                        <span className="text-sm sm:text-base">
                            টাকা
                        </span>
                    </p>
                </div>

                <span
                    className={`inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white px-3 py-2 text-xs font-semibold sm:text-sm ${text}`}
                >
                    <span aria-hidden="true">{symbol}</span>

                    {Math.abs(item.change.pct).toLocaleString("bn-BD", {
                        maximumFractionDigits: 1,
                    })}
                    %
                </span>
            </div>
        </article>
    );
}
