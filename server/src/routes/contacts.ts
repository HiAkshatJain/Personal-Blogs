import express from 'express';
import {
  getAllContacts,
  getContactById,
  createContact,
  markAsRead,
  deleteContact
} from '../controllers/contactController';
import { validateContact } from '../middleware/validation';

const router = express.Router();

// GET /api/contacts - Get all contact messages (admin)
router.get('/', getAllContacts);

// GET /api/contacts/:id - Get single contact message (admin)
router.get('/:id', getContactById);

// POST /api/contacts - Create new contact message (public)
router.post('/', validateContact, createContact);

// PATCH /api/contacts/:id/read - Mark message as read (admin)
router.patch('/:id/read', markAsRead);

// DELETE /api/contacts/:id - Delete contact message (admin)
router.delete('/:id', deleteContact);

export default router;