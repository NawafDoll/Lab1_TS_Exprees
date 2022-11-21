import express from 'express';
import router from './router/router';
import router2  from './router/router2';
import routerBank from './router/routerBank';
import { z } from 'zod';
const app = express();
const port = 6008;
app.use(express.json());

app.use('/api/v1/movie', router);
app.use('/api/v2/student', router2);
app.use('/api/v3/bank',routerBank)

app.listen(port, () => {
  console.log(`Server is running in port http://localhost:${port}`);
});