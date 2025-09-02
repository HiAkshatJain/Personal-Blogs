import mongoose, { Document, Schema } from 'mongoose';

export interface IExperience extends Document {
  title: string;
  company: string;
  duration: string;
  description: string;
  icon: string;
  createdAt: Date;
  updatedAt: Date;
}

const ExperienceSchema: Schema = new Schema({
  title: {
    type: String,
    required: [true, 'Job title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  company: {
    type: String,
    required: [true, 'Company name is required'],
    trim: true,
    maxlength: [100, 'Company name cannot exceed 100 characters']
  },
  duration: {
    type: String,
    required: [true, 'Duration is required'],
    trim: true,
    maxlength: [50, 'Duration cannot exceed 50 characters']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
    maxlength: [1000, 'Description cannot exceed 1000 characters']
  },
  icon: {
    type: String,
    required: [true, 'Icon is required'],
    trim: true,
    maxlength: [50, 'Icon cannot exceed 50 characters']
  }
}, {
  timestamps: true
});

export default mongoose.model<IExperience>('Experience', ExperienceSchema);