import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';
import weightRoutes from './routes/weight';
import exerciseRoutes from './routes/exercise';
import setupSwagger from './config/swagger';

dotenv.config();

const app = express();

const corsOptions = {
  origin: '*', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(express.json());

setupSwagger(app);

app.use('/api/auth', authRoutes);
app.use('/api/weight', weightRoutes);
app.use('/api/exercise', exerciseRoutes);

export default app;
