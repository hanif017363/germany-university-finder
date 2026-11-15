import { courses } from "./courses-generated";

export const getCourses = (slug) => courses[slug] ?? [];
