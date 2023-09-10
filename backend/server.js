import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 5000;
import { notFound, errHandler } from './middleware/errorMiddleware.js';
const app = express();
import userRoutes from './routes/userRoutes.js';


app.use('/api/users', userRoutes);
app.get('/', (req, res) => {
    res.send('server is ready');
})

app.use(notFound);
app.use(errHandler);

app.listen(port, () => console.log(`server started at port ${port}`));