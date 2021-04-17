# Stencil Builder Test

This is a test project extending the stencil component boilerplate with the storybook runtime.

## How to run

To run the project:

```
npm run start
```

To view it in Storybook, in another window:

```
yarn storybook --preview-url=http://localhost:3333/ --no-manager-cache
```

## Next steps

- [ ] Currently changes to the components HMR but changes to the stories do not
- [ ] Currently the stories files are hard-coded. But we should support main.js & globs ideally
