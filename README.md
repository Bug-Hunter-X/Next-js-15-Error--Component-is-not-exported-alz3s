# Next.js 15 - Uncommon Error: Component not exported
This repository demonstrates a common error that can occur in Next.js 15 when you import a component that is not exported correctly. The bug is caused by forgetting to add the `export` keyword before the component definition.

## Bug Description
The main file, `pages/index.js`, imports a component `MyComponent` from `components/MyComponent.js`. However, `MyComponent.js` does not export `MyComponent`, causing a runtime error.

## Solution
Adding the `export` keyword to the component in `MyComponent.js` solves the problem. This allows the component to be imported and used in other files.

## How to reproduce
1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the error in the browser console.
5. Uncomment the export statement in `components/MyComponent.js` and run the dev server again. The error should be resolved.
