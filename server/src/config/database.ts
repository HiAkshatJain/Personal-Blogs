import mongoose from 'mongoose';

const connectDB = async (uri : string) => {
  try {
    const conn = await mongoose.connect(uri as string);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;
