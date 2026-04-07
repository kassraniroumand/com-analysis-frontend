"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import { setField, closeModal, selectCanSubmit } from "@/lib/features/dataSlice";

const IdeaSubmitBox = () => {
  const dispatch = useAppDispatch();
  const form = useAppSelector((state) => state.data.form);
  const canSubmit = useAppSelector(selectCanSubmit);

  return (
    <Dialog open={form.isModalOpen} onOpenChange={(open) => { if (!open) dispatch(closeModal()); }}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Submit a New Idea</DialogTitle>
          <DialogDescription>Fill in the details for your business idea analysis.</DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="idea">Idea</Label>
            <Input
              id="idea"
              value={form.idea}
              onChange={(e) => dispatch(setField({ field: "idea", value: e.target.value }))}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="targetAudience">Target Audience</Label>
            <Input
              id="targetAudience"
              value={form.targetAudience}
              onChange={(e) => dispatch(setField({ field: "targetAudience", value: e.target.value }))}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="marketIndustry">Market / Industry</Label>
            <Input
              id="marketIndustry"
              value={form.marketIndustry}
              onChange={(e) => dispatch(setField({ field: "marketIndustry", value: e.target.value }))}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="geography">Geography</Label>
            <Input
              id="geography"
              value={form.geography}
              onChange={(e) => dispatch(setField({ field: "geography", value: e.target.value }))}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="businessModel">Business Model</Label>
            <Input
              id="businessModel"
              value={form.businessModel}
              onChange={(e) => dispatch(setField({ field: "businessModel", value: e.target.value }))}
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => dispatch(closeModal())}>Cancel</Button>
          <Button disabled={!canSubmit}>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default IdeaSubmitBox;