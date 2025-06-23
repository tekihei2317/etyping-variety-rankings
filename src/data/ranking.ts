import { brainRanking } from "./brain-ranking-2025-06-23";
import { businessRanking } from "./business-ranking-2025-06-23";
import { dialectRanking } from "./dialect-ranking-2025-06-23";
import { hyakuninRanking } from "./hyakunin-ranking-2025-06-23";
import { lifeRanking } from "./life-ranking-2025-06-23";
import { longRanking } from "./long-ranking-2025-06-23";
import { medicalRanking } from "./medical-ranking-2025-06-23";
import { siritoriRanking } from "./siritori-ranking-2025-06-23";
import { sportsRanking } from "./sports-ranking-2025-06-23";
import { studyRanking } from "./study-ranking-2025-06-23";
import { tenkeyRanking } from "./tenkey-ranking-2025-06-23";
import { travelRanking } from "./travel-ranking-2025-06-23";
import { whatRanking } from "./what-ranking-2025-06-23";

export const rankings = {
  brain: brainRanking,
  business: businessRanking,
  dialect: dialectRanking,
  hyakunin: hyakuninRanking,
  life: lifeRanking,
  long: longRanking,
  medical: medicalRanking,
  siritori: siritoriRanking,
  sports: sportsRanking,
  study: studyRanking,
  tenkey: tenkeyRanking,
  travel: travelRanking,
  what: whatRanking,
};

export type Rankings = typeof rankings;
