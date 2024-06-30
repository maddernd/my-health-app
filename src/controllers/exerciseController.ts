import { Request, Response } from 'express';
import Exercise from '../models/Exercise';

const setExerciseSchedule = async (req: Request, res: Response) => {
  const userId = req.user?._id;

  if (!userId) {
    return res.status(401).json({ message: 'Not authorized' });
  }

  const { schedule } = req.body;

  try {
    const newSchedule = new Exercise({ userId, schedule });
    await newSchedule.save();
    res.status(201).json(newSchedule);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const getExerciseSchedule = async (req: Request, res: Response) => {
  const userId = req.user?._id;

  if (!userId) {
    return res.status(401).json({ message: 'Not authorized' });
  }

  try {
    const schedule = await Exercise.findOne({ userId });
    res.status(200).json(schedule);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const updateExerciseSchedule = async (req: Request, res: Response) => {
  const userId = req.user?._id;

  if (!userId) {
    return res.status(401).json({ message: 'Not authorized' });
  }

  const { schedule } = req.body;

  try {
    const updatedSchedule = await Exercise.findOneAndUpdate(
      { userId },
      { schedule },
      { new: true }
    );
    res.status(200).json(updatedSchedule);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export { setExerciseSchedule, getExerciseSchedule, updateExerciseSchedule };
