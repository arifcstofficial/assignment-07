"use client";
import { toast } from "@heroui/react";
import { signIn } from "@/app/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, FieldError, Form, Input, Label, TextField, Toast } from "@heroui/react";
import Link from "next/link";

export default function SignInPage() {
    const handleGoogleSignIn = async () => {
        const data = await signIn.social({
            provider: "google",
        });
    }
    const handleGithubSignIn = async () => {
        const data = await signIn.social({
            provider: "github",
        })
    };
    const buttonSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries()) as {
            email: string,
            password: string,
        };

        const { data: resData, error } = await signIn.email({
            email: data.email,
            password: data.password,
            callbackURL: "/",
        });

        if (error) {
            toast.danger("লগইন ব্যর্থ হয়েছে");
        }
        else{toast.success("সফলভাবে লগইন হয়েছে");}
        

    };

    return (

        <div className="my-6 px-4 md:my-10 grid grid-cols-1 justify-items-center">
            <div className="max-w-full">
                <p className="font-bold text-3xl sm:text-4xl">
                    সাইন ইন
                </p>
                <p className="text-slate-800 mb-8">
                    বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
                </p>
            </div>
            <div className="bg-white p-4 sm:p-6 rounded-lg w-full sm:w-auto max-w-full">
                <Form className="flex w-full sm:w-96 flex-col gap-4" onSubmit={buttonSubmitHandler}>

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                       
                    >
                        <Label>ইমেইল</Label>
                        <Input placeholder="you@example.com" />
                        <FieldError />
                    </TextField>


                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                       
                    >
                        <Label>পাসওয়ার্ড</Label>
                        <Input placeholder="কমপক্ষে ৮ অক্ষর" />
                        <FieldError />
                    </TextField>

                    <div className="flex gap-2">
                        <Button type="submit" className="bg-green-600 text-white">
                            <Check />
                            সাইন ইন
                        </Button>
                    </div>
                </Form>
                <div className="flex w-full flex-col">
                    <div className="divider">অথবা</div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:gap-0 sm:justify-evenly">
                    <Button onClick={handleGoogleSignIn} className="bg-[#cdc6c6] text-black " >Google দিয়ে চালিয়ে যান</Button>
                    <Button onClick={handleGithubSignIn} className="bg-[#f7d1d1] text-black">GitHub দিয়ে চালিয়ে যান</Button>
                </div>
                <div className="flex flex-wrap justify-center pt-4 gap-2 sm:gap-4">
                    <span>অ্যাকাউন্ট নেই?</span>  <Link href="/sign-up" className="hover:underline hover:text-blue-500">সাইন আপ করুন</Link>
                </div>
            </div>



        </div>

    );
}