import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from 'morgan'
import logger from './logger/app-logger'
import connectToDb from './db/connect'
import router from './routes'
import helmet from 'helmet'
import session from 'express-session'
const FileStore = require('session-file-store')(session);

logger.stream = {
    write: function(message, encoding){
        logger.info(message);
    }
};

connectToDb();

const app = express();
app.use(cors());
app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
  store: new FileStore
}));
app.use(helmet())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev", { "stream": logger.stream }));
app.use(router);


export default app;
