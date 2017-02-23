require('babel-core/register');
require('babel-polyfill');
import * as express from 'express';
import {moduleRouter} from './modules/index';
import * as bodyParser from 'body-parser';

if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'localhost';
}

const app = express();
app.use(bodyParser.json());
app.use('/api/v1', moduleRouter());

app.listen(40000, () => {
    console.log('TypeScript app listening on port 40000.');
});

export default app;