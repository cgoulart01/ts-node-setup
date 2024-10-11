module.exports = {
  preset: "ts-jest/presets/default-esm", // Configuração para TypeScript e ESM
  testEnvironment: "node", // Define o ambiente de teste
  transform: {
    "^.+\\.ts?$": "ts-jest", // Transforma arquivos .ts com ts-jest
  },
  testMatch: ["<rootDir>/**/__tests__/**/*.spec.ts"], // Padrão de arquivos de teste
  extensionsToTreatAsEsm: [".ts"], // Define arquivos .ts como ECMAScript Modules
  testPathIgnorePatterns: ["/node_modules/"], // Ignora testes em node_modules
  coverageDirectory: "./coverage", // Diretório para relatórios de cobertura de código
  coveragePathIgnorePatterns: [
    "node_modules",
    "src/database",
    "src/test",
    "src/types",
  ],
  reporters: ["default", "jest-junit"], // Reporters para exibição de resultados
  globals: {
    "ts-jest": {
      diagnostics: true, // Ativa diagnósticos de TypeScript
    },
  },
};
