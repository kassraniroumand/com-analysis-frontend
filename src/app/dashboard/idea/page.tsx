"use client"
import React from 'react';
import {useAppDispatch} from "../../../lib/store";
import { Button } from "@/components/ui/button";
import IdeaSubmitBox from "../../../components/idea-submit-box";
import IdeaFilterBar from "../../../components/idea-filter-bar";
import { openModal } from "@/lib/features/dataSlice";
import IdeaStat from "../../../components/idea-page/idea-stat";
import IdeaList from "@/components/idea-page/idea-list";
import {Plus} from "lucide-react";

const IdeaListScreen = () => {
    const dispatch = useAppDispatch();



    return (
        <div className={"flex flex-col gap-4"}>
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Ideas</h1>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Submit startup ideas and explore validation reports
                    </p>
                </div>
                <Button
                    size={"lg"}
                    onClick={() => dispatch(openModal())}>
                    <Plus className="mr-2 h-4 w-4" />
                    New Analysis
                </Button>
            </div>
            <IdeaSubmitBox />
            <IdeaStat />
            <IdeaFilterBar />
            <IdeaList />
            {/*}*/}
            {/* filter box   */}
            {/*idea list*/}
        </div>
    );
};

export default IdeaListScreen;