import Ts from "rollup-plugin-typescript2";

export default {
  input: ["src/index.ts", "src/atoms/color/index.ts"],
  output: {
    dir: "lib",
    format: "es",
    sourcemap: true,
    preserveModules: true,
  },
  plugins: [Ts()],
  external: ["react", "react/jsx-runtime"],
};
