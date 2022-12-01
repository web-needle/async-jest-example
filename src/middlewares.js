import express from 'express';
import cookieParser from 'cookie-parser';

export const errorHandler = (err, req, res, next) => {
    res.status(err.status).send(err.message);
}

let middlewares = [];

middlewares.push(
    express.json(),
    express.urlencoded({ extended: false }),
    cookieParser(),
)

export default {
    middlewares: middlewares,
    error_handlers: [
        errorHandler
    ]
}