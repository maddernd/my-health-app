import { Request, Response } from 'express';
import User, { IUser } from '../models/User';
import jwt from 'jsonwebtoken';
import { Document } from 'mongoose';

interface IUserDocument extends IUser, Document {
  _id: string;
}

const generateToken = (id: string) => {
  return jwt.sign({ userId: id }, process.env.JWT_SECRET as string, {
    expiresIn: '1h',
  });
};

const registerUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  try {
    const user: IUserDocument = new User({ username, email, password }) as IUserDocument;
    await user.save();
    const token = generateToken(user._id);
    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }) as IUserDocument;
    if (user && (await user.matchPassword(password))) {
      const token = generateToken(user._id);
      res.status(200).json({ token });
    } else {
      res.status(400).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export { registerUser, loginUser };
