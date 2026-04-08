"use client"

import React from 'react';
import IdeaListCard from "./idea-list-card";
import { useIdeaListQuery } from "@/lib/services/dataApi";
import {useAppSelector} from "@/lib/store";
import {selectFilter} from "@/lib/features/dataSlice";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const IdeaListSkeleton = () => (
    <div className={"flex flex-col gap-1"}>
        <Skeleton className="h-5 w-36" />
        <div className={"grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-2"}>
            {Array.from({ length: 6 }).map((_, i) => (
                <Card key={i}>
                    <CardHeader>
                        <div className="flex flex-row justify-between">
                            <Skeleton className="h-5 w-20" />
                            <Skeleton className="h-5 w-10" />
                        </div>
                        <Skeleton className="h-5 w-3/4" />
                        <Skeleton className="h-4 w-full" />
                    </CardHeader>
                    <CardContent className="flex flex-col space-y-3 pb-3">
                        <div className="flex items-center gap-4">
                            <Skeleton className="h-3 w-16" />
                            <Skeleton className="h-3 w-20" />
                        </div>
                        <div className="flex gap-1.5">
                            <Skeleton className="h-5 w-14 rounded-full" />
                            <Skeleton className="h-5 w-14 rounded-full" />
                            <Skeleton className="h-5 w-14 rounded-full" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <div className="flex gap-2">
                            <Skeleton className="h-9 w-20" />
                            <Skeleton className="h-9 w-20" />
                            <Skeleton className="h-9 w-24" />
                        </div>
                    </CardFooter>
                </Card>
            ))}
        </div>
    </div>
);

const IdeaList = () => {

    const filter = useAppSelector(selectFilter)

    const {
        data: ideaListData,
        isLoading: ideaListIsLoading
    } = useIdeaListQuery(filter)

    if (ideaListIsLoading || !ideaListData) {
        return <IdeaListSkeleton />
    }

    return (
        <div className={"flex flex-col gap-1"}>
            <p>
                Showing {ideaListData.total} ideas
            </p>
            <div className={"grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2"}>
                {ideaListData.ideas?.map((idea) => (
                    <IdeaListCard key={idea.id} ideaSummary={idea} />
                ))}
            </div>
        </div>
    );
};

export default IdeaList;