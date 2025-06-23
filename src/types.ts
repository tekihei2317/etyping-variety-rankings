export interface RankingEntry {
  rank: number;
  username: string;
  score: number;
}

export interface RankingData {
  category: string;
  entries: RankingEntry[];
  fetchedAt: Date;
  totalPages?: number;
  currentPage?: number;
}

export interface VarietyCategory {
  id: string;
  name: string;
  url: string;
}

export const VARIETY_CATEGORIES: VarietyCategory[] = [
  { id: 'business', name: 'ビジネス', url: 'https://www.e-typing.ne.jp/roma/variety/business.asp' },
  { id: 'study', name: 'スタディ', url: 'https://www.e-typing.ne.jp/roma/variety/study.asp' },
  { id: 'life', name: 'ライフ', url: 'https://www.e-typing.ne.jp/roma/variety/life.asp' },
  { id: 'travel', name: 'トラベル', url: 'https://www.e-typing.ne.jp/roma/variety/travel.asp' },
  { id: 'sports', name: 'スポーツ', url: 'https://www.e-typing.ne.jp/roma/variety/sports.asp' },
  { id: 'what', name: 'なんだろな？', url: 'https://www.e-typing.ne.jp/roma/variety/what.asp' },
  { id: 'brain', name: '脳トレ', url: 'https://www.e-typing.ne.jp/roma/variety/brain.asp' },
  { id: 'dialect', name: '方言', url: 'https://www.e-typing.ne.jp/roma/variety/dialect.asp' },
  { id: 'long', name: '長文', url: 'https://www.e-typing.ne.jp/roma/variety/long.asp' },
  { id: 'tenkey', name: 'テンキー', url: 'https://www.e-typing.ne.jp/roma/variety/tenkey.asp' },
  { id: 'hyakunin', name: '百人一首', url: 'https://www.e-typing.ne.jp/roma/variety/hyakunin.asp' },
  { id: 'siritori', name: 'しりとり', url: 'https://www.e-typing.ne.jp/roma/variety/siritori.asp' },
  { id: 'medical', name: '医療介護', url: 'https://www.e-typing.ne.jp/roma/variety/medical.asp' },
];