import express from 'express';
import {
  getAllExperiences,
  getExperienceById,
  createExperience,
  updateExperience,
  deleteExperience
} from '../controllers/experienceController';
import { validateExperience } from '../middleware/validation';

const router = express.Router();

// GET /api/experiences - Get all experiences
router.get('/', getAllExperiences);

// GET /api/experiences/:id - Get single experience
router.get('/:id', getExperienceById);

// POST /api/experiences - Create new experience
router.post('/', validateExperience, createExperience);

// PUT /api/experiences/:id - Update experience
router.put('/:id', validateExperience, updateExperience);

// DELETE /api/experiences/:id - Delete experience
router.delete('/:id', deleteExperience);

export default router;