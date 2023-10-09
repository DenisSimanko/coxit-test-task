# coxit-test-task

That's a test task for coxit company.

VueJs Developer Test
Using VueJs 3.x,ViteJs and TypeScript, develop a website to display current track data as
provided by the following json file. This file periodically updates as the radio station plays the
tracks. You will need to fetch data from the json file and update the page contents every 2
seconds.
https://onair.radioapi.io/thisisgo/go/onair.json

1. Display all the tracks in the json file, starting with the “playing” item at the top of the
   page and then the “history” items in a list below.
2. The “playing” item should show a progress bar indicating the play time of the track.
3. The “history” items should be shown in reverse chronological order. (Most recent at
   the top, oldest at the bottom)
4. For each item display the following:
   a. Title
   b. Artist
   c. Album
   d. ImageUrl (as an image)
   e. Duration
   f. StartTime (in the local time of the browser)
   How you style the page is up to you but please demonstrate a knowledge of CSS.
   Assume that this code will need to slot into a large scale application and therefore design the
   code using best practices ensuring that the components can be easily integrated into an
   existing project.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
