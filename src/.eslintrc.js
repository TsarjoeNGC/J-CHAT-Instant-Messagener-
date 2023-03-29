module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  plugins: ["vue"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
};

// check if eslint-plugin-vue is installed
try {
  require.resolve("eslint-plugin-vue");
  module.exports.extends.unshift("plugin:vue/vue3-essential");
} catch (error) {
  console.warn(
    "eslint-plugin-vue is not installed. Please run 'npm install eslint-plugin-vue --save-dev' to enable Vue.js linting."
  );
}