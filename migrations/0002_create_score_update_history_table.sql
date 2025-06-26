-- Migration number: 0002 	 2025-06-25T00:00:00.000Z

-- Create table for score update history
CREATE TABLE score_update_history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,              -- ユーザー名
    category TEXT NOT NULL,              -- 種目 (ビジネス, スタディ, ライフ, etc.)
    previous_score INTEGER,              -- 以前のスコア (NULL = 初回記録)
    new_score INTEGER NOT NULL,          -- 新しいスコア
    update_type TEXT NOT NULL,           -- 'new_record' or 'score_update'
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_update_type CHECK (update_type IN ('new_record', 'score_update'))
);

-- Create indexes for better query performance
CREATE INDEX idx_score_history_created_at ON score_update_history(created_at DESC);
CREATE INDEX idx_score_history_username ON score_update_history(username);
CREATE INDEX idx_score_history_category ON score_update_history(category);