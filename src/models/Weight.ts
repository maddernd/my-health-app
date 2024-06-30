import mongoose, { Document, Schema } from 'mongoose';

export interface IWeight extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  weight: number;
  date: Date;
}

const weightSchema: Schema<IWeight> = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  weight: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const Weight = mongoose.model<IWeight>('Weight', weightSchema);
export default Weight;
