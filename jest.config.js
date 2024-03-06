const testMatch = [
	'**/**/*.test.ts',
	'**/**/*.test.tsx',
];

export default {
	"testEnvironment": "jsdom",
	restoreMocks: true,
	clearMocks: true,
	collectCoverage: true,
	collectCoverageFrom: ["src/**/*.ts"],
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
	testMatch,
	transform: {
        "^.+\\.tsx?$": "ts-jest"
    }
}