import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type {RootState} from "../store";


export interface WorkFlowTriggerIn {
    query: string
}

export interface WorkFlowTriggerOut {
    query: string
}

export const dataApi = createApi({
    reducerPath: "dataApi",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
        prepareHeaders: (headers, { getState }) => {
          const token = (getState() as RootState).auth.token
          if (token) {
            headers.set("Authorization", `Bearer ${token}`)
          }
          return headers
        },
    }),
    endpoints: (builder) => ({
        triggerWorkflow: builder.mutation<WorkFlowTriggerOut, WorkFlowTriggerIn>({
            query: (data) => ({
                url: "/api/workflow/trigger",
                method: "POST",
                body: data,
            }),
        })
    })
})

export const { useTriggerWorkflowMutation } = dataApi
