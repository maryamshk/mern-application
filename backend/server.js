import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const port = process.env.PORT || 5000;
import { notFound, errHandler } from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import connectDb from './config/db.js';
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());


connectDb();

app.use('/api/users', userRoutes);
if (process.env.NODE_ENV === 'production') {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, '/frontend/dist')));

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
    );
} else {
    app.get('/', (req, res) => {
        res.send('API is running....');
    });
}


app.use(notFound);
app.use(errHandler);

app.listen(port, () => console.log(`server started at port ${port}`));