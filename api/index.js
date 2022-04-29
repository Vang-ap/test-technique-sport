import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();
const hostname = process.env.HOST;
const port = process.env.PORT;

app.use(cors());

app.get('/', (req,res) => {
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})
