# async-jest-example

An example application for demonstrating the usage of supertest for writing unit tests for node api's

## How to start

You must follow the instructions below:

1. Run command `npm install`; 
2. Run command `npm tets`

You will see this output below:

```
mvp-jest@1.0.0 test
> jest --detectOpenHandles --forceExit

 PASS  __test__/app.test.js
  Api testing
    ✓ Get all users (98ms)
    ✓ Create a user (15ms)
    ✓ Get user record by id (6ms)
    ✓ Update a user record (4ms)
    ✓ Get user record which does not exists (8ms)

  console.log
    Server started at 4000

      at Server.<anonymous> (app.js:44:13)

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        0.611s, estimated 1s
```
