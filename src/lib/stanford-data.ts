import stanfordEntries from "./stanford-entries-data.json";

export interface StanfordEntry {
  id: string;
  titleEn: string;
  titleEs: string;
  branch: string;
  era: string;
  mainPhilosophers: string[];
  mainWorks: string[];
  concepts: string[];
  philosophicalProblems: string[];
  generalLevel: number;
  summaryEs: string;
  keyTerms: { term: string; definition: string }[];
}

export function getAllEntries(): StanfordEntry[] {
  return stanfordEntries as StanfordEntry[];
}

export function getEntryById(id: string): StanfordEntry | undefined {
  return (stanfordEntries as StanfordEntry[]).find((entry) => entry.id === id);
}

export function getEntriesByBranch(branch: string): StanfordEntry[] {
  return (stanfordEntries as StanfordEntry[]).filter(
    (entry) => entry.branch.toLowerCase() === branch.toLowerCase()
  );
}

export function getEntriesByEra(era: string): StanfordEntry[] {
  return (stanfordEntries as StanfordEntry[]).filter(
    (entry) => entry.era.toLowerCase() === era.toLowerCase()
  );
}

export function getEntriesByLevel(level: number): StanfordEntry[] {
  return (stanfordEntries as StanfordEntry[]).filter(
    (entry) => entry.generalLevel === level
  );
}

export function searchEntries(query: string): StanfordEntry[] {
  const lowerQuery = query.toLowerCase();
  return (stanfordEntries as StanfordEntry[]).filter(
    (entry) =>
      entry.titleEs.toLowerCase().includes(lowerQuery) ||
      entry.titleEn.toLowerCase().includes(lowerQuery) ||
      entry.summaryEs.toLowerCase().includes(lowerQuery) ||
      entry.concepts.some((c) => c.toLowerCase().includes(lowerQuery)) ||
      entry.mainPhilosophers.some((p) => p.toLowerCase().includes(lowerQuery))
  );
}

export function getUniqueBranches(): string[] {
  const branches = new Set(
    (stanfordEntries as StanfordEntry[]).map((entry) => entry.branch)
  );
  return Array.from(branches).sort();
}

export function getUniqueEras(): string[] {
  const eras = new Set(
    (stanfordEntries as StanfordEntry[]).map((entry) => entry.era)
  );
  return Array.from(eras).sort();
}
