# project2-it2810

## About

This website was created for visualizing data about the repository used in the development, using react with npm.
We wanted to at least include some data about commits, issues and branches.
Before running, you have to create a `.env.local` file with REACT_APP_API_ACCESS_TOKEN set to the group access token for this project in gitlab. 

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

- We used Material UI, as it makes it simpler to create a nice-looking coherent UI. It also simplifies changing the theme, which we wanted to do. We did implement most of the React components ourselves, but we tried to compose those of Material UI components. Material-UI has recently changed name to MUI as version 5 was published. However, we had to use an older version of Material-UI (version 4) to make it work with some other libraries
- For the graphs we used Devexpress graphs. This is a large and easy to use graph library with integrated TypeScript types and most of the common graphs. It also supports Animations. It made good-looking graphs and its styling is consistent with the rest of our design since it uses Material-UI. However, the version of Material-UI this library uses is old, which is the reason we have a couple of warnings in the console of the website.
- We used the context API for the settings menu. The context controls whether the setting menu overlay is visible or not. The theme provider also uses the Context API, but that is mostly already implemented by Material UI.
- The default theme is light. We use our own useLocalStorage hook to store which theme you are on, which you can change in the settings page. We also use localStorage to store which commit authors you want to see data about in the commit page.
- We use sessionStorage to store the selected paramteres of some graphs. This is used in “Average Close Time Per Issue-label” page and the "Feats vs Fixes" page.
- We used the fetch-API for the AJAX api-calls. We chose fetch over axios, as fetch never rejects the response promise object, making it easier to use for a smaller application like ours. It is also beneficial to not use more dependencies. Anyway, the group was the most familiar with fetch, which made it an easier choice for the team.
- We used the default react-viewport, as we experienced that it works well enough for our purposes.
- We used Material UI’s default method of handling media queries to alter the css based on the display width.

## Design

- The Navbar has a flexible layout, which for big screens has icons and names of the different pages as clickables, but for smaller screens it has a hamburger button with a dropdown menu to compensate for the lack of space.
- The main content of the pages are in a page container, which has a scaling size for smaller screens, and a limited width for bigger screens. This utilizes the extra space on big screens to create a more visually pleasing page, while trying to use all available space on the smaller screens
- There are three different themes, light, dark and wayTooManyColors. Light and dark are quite standard for their purpose, while wayTooManyColors is just meant to be funny.
- The home page has 3 images that scales with the width of the main content component.

## Testing

- For testing of different screen sizes we used Google Chrome’s developer tools, as they allow you to simulate a variety of screen sizes, with both desktop screens and phone screens being possible to simulate. The standard for phone testing was iPhone X, and for testing of phone landscape mode we used the pixel values of the iPhone X too. For desktop and laptop screens we used a lot of different screen sizes during development, ranging from 4k to 1080p. The goals for the testing was that all elements were visible on the different devices, and that the elements weren’t unrecognizably warped from scaling, while the general aesthetic remained the same across devices.
- We also checked the layout on different devices in firefox and safari
- For automatic testing we used Jest as the test runner because it is popular and has a simple test API.
- For snapshot testing we used enzyme to make a shallow render of the relevant components to snapshot test and then convert them to a format Jest could use. We did not use the newer react-test-renderer as we were not able to make it work with Material-UI. It is important that only appropriate components/files are snapshot tested. This means components that are used in a lot of other components, and where changing these components might break many other components. If snapshot testing is used beyond this usecase, it will only become annoying to update the snapshots of every component each time a change is made.
- For UI tests we also used enzyme. This did not work well, and we were not able to create the UI tests we wanted. This is because material-ui's enzyme support appearently is deprecated.
- We have a unit test testing one specific function that handles the processing of the data that is received from the GitLab API and turns it data that could be visualized. We consider this the most useful of the tests. They test a core functionlity that is central for the app, and that might be difficult to test manually. Automatic UI tests, however, are mostly useful to test interactions, but as these interactions might change often, the tests also have to be updated. This makes testing of the most core logic and interactions the most useful.
