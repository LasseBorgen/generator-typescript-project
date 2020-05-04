# Generator-Typescript-Project

A yeoman-generator for a quick setup of a generic Typescript NodeJS-project with my own personal preferences.

# Global dependencies

* [NodeJS](https://nodejs.org/en/)

* [Npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

* [Yeoman](https://yeoman.io/learning/)

## Installation
Install the generator globally on your system via npm.

If you need to make your own local changes, download the project anywhere on your system and link it to your global node_modules directory by running `npm link` in the project root.

## Building
Run the `npm run build` command in the project root before executing the generator.

## Executing
Run the command `yo typescript-project` anywhere on your system to initialize a project in the current working directory.

## Customizing
An optional "projectId" argument can be supplied to the above command; e.g. `yo typescript-project my-project-id`.

If projectId is not provided initially, the generator will prompt the user for one before starting the scaffolding process.

## Post conditions
After execution of the generator, the files in the `templates`-folder will be copied to the current working directory.
