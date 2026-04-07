import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

interface IdeaStatCardProps {
    title: string;
    value: number;
}

const IdeaStatCard = ({title, value}: IdeaStatCardProps) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{ title }</CardTitle>
            </CardHeader>
            <CardContent>
                { value }
            </CardContent>
        </Card>
    );
};

export default IdeaStatCard;