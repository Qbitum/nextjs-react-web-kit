This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Setup local environment

Install bvm 0.4.4
install bit 0.2.40

In `root` directory wher package.json is located run following commands:

```
npm install
npm run start
```

Create components in bit style
`bit create react ui/button --aspect qbitum.saastack-react/envs/react-fw`

Import a bit component to this project.
`bit import qbitum.saastack-react/ui/layouts/one-col-full --skip-dependency-installation --override`

## Do not modify an impoorted component in this project

Because components are suppose to build in the [webstack repo](https://github.com/Qbitum/react-webstack) and use it all other react web applications

## API Generations

openapi-generator-cli generate -g typescript-axios --additional-properties=prependFormOrBodyParameters=true -o web-apis -i saastack_apis.yaml

## Check your changes

Open [http://localhost:4000](http://localhost:4000) with your browser to see the result.

## Adding new pages and application logic changes

All these changes should be in `src` folder and you should be able to create structural elements

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# How to write commit messages

**[TROUBLESHOOT]** If you are not getting any feedback in during commit. Pleaes run `npm install` once more after rebasing with master to install newly added packages

This repository is [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
. We are using [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) for creating human and machine readable commit message. Format of commit message is as follows

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

- _type_ (required): Describes the category of your change
  - feat: a new feature
  - fix: fixing a bug
  - refactor: A code change that neither fixes a bug nor adds a feature
  - etc..
- _scope_ (optional): Describes the module affected by your change. modules are folder specific
  - app
  - pages
  - pipes
  - modules
  - providers
  - theme
  - util
- _description_ (required): Describe what the software does after your change
- _body_ (optional): Describe additonal information about the commit
- _footer(s)_ (optional): Adding breaking change information

Exanple commit

```
// Without Scope
git commit -m "fix: Date function in utils"
// type is fix
// description is "Date function in utils"

// With Scope
git commit -m "feat(modules): Added datepicker component"
// modules is scope

// With Multiple scope
git commit -m "feat(modules,app): adding new feature page"
```

## Interactive Commit CLI

One can run following command to open `interactive tool` for adding commit message

```
git commit
```

## Quick Commits

If one needed to do quick commits without conventional commit. One can use following approaches.

```
git commit -m "temp <your message>?"
// or
git commit -m "wip <your message>?"
// or
git commit -m "tmp <your message>?"
```

NOTE: `<some text>?` is option block

Please connect with the team if face any concern

**NOTE** Check package.json :) to see other environment dependencies

# How to create a Release

There are two ways to cut a release with CHANGELOG.md and automated version bump using [Semantic Versioning](https://semver.org/)  
**NOTE** Please make sure to run release command in `master` branch only

## Automated Release without Semver

```
// Version bum will be detected based on conventional commit
npm run release

this is a test commit
