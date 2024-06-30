import { Request, Response } from 'express';
import Exercise from '../models/Exercise';

const setExerciseSchedule = async (req: Request, res: Response) => {
  const { schedule } = req.body;
  const userId = req.user._id;

  try {
    const newExercise = new Exercise({ userId, schedule });
    await newExercise.save();
    res.status(201).json(newExercise);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const getExerciseSchedule = async (req: Request, res: Response) => {
  const userId = req.user._id;

  try {
    const exercises = await Exercise.find({ userId });
    res.status(200).json(exercises);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const updateExerciseSchedule = async (req: Request, res: Response) => {
  const { schedule } = req.body;
  const userId = req.user._id;

  try {
    const updatedExercise = await Exercise.findOneAndUpdate(
      { userId },
      { schedule },
      { new: true }
    );
    res.status(200).json(updatedExercise);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export { setExerciseSchedule, getExerciseSchedule, updateExerciseSchedule };
