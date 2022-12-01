export default {
    bail: false,
    collectCoverage: true,
    coverageReporters: ['text', 'cobertura'],
    coverageDirectory: "./coverage/",
    coverageThreshold: {
    global: {
          statements: 95,
          branches: 90,
          functions: 95,
          lines: 95,
        },
    },
}