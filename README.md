# InterMine User Documentation

Documentation for using an InterMine webapp.

### Note on relative links

GitHub Pages adds a trailing slash when it sees the path is to a directory in the filesystem ([more info](https://stackoverflow.com/questions/33270605/github-pages-trailing-slashes)). This will cause relative links to have their origin nested by an additional level, causing them to lead to nonexistent paths. To avoid this, you should **always use absolute links** in the documentation.

# Docusaurus 2

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

This repository uses GitHub Actions to automatically deploy any changes pushed to the master branch to GitHub Pages. The website is deployed to: http://intermine.org/intermine-user-docs/

If you wish to deploy manually for some reason, you can use the below command considering you have commit access to the repository.

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```
