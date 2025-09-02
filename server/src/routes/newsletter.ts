import express from 'express';
import {
  getAllSubscriptions,
  subscribe,
  unsubscribe,
  deleteSubscription
} from '../controllers/newsletterController';
import { validateNewsletter } from '../middleware/validation';

const router = express.Router();

// GET /api/newsletter - Get all subscriptions (admin)
router.get('/', getAllSubscriptions);

// POST /api/newsletter/subscribe - Subscribe to newsletter (public)
router.post('/subscribe', validateNewsletter, subscribe);

// POST /api/newsletter/unsubscribe - Unsubscribe from newsletter (public)
router.post('/unsubscribe', validateNewsletter, unsubscribe);

// DELETE /api/newsletter/:id - Delete subscription (admin)
router.delete('/:id', deleteSubscription);

export default router;