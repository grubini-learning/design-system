import Fs from 'fs';
import Path from 'path';
import * as Sass from 'sass';

const getComponents = () => {
  let allComponents = [];

  const types = ["atoms", "molecules", "organisms"];

  types.forEach((type) => {
    const allFiles = Fs.readdirSync(`src/${type}`).map((file) => {
      return {
        input: `src/${type}/${file}`,
        output: `lib/${file.slice(0, -4)}css`,
      };
    });

    allComponents = [...allComponents, ...allFiles];
  });

  return allComponents;
};

const compile = (path, fileName) => {
  const result = Sass.renderSync({
    data: Fs.readFileSync(Path.resolve(path)).toString(),
    outputStyle: "expanded",
    includePaths: [Path.resolve("src")],
  });

  Fs.writeFileSync(Path.resolve(fileName), result.css.toString());
};

compile("src/global.scss", "lib/global.css");
getComponents().forEach((component) => {
  compile(component.input, component.output);
});
