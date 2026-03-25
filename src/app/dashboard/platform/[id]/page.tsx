"use client"

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from 'react';

const Page = () => {
    const router = useRouter();
    return (
        <div className={"flex flex-col"}>
            <div className={"flex flex-row justify-between items-center mb-4"}>
                <Button size={"lg"} onClick={() => router.push("/dashboard/platform")}>
                Back
            </Button>
            </div>
        </div>
    );
};

export default Page;