import express from 'express';
import {
  getAllInterests,
  getInterestById,
  createInterest,
  updateInterest,
  deleteInterest
} from '../controllers/interestController';
import { validateInterest } from '../middleware/validation';

const router = express.Router();

// GET /api/interests - Get all interests
router.get('/', getAllInterests);

// GET /api/interests/:id - Get single interest
router.get('/:id', getInterestById);

// POST /api/interests - Create new interest
router.post('/', validateInterest, createInterest);

// PUT /api/interests/:id - Update interest
router.put('/:id', validateInterest, updateInterest);

// DELETE /api/interests/:id - Delete interest
router.delete('/:id', deleteInterest);

export default router;