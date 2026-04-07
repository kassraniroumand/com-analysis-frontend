"use client"

import React from 'react';
import {IdeaSummary} from "@/schema/req_res_types";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {ButtonGroup} from "@/components/ui/button-group";
import {Button} from "@/components/ui/button";
import {Calendar, Tag, View} from "lucide-react";


const IdeaListCard = (
    {ideaSummary}: { ideaSummary: IdeaSummary }
) => {


    return (
        <Card>
            <CardHeader>
                <div className={"flex flex-row justify-between"}>
                    <Badge variant={ideaSummary.status === "completed" ? "success" : ideaSummary.status === "processing" ? "warning" : "default"}>
                        {ideaSummary.status}
                    </Badge>
                    <Badge variant={"secondary"}>
                        {ideaSummary.score}
                    </Badge>
                </div>
                <CardTitle>
                    {ideaSummary.title}
                </CardTitle>
                <CardDescription>
                    {ideaSummary.description}
                </CardDescription>
            </CardHeader>


            <CardContent className={"flex flex-col flex-1 space-y-3 pb-3"}>
                {/*{ideaSummary.category}*/}
                {/*{ideaSummary.score}*/}

                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                        <Tag className="h-3 w-3"/>
                        {ideaSummary.category}
                    </span>
                    <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3 w-3"/>
                        {ideaSummary.created_at}
                    </span>
                </div>

                <div className={"flex flex-wrap gap-1.5"}>
                    {ideaSummary.tags.map((tag, index) => (
                        <Badge key={index} variant={"secondary"}>
                            {tag}
                        </Badge>
                    ))}
                </div>
            </CardContent>

            <CardFooter className="overflow-x-auto">
                <ButtonGroup className="flex-nowrap">
                    <Button variant="outline" size="lg">
                        <View /> Detail
                    </Button>
                    <Button variant="outline" size="lg">
                        <View /> Preview
                    </Button>
                    <Button variant="outline" size="lg">
                        <View /> Competitor
                    </Button>
                    <Button variant="outline" size="lg">
                        <View /> Validation
                    </Button>
                    <Button variant="outline" size="lg">
                        <View /> Pain
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    );
};

export default IdeaListCard;