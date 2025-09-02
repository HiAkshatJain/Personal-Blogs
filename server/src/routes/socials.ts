import express from 'express';
import {
  getAllSocials,
  getSocialById,
  createSocial,
  updateSocial,
  deleteSocial
} from '../controllers/socialController';
import { validateSocial } from '../middleware/validation';

const router = express.Router();

// GET /api/socials - Get all social links
router.get('/', getAllSocials);

// GET /api/socials/:id - Get single social link
router.get('/:id', getSocialById);

// POST /api/socials - Create new social link
router.post('/', validateSocial, createSocial);

// PUT /api/socials/:id - Update social link
router.put('/:id', validateSocial, updateSocial);

// DELETE /api/socials/:id - Delete social link
router.delete('/:id', deleteSocial);

export default router;