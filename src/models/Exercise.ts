import mongoose, { Document, Schema } from 'mongoose';

export interface IExercise extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  schedule: {
    day: string;
    intervals: {
      time: string;
      completed: boolean;
      exerciseType: string;
    }[];
  }[];
}

const exerciseSchema: Schema<IExercise> = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  schedule: [
    {
      day: { type: String, required: true },
      intervals: [
        {
          time: { type: String, required: true },
          completed: { type: Boolean, default: false },
          exerciseType: { type: String, default: '' },
        },
      ],
    },
  ],
});

const Exercise = mongoose.model<IExercise>('Exercise', exerciseSchema);
export default Exercise;
