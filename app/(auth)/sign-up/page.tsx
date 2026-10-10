"use client";
import { toast } from "@heroui/react";
import { signUp } from "@/app/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, FieldError, Form, Input, Label, TextField, Toast } from "@heroui/react";

export default function SignUpPage() {
    const buttonSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries()) as {
            name: string,
            email: string,
            password: string,
            confirmPassword:string,
        };

        if(data.password!=data.confirmPassword){
           return toast("পাসওয়ার্ড মিলছে না");
        }
         else{
            const { data: resData, error } = await signUp.email({
            name: data.name,
            email: data.email,
            password: data.password,
            callbackURL: "/",
        });
        
            toast("সফল্ভাবে আপনার আকাউন্ট তৈরি হলো");
            
         }
        
    };

    return (

        <div className="my-10 grid grid-cols-1 justify-items-center">
            <div>
                <p className="font-bold text-4xl">
                    অ্যাকাউন্ট তৈরি করুন
                </p>
                <p className="text-slate-400 mb-8">
                    বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
                </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
                <Form className="flex w-96 flex-col gap-4" onSubmit={buttonSubmitHandler}>
                    <TextField
                        isRequired
                        name="name"
                    >
                        <Label>নাম</Label>
                        <Input placeholder="যেমনঃ রহিম উদ্দিন" />
                    </TextField>


                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }

                            return null;
                        }}
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
                        validate={(value) => {
                            if (value.length < 8) {
                                return "কমপক্ষে ৮ অক্ষর বিশিষ্ট হতে হবে";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "কমপক্ষে ১ টি বড় হাতের অক্ষর থাকতে হবে";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "পাসওয়ার্ডে কমপক্ষে ১ টি সংখ্যা থাকতে হবে";
                            }

                            return null;
                        }}
                    >
                        <Label>পাসওয়ার্ড</Label>
                        <Input placeholder="কমপক্ষে ৮ অক্ষর" />
                        <FieldError />
                    </TextField>


                    <TextField
                        isRequired
                        minLength={8}
                        name="confirmPassword"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "";
                            }

                            return null;
                        }}
                    >
                        <Label>পাসওয়ার্ড নিশ্চিত করুন</Label>
                        <Input placeholder="আবার লিখুন" />
                        <FieldError />
                    </TextField>

                    <div className="flex gap-2">
                        <Button type="submit" className="bg-green-600 text-white">
                            <Check />
                            অ্যাকাউন্ট তৈরি করুন
                        </Button>
                    </div>
                </Form>
            </div>



        </div>

    );
}