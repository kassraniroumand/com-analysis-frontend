import React from 'react';
import {Button} from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
    return (
        <Button>
            <Link href={"/dashboard"}>Go to Idea Dashboard</Link>
        </Button>
    );
};

export default Home;