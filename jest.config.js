module.exports = {
  setupFilesAfterEnv: ["./scripts/setupJestEnv.js"],
  transform: {
    //  用 `vue-jest` 处理 `*.vue` 文件
    "^.+\\.vue$": "vue-jest",
    "^.+\\.jsx?$": "babel-jest", // Adding this line solved the issue
    "^.+\\.tsx?$": "ts-jest",
  },
  // support alias
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testMatch: ["**/tests/unit/**/*.[jt]s?(x)"],
};
