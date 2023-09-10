import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 5000;
import { notFound, errHandler } from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import connectDb from './config/db.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


connectDb();

app.use('/api/users', userRoutes);
app.get('/', (req, res) => {
    res.send('server is ready');
})

app.use(notFound);
app.use(errHandler);

app.listen(port, () => console.log(`server started at port ${port}`));