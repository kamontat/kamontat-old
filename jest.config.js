module.exports = {
  verbose: true,
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(spec))\\.(tsx?)$",
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/__mocks__/assets.js",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: ["node_modules/(?!(gatsby)/)"],
  globals: {
    __PATH_PREFIX__: "",
  },
  testURL: "http://localhost",
  setupFiles: ["<rootDir>/test/jest-setup.js"],
  setupFilesAfterEnv: ["<rootDir>/test/jest-setup-each.js", "jest-extended", "jest-chain"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "reports/junit",
        outputName: "unittest.xml",
      },
    ],
  ],
  collectCoverageFrom: [
    "!**/node_modules/**",
    "!src/gatsby/**/*.ts",
    "src/components/**/*.{ts,tsx}",
    "src/pages/**/*.{ts,tsx}",
    "src/templates/**/*.{ts,tsx}",
    "src/typescript/**/*.{ts,tsx}",
  ],
  coverageReporters: ["json", "lcov", "text"],
  coverageThreshold: {
    global: {
      branches: 30,
      functions: 30,
      lines: 30,
      statements: 30,
    },
  },
};
