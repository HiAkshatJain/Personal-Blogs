import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import Social from '../models/Social';

// Get all social links
export const getAllSocials = async (req: Request, res: Response): Promise<void> => {
  try {
    const socials = await Social.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      data: socials
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Get single social link by ID
export const getSocialById = async (req: Request, res: Response): Promise<void> => {
  try {
    const social = await Social.findById(req.params.id);
    
    if (!social) {
      res.status(404).json({
        success: false,
        message: 'Social link not found'
      });
      return;
    }

    res.json({
      success: true,
      data: social
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Create new social link
export const createSocial = async (req: Request, res: Response): Promise<void> => {
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

    const social = new Social(req.body);
    await social.save();

    res.status(201).json({
      success: true,
      message: 'Social link created successfully',
      data: social
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Update social link
export const updateSocial = async (req: Request, res: Response): Promise<void> => {
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

    const social = await Social.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!social) {
      res.status(404).json({
        success: false,
        message: 'Social link not found'
      });
      return;
    }

    res.json({
      success: true,
      message: 'Social link updated successfully',
      data: social
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Delete social link
export const deleteSocial = async (req: Request, res: Response): Promise<void> => {
  try {
    const social = await Social.findByIdAndDelete(req.params.id);

    if (!social) {
      res.status(404).json({
        success: false,
        message: 'Social link not found'
      });
      return;
    }

    res.json({
      success: true,
      message: 'Social link deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};