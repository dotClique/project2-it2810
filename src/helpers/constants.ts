export const PROJECT_ID = 11758;

/**
 * The labels used by the group in GitLab
 */
export enum LABELS {
  BROWSER_STORAGE = 'Browser storage',
  HARD = 'Hard',
  DOING = 'Doing',
  IMPORTANT = 'Important',
  API = 'API',
  POSSIBLY_IMPOSSIBLE = 'Possibly Impossible',
  EASY = 'Easy',
  GOOD_FIRST = 'Good first issue',
  SET_UP = 'Set-up',
  TESTING = 'Testing',
  DEV_OPS = 'DevOps',
  DOC = 'Documentation',
  PLANNING = 'Planning',
}

// Categorizing the labels

export const allLabels = Object.values(LABELS);

export const difficultyLabels = [
  LABELS.GOOD_FIRST,
  LABELS.EASY,
  LABELS.HARD,
  LABELS.POSSIBLY_IMPOSSIBLE,
];
export const taskDescriptionLabels = [
  LABELS.API,
  LABELS.BROWSER_STORAGE,
  LABELS.DEV_OPS,
  LABELS.DOC,
  LABELS.SET_UP,
  LABELS.TESTING,
];
export const otherLabels = allLabels.filter(
  (el) => difficultyLabels.indexOf(el) == -1 && taskDescriptionLabels.indexOf(el) == -1,
);
