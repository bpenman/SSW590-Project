// This file should set up the express server as shown in the lecture code
//run "node app.js" in terminal
import express from 'express';
import cors from 'cors';
const app = express();
import configRoutesFunction from './routes/index.js';

app.use(express.json());
app.use(cors())

configRoutesFunction(app);

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log('Your routes will be running on http://localhost:3000');
});
