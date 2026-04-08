import React from "react";
import { IdeaSummary } from "@/schema/req_res_types";
import { Badge } from "@/components/ui/badge";

export interface PanelProps {
    idea: IdeaSummary | null;
}

export function DetailPanel({ idea }: PanelProps) {
    if (!idea) return null;
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <Badge
                    variant={
                        idea.status === "completed"
                            ? "default"
                            : idea.status === "processing"
                              ? "secondary"
                              : "outline"
                    }
                >
                    {idea.status}
                </Badge>
                {idea.score !== null && (
                    <span className="text-lg font-semibold">{idea.score}/100</span>
                )}
            </div>
            <div>
                <h3 className="text-sm font-medium text-muted-foreground">Description</h3>
                <p className="mt-1">{idea.description}</p>
            </div>
            <div>
                <h3 className="text-sm font-medium text-muted-foreground">Category</h3>
                <p className="mt-1">{idea.category}</p>
            </div>
            <div>
                <h3 className="text-sm font-medium text-muted-foreground">Tags</h3>
                <div className="mt-1 flex flex-wrap gap-1.5">
                    {idea.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary">{tag}</Badge>
                    ))}
                </div>
            </div>
            <div>
                <h3 className="text-sm font-medium text-muted-foreground">Created</h3>
                <p className="mt-1">{idea.created_at}</p>
            </div>
        </div>
    );
}

export function PreviewPanel({ idea }: PanelProps) {
    if (!idea) return null;
    return (
        <div className="flex flex-col gap-4">
            <p className="text-muted-foreground text-sm">
                Quick preview of the idea analysis.
            </p>
            <div className="rounded-md border p-4">
                <h3 className="font-medium">{idea.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{idea.description}</p>
            </div>
        </div>
    );
}

export function CompetitorPanel({ idea }: PanelProps) {
    if (!idea) return null;
    return (
        <div className="flex flex-col gap-4">
            <p className="text-muted-foreground text-sm">
                Competitor analysis for &ldquo;{idea.title}&rdquo;.
            </p>
            <div className="rounded-md border border-dashed p-8 text-center text-sm text-muted-foreground">
                Competitor data will be displayed here.
            </div>
        </div>
    );
}

export function ValidationPanel({ idea }: PanelProps) {
    if (!idea) return null;
    return (
        <div className="flex flex-col gap-4">
            <p className="text-muted-foreground text-sm">
                Validation results for &ldquo;{idea.title}&rdquo;.
            </p>
            <div className="rounded-md border border-dashed p-8 text-center text-sm text-muted-foreground">
                Validation data will be displayed here.
            </div>
        </div>
    );
}

export function PainPanel({ idea }: PanelProps) {
    if (!idea) return null;
    return (
        <div className="flex flex-col gap-4">
            <p className="text-muted-foreground text-sm">
                Pain point analysis for &ldquo;{idea.title}&rdquo;.
            </p>
            <div className="rounded-md border border-dashed p-8 text-center text-sm text-muted-foreground">
                Pain point data will be displayed here.
            </div>
        </div>
    );
}

export function NewAnalysisPanel() {
    return (
        <div className="flex flex-col gap-4">
            <p className="text-muted-foreground text-sm">
                Start a new idea analysis.
            </p>
            <div className="rounded-md border border-dashed p-8 text-center text-sm text-muted-foreground">
                New analysis form will be displayed here.
            </div>
        </div>
    );
}

export type PanelType = "detail" | "preview" | "competitor" | "validation" | "pain" | "new_analysis";

const panels: Record<PanelType, { title: string; component: React.FC<PanelProps> }> = {
    detail: { title: "Detail", component: DetailPanel },
    preview: { title: "Preview", component: PreviewPanel },
    competitor: { title: "Competitor Analysis", component: CompetitorPanel },
    validation: { title: "Validation", component: ValidationPanel },
    pain: { title: "Pain Points", component: PainPanel },
    new_analysis: { title: "new_analysis", component: NewAnalysisPanel },
};

export default panels;