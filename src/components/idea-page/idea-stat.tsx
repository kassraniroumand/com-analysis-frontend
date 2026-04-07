import { useIdeaStatsQuery } from "@/lib/services/dataApi";
import React from 'react';
import IdeaStatCard from "./idea-stat-card";


const IdeaStat = () => {
    const {
        data: ideaStat,
        isLoading: ideaStatIsLoading
    } = useIdeaStatsQuery()

    if (ideaStatIsLoading) {
        return <div>Loading...</div>
    }

    if (!ideaStat) {
        return <div>No idea stat data available</div>
    }

    return (
        <div className={"grid grid-cols-2 sm:grid-cols-4 gap-1.5"}>
            <IdeaStatCard title={"total ideas"} value={ideaStat?.total_ideas} />
            <IdeaStatCard title={"avg_score ideas"} value={ideaStat?.avg_score} />
            <IdeaStatCard title={"completed"} value={ideaStat?.completed} />
            <IdeaStatCard title={"processing"} value={ideaStat?.processing} />
        </div>
    );
};

export default IdeaStat;