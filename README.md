# project2-it2810

Goal of the website

- Pages for visualizing data about commits, branches, issues.
- For commits, two graphs should be shown:
  - The amount of commits per day
  - feats vs fixes
    - for the whole project and per person
- For branches
  - commits per branch in a bar chart per person
- For issues

  - avgtime per issue-label (from creation to closing)
    - parameterized by groups of labels

- What to save locally
  - theme (local storage)
  - what graph you viewed last (local storage) (redirected to the page of the graph you viewed last)
  - remembers the options on the graph (session storage)
- What to use context for
  - make the settings page a toast popup
    - the toast open/closed state is a context
