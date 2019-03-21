# AJ Portfolio (Frontend)

![logo_banner](https://imgur.com/f2beX1w.png)

This repository is a part of my personal portfolio project, it is built with the separation of the frontend and backend in mind (micro services). So that i have one backend, where all the data comes from and a frontend where the user sees the data presented in a pretty and user frinely way. This way if i feel like building a new website for my portfolio, all i have to build is a new frontend and reuse the data from the backend.

## Prerequisites

### System

Software that the system requires to be able to run this repository.

- [Docker](https://www.docker.com/products/docker-desktop) - Docker is a computer program that performs operating-system-level virtualization, also known as "containerization".

- [NVM](https://github.com/creationix/nvm) - Node Version Manager - Simple bash script to manage multiple active node.js versions

- [NodeJS](https://nodejs.org/) - Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.

### Repositories

List of other repositories that you need to have up and running, to be able to run this repository without getting any errors.

- [Backend](https://github.com/AjUthaya/aj_portfolio-backend-wordpress) (aj_portfolio-backend-wordpress)

### Configuration

A list of the configuration files that you have to create, for every configuration file listed below there should a file with the suffix "\_example" before the extention. So all you have to do is copy that file and replace the values.

- src/local.json

## Run

### Development

1. Coming soon

### Production

1. Coming soon

## Test

1. Coming soon

## Application

### Linter

Coming soon

### Architecture

![application_architecture](https://imgur.com/bxhhkqt.png)

### Design

Coming soon

## Versioning

We use git for versioning. For the versions available, see the [tags on this repository](https://github.com/AjUthaya/aj_portfolio-frontend-react/tags).

### Add a new version tag

1. Update the CHANGELOG file with a new section and the "Unreleased Changes" link with the new tag version

2. Create a new tag `git tag X.X.X`

3. Push the new tag to remote `git push origin --tags`

### Add a version tag for an older commit

1. Type in `git log` in the root of the repo, to list all the commits with ID's

- Press <kbd>Q</kbd> to get out of the list view

2. Create a tag for an older commit `git tag -a X.X.X COMMIT_ID`

3. Push the tag to remote `git push origin --tags`

### Remove a version tag

1. Remove tag `git tag -d X.X.X`

2. Remove tag from remote `git push -d origin X.X.X`

## Technologies

### [ReactJS](https://reactjs.org/)

React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.

### [Redux](https://redux.js.org/)

Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark.

### [Service Worker](https://serviceworke.rs/)

A service worker is a script that your browser runs in the background, separate from a web page, opening the door to features that don't need a web page or user interaction. Today, they already include features like push notifications and background sync.

### [WebPack](https://webpack.js.org/)

Webpack is an open-source JavaScript module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset. Webpack takes modules with dependencies and generates static assets representing those modules.

### [SASS](https://sass-lang.com/)

Sass is a style sheet language initially designed by Henry Thornton and developed by Natalie Weizenbaum. After its initial versions, Weizenbaum and Chris Eppstein have continued to extend Sass with SassScript, a simple scripting language used in Sass files.

### [NPM](https://www.npmjs.com/)

NPM is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment NodeJS. It consists of a command line client, also called NPM, and an online database of public and paid-for private packages, called the NPM registry.

### [Cypress](https://www.cypress.io/)

Cypress is a next generation front end testing tool built for the modern web. We address the key pain points developers and QA engineers face when testing modern applications.

### [Sentry](https://sentry.io/)

Sentry is an open-source error tracking tool that helps you monitor and fix crashes in real time. Here we cover everything about the product, the platform integrations, and our on-premise offering.

### [Google Analytics](https://analytics.google.com/analytics/web/)

Google Analytics is a web analytics service offered by Google that tracks and reports website traffic, currently as a platform inside the Google Marketing Platform brand. Google launched the service in November 2005 after acquiring developer Urchin.

### [HotJar](https://www.hotjar.com/)

Hotjar is a new, powerful tool that reveals the online behavior and voice of your users. By combining both Analysis and Feedback tools, Hotjar gives you the 'big picture' of how to improve your site's user experience and performance/conversion rates.
