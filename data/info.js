import { info } from "./info-generated";

export const getInfo = (slug) => info[slug] ?? null;
