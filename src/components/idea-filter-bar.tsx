"use client"

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import {
  selectFilter,
  setFilterSearch,
  setFilterStatus,
  setFilterSort,
} from "@/lib/features/dataSlice";
import { IdeaStatus, SortOrder } from "@/schema/req_res_types";

const IdeaFilterBar = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectFilter);

  return (
    <div className="flex items-center gap-4">
      <Input
        placeholder="Search ideas..."
        value={filter.search ?? ""}
        onChange={(e) => dispatch(setFilterSearch(e.target.value))}
        className="max-w-sm"
      />

      <Select
        value={filter.status ?? "all"}
        onValueChange={(val) =>
          dispatch(setFilterStatus(val === "all" ? null : (val as IdeaStatus)))
        }
      >
        <SelectTrigger className="w-[160px]">
          <SelectValue placeholder="All statuses" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All statuses</SelectItem>
          {Object.values(IdeaStatus).map((s) => (
            <SelectItem key={s} value={s}>{s}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={filter.sort}
        onValueChange={(val) => dispatch(setFilterSort(val as SortOrder))}
      >
        <SelectTrigger className="w-[160px]">
          <SelectValue placeholder="Sort order" />
        </SelectTrigger>
        <SelectContent>
          {Object.values(SortOrder).map((s) => (
            <SelectItem key={s} value={s}>{s}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default IdeaFilterBar;