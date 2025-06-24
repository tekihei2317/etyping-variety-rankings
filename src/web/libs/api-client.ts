import { hc } from "hono/client";
import type { AppType } from "../../workers/index";

export const apiClient = hc<AppType>("/");
