# CommitHistory

CommitHistory is an a single page application that shows my public repositories and list the commits of each one.

## Technologies

- [Ionic Framework v5](https://ionicframework.com/docs)
- [Angular v12](https://angular.io/docs)
- [TypeScript v4](https://www.typescriptlang.org/docs/)
- [GitHub API v3](https://developer.github.com/v3/)

## Pre-requisites

- Have [Node.js](https://nodejs.org/) installed on your computer
- A GitHub Account (if you want to use it with your repositories)

## Installation & Run

After download or clone this repository go to the project folder and run

```bash
npm install
```
After this run
```bash
npm start
```
The application will start and it will open a window on your browser running on http://localhost:4200

## Usage

If you want to use this with your own GitHub account, you will need to create a token:

Log in to your GitHub account and go to `Settings` > `Developer settings` > `Personal access tokens`

Press the `Generate new token` button and check the options:
- repo:status
- public_repo

NOTE: make sure to activate other options that you may need if you will integrate another functions from the GitHub API because this can't be edited later, you will need to generate a new token.

Generate the token and save it (NOTE: you can't access to it later so make sure you copy on a safe place)

Go to `src` > `app` > `services` and edit the `api.service.ts` with your GitHub user and your token, the token MUST be encoded on Base64 you can encode it [here](https://www.base64encode.org/)

```typescript
private gitOwner: string = '<YOUR_GITHUB_USER>';
private token: string = '<YOUR_ACCESS_TOKEN>';
```

And thats all!