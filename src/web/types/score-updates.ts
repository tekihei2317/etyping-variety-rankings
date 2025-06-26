export interface ScoreUpdate {
  username: string;
  category: string;
  previous_score: number | null;
  new_score: number;
  update_type: "new_record" | "score_update";
  created_at: string;
}

export interface ScoreUpdatesResponse {
  updates: ScoreUpdate[];
  count: number;
}