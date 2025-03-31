import type { JestConfigWithTsJest } from 'ts-jest'

let config: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: './lib/',
  testPathIgnorePatterns: ['./lib/__tests__/data/'],
  fakeTimers: {
    enableGlobally: true,
  },
}

export default config
