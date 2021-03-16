import mongoose, { Schema, Document } from 'mongoose';

export interface IReview extends Document {
  login: string;
  name: string;
  email: string;
  text: string;
}

const ReviewSchema = new Schema({
  login: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  text: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model<IReview>('Review', ReviewSchema);
