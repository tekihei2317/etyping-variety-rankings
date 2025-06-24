import { rankings } from "../src/data/ranking";

// カテゴリの日本語名マッピング
const categoryJapaneseMap: Record<string, string> = {
  business: "ビジネス",
  study: "スタディ",
  life: "ライフ",
  travel: "トラベル",
  sports: "スポーツ",
  what: "なんだろな？",
  brain: "脳トレ",
  dialect: "方言",
  long: "長文",
  tenkey: "テンキー",
  hyakunin: "百人一首",
  siritori: "しりとり",
  medical: "医療介護",
};

interface DataKey {
  fetched_at: string;
  category: string;
  etyping_name: string;
}

interface DataEntry extends DataKey {
  score: number;
  rank: number;
}

function checkDuplicates() {
  const allEntries: DataEntry[] = [];
  const duplicateMap = new Map<string, DataEntry[]>();
  
  // 全データを収集
  for (const [categoryKey, rankingData] of Object.entries(rankings)) {
    const categoryJapanese = categoryJapaneseMap[categoryKey];
    const fetchedAt = rankingData.fetchedAt;
    
    if (!categoryJapanese) {
      console.warn(`Missing mapping for category: ${categoryKey}`);
      continue;
    }
    
    for (const entry of rankingData.entries) {
      const dataEntry: DataEntry = {
        fetched_at: fetchedAt,
        category: categoryJapanese,
        etyping_name: entry.username,
        score: entry.score,
        rank: entry.rank,
      };
      
      allEntries.push(dataEntry);
      
      // 重複キーを作成（UNIQUE制約と同じ）
      const key = `${fetchedAt}|${categoryJapanese}|${entry.username}`;
      
      if (!duplicateMap.has(key)) {
        duplicateMap.set(key, []);
      }
      duplicateMap.get(key)!.push(dataEntry);
    }
  }
  
  // 重複をチェック
  const duplicates: Array<{ key: string; entries: DataEntry[] }> = [];
  
  for (const [key, entries] of duplicateMap.entries()) {
    if (entries.length > 1) {
      duplicates.push({ key, entries });
    }
  }
  
  console.log(`総エントリ数: ${allEntries.length}`);
  console.log(`ユニークキー数: ${duplicateMap.size}`);
  console.log(`重複している組み合わせ数: ${duplicates.length}`);
  console.log("");
  
  if (duplicates.length > 0) {
    console.log("=== 重複データの詳細 ===");
    for (const duplicate of duplicates) {
      const [fetchedAt, category, etypingName] = duplicate.key.split("|");
      console.log(`\n【重複】${etypingName} (${category}) - ${duplicate.entries.length}件`);
      console.log(`取得日時: ${fetchedAt}`);
      
      for (const entry of duplicate.entries) {
        console.log(`  - ランク: ${entry.rank}, スコア: ${entry.score}`);
      }
    }
  } else {
    console.log("重複データはありません。");
  }
}

// ESM環境での実行チェック
if (import.meta.url === `file://${process.argv[1]}`) {
  checkDuplicates();
}

export { checkDuplicates };