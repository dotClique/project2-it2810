# project2-it2810
## About
This website was created for visualizing data about the repository used in the development, using react with npm and node.js.
We wanted to at least include some data about commits, issues and branches.

### Commit page
When visualizing data about commits we show the ratio between feats and fixes,
and the ratio between lines added and deleted. The former is only possible
since we use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/),
where we prefix most commits with feat: or fix:.
This data is parameterized by authors of the commits.
The authors are anonymized to preserve privacy.

### Issue page
The visualization about issues are parameterized by groups of labels. We labeled every commit by difficulty, category and other relevant grouping. The interesting part for us was how many hours we used from opening the commit, to closing it, so that is what we graphed.

### Merge request page

When it comes to merge requests, we wanted to see the quantity of commits pr. merge request. You can manually filter which merge requests you want to see.

## Technology
 - We used Material UI, as it makes it simpler to create a nice-looking coherent UI. It also simplifies changing the theme, which we wanted to do. We did implement most of the React components ourselves, but we tried to compose those of Material UI components.
 - For the graphs we used Devexpress graphs. This is a large and easy to use graph library with integrated TypeScript types and most of the common graphs. It also supports Animations.
 - We used the context API for the settings menu. The context controls whether the setting menu overlay is visible or not. The theme provider also uses the Context API, but that is mostly already implemented by Material UI.
 - The default theme is light. We use our own localstorage hook to store which theme you are on, which you can change in the settings page. We also use localstorage to store which commit authors you want to see data about in the commit page.
 - Sessionstorage is used to store the group of labels you want to display data about in the “Average Close Time Per Issue-label” page.
 - We used fetch() for the AJAX api-calls. because it always returns a promise that can be used for the data.
 - We used the default react-viewport, as we experienced that it works well enough for our purposes.
 - We used Material UI’s default method of handling media queries to alter the css based on the display width.
 - We used the built in gitlab-ci pipeline to check that pushed builds could be built, had been properly formatted and that they passed the tests we had.

## Design
 - The Navbar has a flexible layout, which for big screens has icons and names of the different pages as clickables, but for smaller screens it has a hamburger button with a dropdown menu to compensate for the lack of space.
 - The main content of the pages are in a page container, which has a scaling size for smaller screens, and a limited width for bigger screens. This utilizes the extra space on big screens to create a more visually pleasing page, while trying to use all available space on the smaller screens
 - There are three different themes, light, dark and wayTooManyColors. Light and dark are quite standard for their purpose, while wayTooManyColors is just meant to be funny.
 - The home page has 3 images that scales with the width of the main content component.

## Testing
 - For testing of different screen sizes we used Google Chrome’s developer tools, as they allow you to simulate a variety of screen sizes, with both desktop screens and phone screens being possible to simulate. The standard for phone testing was iphone x, and for testing of phone landscape mode we used the pixel values of the iphone x too. For desktop and laptop screens we used a lot of different screen sizes during development, ranging from 4k to 1080p. The goals for the testing was that all elements were visible on the different devices, and that the elements weren’t unrecognizably warped from scaling, while the general aesthetic remained the same across devices.
 - We also checked the layout on different devices in firefox and safari
 - For snapshot and unit testing the jest library was used.

