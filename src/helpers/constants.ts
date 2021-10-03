export const PROJECT_ID = 11758;

/**
 * The labels used by the group in GitLab
 */
export enum Label {
  BROWSER_STORAGE = 'Browser storage',
  HARD = 'Hard',
  DOC = 'Documentation',
  DOING = 'Doing',
  IMPORTANT = 'Important',
  API = 'API',
  POSSIBLY_IMPOSSIBLE = 'Possibly impossible',
  EASY = 'Easy',
  GOOD_FIRST = 'Good first issue',
  SET_UP = 'Set-up',
  TESTING = 'Testing',
  DEV_OPS = 'DevOps',
  PLANNING = 'Planning',
}

// Categorizing the labels

export const allLabels = Object.values(Label);

export const difficultyLabels = [
  Label.GOOD_FIRST,
  Label.EASY,
  Label.HARD,
  Label.POSSIBLY_IMPOSSIBLE,
];
export const techDescriptionLabels = [
  Label.API,
  Label.BROWSER_STORAGE,
  Label.DEV_OPS,
  Label.TESTING,
];
export const otherLabels = allLabels.filter(
  (el) => difficultyLabels.indexOf(el) == -1 && techDescriptionLabels.indexOf(el) == -1,
);
