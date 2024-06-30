import { Request, Response } from 'express';
import Weight from '../models/Weight';

const logWeight = async (req: Request, res: Response) => {
  const userId = req.user?._id;

  if (!userId) {
    return res.status(401).json({ message: 'Not authorized' });
  }

  const { weight } = req.body;

  try {
    const newWeight = new Weight({ userId, weight });
    await newWeight.save();
    res.status(201).json(newWeight);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const getWeights = async (req: Request, res: Response) => {
  const userId = req.user?._id;

  if (!userId) {
    return res.status(401).json({ message: 'Not authorized' });
  }

  try {
    const weights = await Weight.find({ userId });
    res.status(200).json(weights);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export { logWeight, getWeights };
