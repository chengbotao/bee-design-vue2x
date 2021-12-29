/*
 * @Description: rollup config
 * @Author: Chengbotao
 * @Date: 2021-12-29 10:01:33
 * @LastEditors: Chengbotao
 * @FilePath: \bee-design-vue2x\rollup.config.js
 */

import { resolve } from "path";
import pkg from "./package.json";
// json 解析插件
import json from "@rollup/plugin-json";
// node_modules 管理
import { nodeResolve } from "@rollup/plugin-node-resolve";
// CommonJS模块转换为ES6
import commonjs from "@rollup/plugin-commonjs";
// 别名
import alias from "@rollup/plugin-alias";
// babel
import { babel } from "@rollup/plugin-babel";
// eslint
import eslint from "@rollup/plugin-eslint";
// typescript
import typescript from "@rollup/plugin-typescript";
// Vue
import VuePlugin from "rollup-plugin-vue";
// scss
import scss from "rollup-plugin-scss";

const { version } = pkg;
const outputConf = {
  banner: `/* vue2 UI library version ${version} */`,
  footer: `/* follow me on GitHub! @chengbotao */`,
};

export default {
  input: "src/index.ts",
  output: [
    {
      file: resolve(__dirname, "dist", "bee.esm.js"),
      format: "esm",
      ...outputConf,
    },
    {
      file: resolve(__dirname, "dist", "bee.js"),
      format: "umd",
      name: "bee",
      ...outputConf,
    },
  ],
  external: ["vue"],
  plugins: [
    alias({
      customResolver: {
        extensions: [
          ".ts",
          ".tsx",
          ".vue",
          ".mjs",
          ".js",
          ".jsx",
          ".json",
          ".sass",
          ".scss",
        ],
      },
      entries: {
        src: resolve(__dirname, "src"),
      },
    }),
    nodeResolve(),
    commonjs(),
    eslint(),
    VuePlugin(),
    typescript(),
    json(),
    babel({
      babelHelpers: "runtime",
      exclude: "node_modules/**",
      extensions: [".ts", "tsx", ".js", ".jsx", ".es6", ".es", ".mjs"],
    }),
    scss({
      output: resolve(__dirname, "dist", "bees.css"),
      exclude: ["node_modules"],
    }),
  ],
};
