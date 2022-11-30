# async-jest-example

An example application for demonstrating the usage of supertest for writing unit tests for node api's

## How to start

You must follow the instructions below:

1. Run command `npm install`; 
2. Run command `npm test`

You will see this output below:

```
mvp-jest@1.0.0 test
> jest --detectOpenHandles --forceExit

GET / 200 1.186 ms - 2
POST /user 200 5.650 ms - 45
GET /user/1 200 0.349 ms - 43
PUT /user/1 200 1.284 ms - 47
GET /user/2 400 0.229 ms - 41
 PASS  __test__/app.test.js
  Api testing
    ✓ Get all users (42 ms)
    ✓ Create a user (12 ms)
    ✓ Get user record by id (8 ms)
    ✓ Update a user record (6 ms)
    ✓ Get user record which does not exists (8 ms)

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        0.611s, estimated 1s
```

