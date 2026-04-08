"use client"

import React from "react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
} from "@/components/ui/sheet";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import { selectSheet, closeSheet } from "@/lib/features/dataSlice";
import panels from "./idea-sheet-panels";

const IdeaSheet = () => {
    const dispatch = useAppDispatch();
    const { idea, panel } = useAppSelector(selectSheet);

    const isOpen = panel !== null;
    const activePanel = panel ? panels[panel] : null;
    const ActiveComponent = activePanel?.component;

    return (
        <Sheet open={isOpen} onOpenChange={(open) => { if (!open) dispatch(closeSheet()); }}>
            <SheetContent>
                {activePanel && (
                    <>
                        <SheetHeader>
                            <SheetTitle>
                                {activePanel.title}{idea ? ` — ${idea.title}` : ""}
                            </SheetTitle>
                            {idea && <SheetDescription>{idea.description}</SheetDescription>}
                        </SheetHeader>
                        <div className="p-4 overflow-y-auto flex-1">
                            {ActiveComponent && <ActiveComponent idea={idea} />}
                        </div>
                    </>
                )}
            </SheetContent>
        </Sheet>
    );
};

export default IdeaSheet;