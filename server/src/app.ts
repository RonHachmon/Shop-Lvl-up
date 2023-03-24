import express from 'express'
import api from './api';
import { expressErrors } from './types/express';
const app = express();

app.use(express.json());
app.use(function (req, res, next) {
  

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials',"true");

    // Pass to next layer of middleware
    next();
});

app.use('/api', api);
//express error handler TypeScript
app.use((error: expressErrors, {}, res: express.Response, {}) => {
    try {
      const { statusCode, message, validErrors } = error;
      let cleanMsg = message;
      if (message.includes(':')) {
        cleanMsg = message?.split(':')[2]?.split(' ,')[0];
      }
      return res.status(statusCode || 500).json({
        message: cleanMsg || 'Internal server error',
        validErrors: validErrors || [],
      });
    } catch (err) {
      return res.status(500);
    }
  });
  
app.listen(8080);
export default app;