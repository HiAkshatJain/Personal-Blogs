import mongoose, { Document, Schema } from 'mongoose';

export interface IBlog extends Document {
  title: string;
  image: string;
  excerpt: string;
  content: string;
  tags: string[];
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema: Schema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  image: {
    type: String,
    required: [true, 'Image URL is required'],
    trim: true,
    validate: {
      validator: function(v: string) {
        return /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/i.test(v);
      },
      message: 'Please provide a valid image URL'
    }
  },
  excerpt: {
    type: String,
    required: [true, 'Excerpt is required'],
    trim: true,
    maxlength: [300, 'Excerpt cannot exceed 300 characters']
  },
  content: {
    type: String,
    required: [true, 'Content is required'],
    trim: true
  },
  tags: [{
    type: String,
    trim: true,
    maxlength: [30, 'Tag cannot exceed 30 characters']
  }],
  isPublished: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Index for better search performance
BlogSchema.index({ title: 'text', content: 'text', tags: 'text' });

export default mongoose.model<IBlog>('Blog', BlogSchema);