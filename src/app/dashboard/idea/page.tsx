"use client"
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import React from 'react';
import {setquery} from "@/lib/features/dataSlice"
import {useAppDispatch, useAppSelector} from "../../../lib/store";
import { Button } from "@/components/ui/button";
import {useTriggerWorkflowMutation} from '@/lib/services/dataApi'

const IdeaList = () => {
    const router = useRouter();
    const dispatch = useAppDispatch()
    const query = useAppSelector(state => state.data.query)
    const [triggerWorkflow] = useTriggerWorkflowMutation()


    return (
        <div>


            <div className={"flex flex-row gap-2"}>
                <Input
                    value={query}
                    onChange={(e) => dispatch(setquery(e.target.value))}
                />
                <Button onClick={() => triggerWorkflow({query: query})}>
                    Search
                </Button>
            </div>


            <div onClick={() => router.push('/dashboard/idea/1')}>
                1
            </div>
        </div>
    );
};

export default IdeaList;