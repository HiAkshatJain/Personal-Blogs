import mongoose, { Document, Schema } from 'mongoose';

export interface ISocial extends Document {
  name: string;
  url: string;
  icon: string;
  color: string;
  createdAt: Date;
  updatedAt: Date;
}

const SocialSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'Social platform name is required'],
    trim: true,
    maxlength: [50, 'Name cannot exceed 50 characters'],
    unique: true
  },
  url: {
    type: String,
    required: [true, 'URL is required'],
    trim: true,
    validate: {
      validator: function(v: string) {
        return /^https?:\/\/.+/.test(v);
      },
      message: 'Please provide a valid URL'
    }
  },
  icon: {
    type: String,
    required: [true, 'Icon is required'],
    trim: true,
    maxlength: [50, 'Icon cannot exceed 50 characters']
  },
  color: {
    type: String,
    // required: [true, 'Color is required'],
    trim: true,
    validate: {
      validator: function(v: string) {
        return /^#[0-9A-F]{6}$/i.test(v);
      },
      message: 'Please provide a valid hex color code'
    }
  }
}, {
  timestamps: true
});

export default mongoose.model<ISocial>('Social', SocialSchema);