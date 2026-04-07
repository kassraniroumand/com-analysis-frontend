"use client"

import React from 'react';
import IdeaListCard from "./idea-list-card";
import { useIdeaListQuery } from "@/lib/services/dataApi";
import {useAppSelector} from "@/lib/store";
import {selectFilter} from "@/lib/features/dataSlice";

const IdeaList = () => {

    const filter = useAppSelector(selectFilter)

    const {
        data: ideaListData,
        isLoading: ideaListIsLoading
    } = useIdeaListQuery(filter)

    if (!ideaListData) {
        return <div>
            ideaListIsLoading
        </div>
    }

    return (
        <div className={"flex flex-col gap-1"}>
            <p>
                Showing {ideaListData.total} ideas
            </p>
            <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2"}>
                {ideaListData.ideas?.map((idea) => (
                    <IdeaListCard key={idea.id} ideaSummary={idea} />
                ))}
            </div>
        </div>
    );
};

export default IdeaList;