import React from 'react';
import {CardData} from "../../../components/card-data";

const Page = () => {
    return (
        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"}>
            <CardData id={1} eventName={"naem 1"} />
            <CardData id={2} eventName={"naem 1"} />
            <CardData id={3} eventName={"naem 1"} />
            <CardData id={4} eventName={"naem 1"} />
        </div>
    );
};

export default Page;