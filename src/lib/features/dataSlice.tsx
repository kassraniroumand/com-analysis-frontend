import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import {dataApi} from '../services/dataApi'
import {IdeaRequest, IdeasFilter, IdeaStatus, IdeaSummary, SortOrder} from "../../schema/req_res_types";
import type { PanelType } from "@/components/idea-page/idea-sheet-panels";

interface SheetState {
  idea: IdeaSummary | null;
  panel: PanelType | null;
}

interface DataState {
  form: IdeaRequest;
  filter: IdeasFilter;
  sheet: SheetState;
}

const initialState: DataState = {
  form: {
    idea: "",
    targetAudience: "",
    marketIndustry: "",
    geography: "",
    businessModel: "",
    keywords: [""],
    isModalOpen: false,
  },
  filter: {
    search: null,
    status: null,
    sort: SortOrder.NEWEST_FIRST,
  },
  sheet: {
    idea: null,
    panel: null,
  },
};



const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setField: (
          state,
          action: PayloadAction<{
            field: keyof Omit<IdeaRequest, "isModalOpen">;
            value: string;
          }>
        ) => {
          (state.form as any)[action.payload.field] = action.payload.value;
        },
        resetForm: (state) => {
          state.form = initialState.form;
        },
        openModal: (state) => {
          state.form.isModalOpen = true;
        },
        closeModal: (state) => {
          state.form = initialState.form;
        },
        setFilterSearch: (state, action: PayloadAction<string>) => {
          state.filter.search = action.payload || null;
        },
        setFilterStatus: (state, action: PayloadAction<IdeaStatus | null>) => {
          state.filter.status = action.payload;
        },
        setFilterSort: (state, action: PayloadAction<SortOrder>) => {
          state.filter.sort = action.payload;
        },
        openSheet: (state, action: PayloadAction<{ idea: IdeaSummary | null; panel: PanelType }>) => {
          state.sheet.idea = action.payload.idea;
          state.sheet.panel = action.payload.panel;
        },
        closeSheet: (state) => {
          state.sheet.idea = null;
          state.sheet.panel = null;
        },
    },
    // extraReducers: (builder, ) => {
    //     builder.addMatcher(
    //         dataApi.endpoints.triggerWorkflow.matchFulfilled,
    //         (state, {payload}) => {
    //             state.results = payload
    //         }
    //     )
    // }
})

export const selectCanSubmit = (state: { data: DataState }) =>
  state.data.form.idea.trim().length > 0;

export const selectFilter = (state: { data: DataState }) => state.data.filter;
export const selectSheet = (state: { data: DataState }) => state.data.sheet;

export default dataSlice.reducer
export const {
  setField, resetForm, openModal, closeModal,
  setFilterSearch, setFilterStatus, setFilterSort,
  openSheet, closeSheet,
} = dataSlice.actions