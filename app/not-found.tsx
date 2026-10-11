import Link from "next/link";

export default function NotFound() {
    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f9fbf9] px-6">
            {/* soft background blobs */}
            <div
                aria-hidden="true"
                className="absolute -left-24 -top-24 size-72 rounded-full bg-[#e3efe3] blur-3xl"
            />
            <div
                aria-hidden="true"
                className="absolute -bottom-24 -right-24 size-80 rounded-full bg-[#dcebdc] blur-3xl"
            />

            <div className="relative w-full max-w-md rounded-3xl border border-[#e3e9e3] bg-white p-8 text-center shadow-sm lg:max-w-lg lg:p-12">
                {/* icon */}
                <div className="mx-auto flex size-24 items-center justify-center rounded-3xl bg-[#f0f5f0] text-5xl lg:size-28 lg:text-6xl">
                    🥬
                </div>

                {/* error code */}
                <p className="mt-6 text-6xl font-extrabold tracking-tight text-[#2f6b3a] lg:text-7xl">
                    ৪০৪
                </p>

                <h1 className="mt-3 text-2xl font-bold text-[#1c2b1c] lg:text-3xl">
                    পেজটি খুঁজে পাওয়া যায়নি
                </h1>

                <p className="mt-3 text-sm leading-relaxed text-[#3d4a3d] lg:text-base">
                    আপনি যে পেজটি খুঁজছেন সেটি হয়তো সরানো হয়েছে, নাম পরিবর্তন
                    হয়েছে, অথবা কখনো ছিলই না।
                </p>

                {/* action */}
                <Link
                    href="/"
                    className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#2f6b3a] px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#265830] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#2f6b3a]/30 lg:text-base"
                >
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="size-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M3 11l9-8 9 8" />
                        <path d="M5 10v10h5v-6h4v6h5V10" />
                    </svg>
                    হোম পেজে ফিরে যান
                </Link>
            </div>
        </main>
    );
}