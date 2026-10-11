export default function ProductsSkeleton() {
    return (
        <div className="px-4 sm:px-6">
            <div className="mt-4 sm:mt-6 lg:mt-8 rounded-3xl bg-white p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div
                            key={i}
                            className="w-full animate-pulse rounded-3xl border border-[#e3e9e3] bg-[#f9fbf9] p-4 lg:p-6"
                        >
                            <div className="flex items-center gap-3 lg:gap-5">
                                <div className="size-14 shrink-0 rounded-2xl bg-[#e3ebe3] lg:size-[72px]" />
                                <div className="flex-1 space-y-2">
                                    <div className="h-5 w-2/3 rounded bg-[#e3ebe3]" />
                                    <div className="h-4 w-1/3 rounded bg-[#e3ebe3]" />
                                </div>
                            </div>

                            <div className="mt-4 flex items-end justify-between lg:mt-6">
                                <div className="space-y-2">
                                    <div className="h-4 w-20 rounded bg-[#e3ebe3]" />
                                    <div className="h-8 w-28 rounded bg-[#e3ebe3]" />
                                </div>
                                <div className="h-8 w-16 rounded-full bg-[#e3ebe3]" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}