import { rankings } from "../src/data/ranking";

// カテゴリと対応するお題のマッピング（2025-06-23時点）
const categoryThemeMap: Record<string, string> = {
  business: "プレゼンの基本",
  study: "元素名",
  life: "天気のことば",
  travel: "世界遺産",
  sports: "歴代名力士",
  what: "缶コーヒーのコピー",
  brain: "なんけた1",
  dialect: "北海道",
  long: "世界の童話2",
  tenkey: "漢数字",
  hyakunin: "歌人名",
  siritori: "植物",
  medical: "医療介護関係の仕事",
};

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

interface InsertData {
  fetched_at: string;
  category: string;
  theme: string;
  etyping_name: string;
  score: number;
}

function generateInsertStatements(): string[] {
  const insertStatements: string[] = [];
  
  // 重複を排除するためのマップ（キー: fetched_at|category|etyping_name, 値: 最高スコアエントリ）
  const maxScoreMap = new Map<string, InsertData>();
  
  for (const [categoryKey, rankingData] of Object.entries(rankings)) {
    const categoryJapanese = categoryJapaneseMap[categoryKey];
    const theme = categoryThemeMap[categoryKey];
    const fetchedAt = rankingData.fetchedAt;
    
    if (!categoryJapanese || !theme) {
      console.warn(`Missing mapping for category: ${categoryKey}`);
      continue;
    }
    
    for (const entry of rankingData.entries) {
      const data: InsertData = {
        fetched_at: fetchedAt,
        category: categoryJapanese,
        theme: theme,
        etyping_name: entry.username,
        score: entry.score,
      };
      
      const key = `${fetchedAt}|${categoryJapanese}|${entry.username}`;
      const existing = maxScoreMap.get(key);
      
      // 既存データがないか、現在のスコアの方が高い場合は更新
      if (!existing || data.score > existing.score) {
        maxScoreMap.set(key, data);
      }
    }
  }
  
  // 最高スコアのデータのみからSQL文を生成
  for (const data of maxScoreMap.values()) {
    // SQLインジェクションを防ぐためシングルクォートをエスケープ
    const escapedName = data.etyping_name.replace(/'/g, "''");
    const sql = `INSERT INTO ranking_scores (fetched_at, category, theme, etyping_name, score) VALUES ('${data.fetched_at}', '${data.category}', '${data.theme}', '${escapedName}', ${data.score});`;
    insertStatements.push(sql);
  }
  
  return insertStatements;
}

function main() {
  const statements = generateInsertStatements();
  
  console.log("-- Generated INSERT statements for e-typing ranking data");
  console.log(`-- Total statements: ${statements.length}`);
  console.log("");
  
  for (const statement of statements) {
    console.log(statement);
  }
}

// ESM環境での実行チェック
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { generateInsertStatements };