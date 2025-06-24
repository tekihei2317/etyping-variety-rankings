-- Migration number: 0001 	 2025-06-24T01:32:21.782Z

-- Create table for e-typing ranking scores
CREATE TABLE ranking_scores (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fetched_at TEXT NOT NULL,        -- 取得日時 (ISO 8601 format)
    category TEXT NOT NULL,          -- 種目 (ビジネス, スタディ, ライフ, etc.)
    theme TEXT NOT NULL,             -- お題 (プレゼンの基本, 元素名, etc.)
    etyping_name TEXT NOT NULL,      -- e-typing登録名
    score INTEGER NOT NULL,          -- スコア
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(fetched_at, category, etyping_name) -- 同じ取得日・種目・登録名の組み合わせは重複を防ぐ
);

-- Create index for better query performance
CREATE INDEX idx_category ON ranking_scores(category);
CREATE INDEX idx_etyping_name ON ranking_scores(etyping_name);
CREATE INDEX idx_fetched_at ON ranking_scores(fetched_at);
