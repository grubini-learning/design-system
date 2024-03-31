# CSS Architecture

## Why do we want this?

We want too be able to import our css by default, but we want to leave it open for overriding our css variables

## Architecture checklist

- ⭐️ Organized, fixed code structure
- ⭐️ No specificity issues
- ⭐️ Codebase reflects Atomic design principles
- ⭐️ Easy to understand codebase with appropriate comments and variables
- ⭐️ Fully customizable and themeable
- ⭐️ Reusable across team and projects (CSS NPM package)

## Add

### Stylelint

1. Install

```shell
pnpm add -D stylelint stylelint-config-sass-guidelines stylelint-config-prettier stylelint-prettier prettier
```

2. Create `.stylelintrc.json`
3. Add script in `package.json`

```json
{
  "scripts": {
    "lint": "stylelint './**/*.scss'"
  }
}
```

### Husky

Automate processes

1. `pnpm add -D husky lint-staged`
2. Add husky in `package.json`
3. Add lint-staged in `package.json`

### Compile SCSS to CSS

1. Install `node-sass`
2. Configuration in `uild/scripts.js`

```javascript
const fs = require("fs");
const path = require("path");
const sass = require("node-sass");

sass.renderSync({
  data: fs.readFileSync(path.resolve("src/global.scss")).toString(),
  outputStyle: "expanded",
  outFile: "global.css",
  includePaths: [path.resolve("src")],
});
```

### Setting up Lerna

- create a `packages` folder and move the `scss` package in it.
- on the root folder run `pnpm init`
- add `lerna`, helps us publish packages, change logs
- run `pnpm lerna init`

### PNPM working with workspaces

1. create a `pnpm-workspace.yaml`

```yaml
packages:
  - "packages/*"
  - "playgrounds/*"
```

2. Include workspace in `package.json`

```json
  "dependencies": {
    "@ds.e/scss": "1.0.0",
    "@ds.e/react": "1.0.0"
  },
```

3. Hot module reload

```json
"dev": "pnpm -r --parallel dev"
```

### Adding React

- `pnpm add -D react @types/react typescript` -`pnpm add -D rollup rollup-plugin-typescript2`
