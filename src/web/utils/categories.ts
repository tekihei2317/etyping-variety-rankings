// カテゴリIDから日本語名への変換
export function getCategoryJapaneseName(categoryId: string): string {
  const categoryMap: Record<string, string> = {
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
  return categoryMap[categoryId] || categoryId;
}

// カテゴリIDからe-typingのURLを取得
export function getCategoryUrl(categoryId: string): string {
  const categoryUrls: Record<string, string> = {
    business: "https://www.e-typing.ne.jp/roma/variety/business.asp",
    study: "https://www.e-typing.ne.jp/roma/variety/study.asp",
    life: "https://www.e-typing.ne.jp/roma/variety/life.asp",
    travel: "https://www.e-typing.ne.jp/roma/variety/travel.asp",
    sports: "https://www.e-typing.ne.jp/roma/variety/sports.asp",
    what: "https://www.e-typing.ne.jp/roma/variety/what.asp",
    brain: "https://www.e-typing.ne.jp/roma/variety/brain.asp",
    dialect: "https://www.e-typing.ne.jp/roma/variety/dialect.asp",
    long: "https://www.e-typing.ne.jp/roma/variety/long.asp",
    tenkey: "https://www.e-typing.ne.jp/roma/variety/tenkey.asp",
    hyakunin: "https://www.e-typing.ne.jp/roma/variety/hyakunin.asp",
    siritori: "https://www.e-typing.ne.jp/roma/variety/siritori.asp",
    medical: "https://www.e-typing.ne.jp/roma/variety/medical.asp",
  };
  return categoryUrls[categoryId] || "https://www.e-typing.ne.jp/";
}

// カテゴリ日本語名からIDを逆引き
export function getCategoryIdFromJapaneseName(japaneseName: string): string | null {
  const reverseMap: Record<string, string> = {
    "ビジネス": "business",
    "スタディ": "study",
    "ライフ": "life",
    "トラベル": "travel",
    "スポーツ": "sports",
    "なんだろな？": "what",
    "脳トレ": "brain",
    "方言": "dialect",
    "長文": "long",
    "テンキー": "tenkey",
    "百人一首": "hyakunin",
    "しりとり": "siritori",
    "医療介護": "medical",
  };
  return reverseMap[japaneseName] || null;
}