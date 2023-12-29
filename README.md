# async-jest-example

[![codecov](https://codecov.io/gh/trouchet/asyncere-jesture/branch/main/graph/badge.svg?token=VOQ4SD0JT7)](https://codecov.io/gh/trouchet/asyncere-jesture)

An example application for demonstrating the usage of supertest for writing unit tests for node APIs

## How to reproduce

You must follow the instructions below by shell command run `npm install && npm test`.

You will see the output below:

```
PASS  src/__test__/app.test.js
API testing
  ✓ Get all users (49 ms)
  ✓ Create a user (13 ms)
  ✓ Get user by id (8 ms)
  ✓ Update an existent user (7 ms)
  ✓ Update an inexistent user (6 ms)
  ✓ Get user which does not exists (6 ms)
  ✓ Handle error for error handler middleware (1 ms)

-----------------|---------|----------|---------|---------|-------------------
File             | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-----------------|---------|----------|---------|---------|-------------------
All files        |     100 |      100 |     100 |     100 |
 src             |     100 |      100 |     100 |     100 |
  app.js         |     100 |      100 |     100 |     100 |
  database.js    |     100 |      100 |     100 |     100 |
  middlewares.js |     100 |      100 |     100 |     100 |
 src/__test__    |     100 |      100 |     100 |     100 |
  fixtures.js    |     100 |      100 |     100 |     100 |
 src/routes      |     100 |      100 |     100 |     100 |
  controllers.js |     100 |      100 |     100 |     100 |
  routes.js      |     100 |      100 |     100 |     100 |
-----------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       7 passed, 7 total
Snapshots:   0 total
Time:        0.671 s, estimated 1 s
Ran all test suites.

```
