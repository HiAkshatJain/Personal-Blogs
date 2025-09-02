import mongoose, { Document, Schema } from 'mongoose';

export interface IInterest extends Document {
  title: string;
  description: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

const InterestSchema: Schema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
    maxlength: [500, 'Description cannot exceed 500 characters']
  }
}, {
  timestamps: true
});

export default mongoose.model<IInterest>('Interest', InterestSchema);