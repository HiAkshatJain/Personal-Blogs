import mongoose, { Document, Schema } from 'mongoose';

export interface INewsletter extends Document {
  email: string;
  subscribedAt: Date;
  isActive: boolean;
}

const NewsletterSchema: Schema = new Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function(v: string) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: 'Please provide a valid email address'
    }
  },
  subscribedAt: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

export default mongoose.model<INewsletter>('Newsletter', NewsletterSchema);