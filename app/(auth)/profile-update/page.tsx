"use client"
import { signOut, updateUser, useSession } from '@/app/lib/auth-client';
import { TextField, Button, FieldError, FieldGroup, Fieldset, Form, Input, Label, toast } from '@heroui/react';
import React from 'react';
import { useRouter } from "next/navigation";

const ProfileUpdatePage = () => {
    const { data: session } = useSession();
    const router = useRouter();
    
    const handleSignOut = async () => {
        await signOut();
        router.push("/");
       router.refresh()
    }
   

    const onSubmit =async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data=Object.fromEntries(formData.entries()) as{
            name:string,
        };
        const { error } = await updateUser({
            name: data.name,
        });

        if (error) {
            toast.danger("আপডেট ব্যর্থ হয়েছে", {
                description: error.message,
            });
            return;
        }

        toast.success("নাম সফলভাবে আপডেট হয়েছে");
    };

    return (
        <div className="flex justify-center mt-10">

            <div className="bg-white rounded-lg p-5" >
                <div className="mb-8 bg-[#ebcccc] rounded-2xl p-3">
                    <h1 className="font-bold text-3xl ">আমার প্রোফাইল</h1>
                    <p>আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
                </div>
                <div className="flex gap-35 mb-8 bg-[#ebcccc] rounded-2xl p-3">
                    <div>
                        <p className="font-bold text-lg"><span>নামঃ </span>{session?.user.name}</p>
                        <p><span>ইমেইলঃ </span>{session?.user.email}</p>
                    </div>
                    <div>
                        <Button onClick={handleSignOut}> ↩ সাইন আউট</Button>
                    </div>
                </div>

                <div>
            
                    <Form className="w-full max-w-96" onSubmit={onSubmit}>
                        <Fieldset>
                            <Fieldset.Legend className='font-bold text-lg mb-4'>তথ্য</Fieldset.Legend>
                            <FieldGroup>
                                <TextField 
                                    isRequired
                                    name="name"
                                    validate={(value) => {
                                        if (value.length < 3) {
                                            return "নাম কমপক্ষে ৩ অক্ষরবিশিষ্ট হতে হবে";
                                        }
                                        return null;
                                    }}
                                >
                                    <Label>নাম</Label>
                                    <Input/>
                                    <FieldError />
                                </TextField>
                                
                                
                            </FieldGroup>
                            <Fieldset.Actions>
                                <Button type="submit">
                                  আপডেট
                                </Button>
                                
                            </Fieldset.Actions>
                        </Fieldset>
                    </Form>
                </div>
            </div>

        </div>


    );
};

export default ProfileUpdatePage;