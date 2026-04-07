export enum IdeaStatus {
  NEW = "new",
  PROCESSING = "processing",
  COMPLETED = "completed",
}

export enum SortOrder {
  NEWEST_FIRST = "newest_first",
  OLDEST_FIRST = "oldest_first",
}

export interface IdeaRequest {
  idea: string;
  targetAudience: string;
  marketIndustry: string;
  geography: string;
  businessModel: string;
  keywords: string[];
  isModalOpen: boolean
}

export interface IdeaResponse {
  taskId: string;
}

export interface IdeasDashboardStats {
  total_ideas: number;
  completed: number;
  processing: number;
  avg_score: number | null;
}

export interface IdeaSummary {
  id: number;
  title: string;
  description: string;
  category: string;
  status: IdeaStatus;
  score: number | null;
  tags: string[];
  created_at: string;
}

export interface IdeasFilter {
  search: string | null;
  status: IdeaStatus | null;
  sort: SortOrder;
}

export interface IdeasListResponse {
  ideas: IdeaSummary[];
  total: number;
}
