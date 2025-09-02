import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import Newsletter from '../models/Newsletter';

// Get all newsletter subscriptions (admin only)
export const getAllSubscriptions = async (req: Request, res: Response): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    const subscriptions = await Newsletter.find({ isActive: true })
      .sort({ subscribedAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Newsletter.countDocuments({ isActive: true });

    res.json({
      success: true,
      data: subscriptions,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Subscribe to newsletter (public endpoint)
export const subscribe = async (req: Request, res: Response): Promise<void> => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        success: false,
        message: 'Validation errors',
        errors: errors.array()
      });
      return;
    }

    const { email } = req.body;

    // Check if email already exists
    const existingSubscription = await Newsletter.findOne({ email });
    
    if (existingSubscription) {
      if (existingSubscription.isActive) {
        res.status(400).json({
          success: false,
          message: 'Email is already subscribed to the newsletter'
        });
        return;
      } else {
        // Reactivate subscription
        existingSubscription.isActive = true;
        existingSubscription.subscribedAt = new Date();
        await existingSubscription.save();

        res.json({
          success: true,
          message: 'Successfully resubscribed to the newsletter!',
          data: existingSubscription
        });
        return;
      }
    }

    const subscription = new Newsletter({ email });
    await subscription.save();

    res.status(201).json({
      success: true,
      message: 'Successfully subscribed to the newsletter!',
      data: subscription
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Unsubscribe from newsletter
export const unsubscribe = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email } = req.body;

    const subscription = await Newsletter.findOneAndUpdate(
      { email },
      { isActive: false },
      { new: true }
    );

    if (!subscription) {
      res.status(404).json({
        success: false,
        message: 'Email not found in subscription list'
      });
      return;
    }

    res.json({
      success: true,
      message: 'Successfully unsubscribed from the newsletter'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Delete subscription permanently (admin only)
export const deleteSubscription = async (req: Request, res: Response): Promise<void> => {
  try {
    const subscription = await Newsletter.findByIdAndDelete(req.params.id);

    if (!subscription) {
      res.status(404).json({
        success: false,
        message: 'Subscription not found'
      });
      return;
    }

    res.json({
      success: true,
      message: 'Subscription deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};