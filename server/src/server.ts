import express from 'express';
import fs from 'fs';
import path from 'path';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { config } from "dotenv";
import connectDB from "./config/database"
import { cloudinaryConnect } from "./config/cloudinary";
import { errorHandler, notFound } from './middleware/errorHandler';
import { seedDatabase } from './utils/seedData';
import multer from 'multer';

// Import routes
import interestRoutes from './routes/interests';
import experienceRoutes from './routes/experiences';
import socialRoutes from './routes/socials';
import contactRoutes from './routes/contacts';
import newsletterRoutes from './routes/newsletter';
import blogRoutes from './routes/blogs';

// Load environment variables from the .env file
config({
  path: "./.env", // Path to the .env file that contains environment variables
});

const app = express();

// Retrieve environment variables
const port = process.env.PORT!; // The port on which the server will run
const url = process.env.DATABASE_URL!; // The URL for connecting to the MongoDB database
const cloud_name = process.env.CLOUD_NAME!; // The Cloudinary cloud name
const key = process.env.API_KEY!; // The Cloudinary API key
const secret = process.env.API_SECRET!; // The Cloudinary API secret

// Connect to the MongoDB database using the provided URL
connectDB(url);


// Connect to Cloudinary using the specified credentials
cloudinaryConnect(cloud_name, key, secret);

// Create a logs directory if it doesn't exist
const logDirectory = path.join(process.cwd(), 'logs');
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}

// Create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(logDirectory, 'access.log'), { flags: 'a' });


// Middleware
app.use(morgan('combined', { stream: accessLogStream }));
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://perso-blogs.netlify.app'] 
    : ['http://localhost:3000', 'http://localhost:5173'],
  credentials: true
}));

app.use(morgan('combined'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
const storage = multer.memoryStorage(); // Store file in memory buffer
const upload = multer({ storage });

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'Blog API is running!',
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.use('/api/interests', interestRoutes);
app.use('/api/experiences', experienceRoutes);
app.use('/api/socials', socialRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/blogs', blogRoutes);

// // Seed database endpoint (development only)
// if (process.env.NODE_ENV === 'development') {
//   app.post('/api/seed', async (req, res) => {
//     try {
//       await seedDatabase();
//       res.json({
//         success: true,
//         message: 'Database seeded successfully!'
//       });
//     } catch (error) {
//       res.status(500).json({
//         success: false,
//         message: 'Error seeding database',
//         error: error instanceof Error ? error.message : 'Unknown error'
//       });
//     }
//   });
// }

// Error handling middleware
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
  console.log(`📊 Health check: http://localhost:${port}/health`);
  
  if (process.env.NODE_ENV === 'development') {
    console.log(`🌱 Seed database: POST http://localhost:${port}/api/seed`);
  }
});