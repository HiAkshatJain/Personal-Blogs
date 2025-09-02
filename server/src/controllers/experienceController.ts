import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import Experience from '../models/Experience';

// Get all experiences
export const getAllExperiences = async (req: Request, res: Response): Promise<void> => {
  try {
    const experiences = await Experience.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      data: experiences
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Get single experience by ID
export const getExperienceById = async (req: Request, res: Response): Promise<void> => {
  try {
    const experience = await Experience.findById(req.params.id);
    
    if (!experience) {
      res.status(404).json({
        success: false,
        message: 'Experience not found'
      });
      return;
    }

    res.json({
      success: true,
      data: experience
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Create new experience
export const createExperience = async (req: Request, res: Response): Promise<void> => {
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

    const experience = new Experience(req.body);
    await experience.save();

    res.status(201).json({
      success: true,
      message: 'Experience created successfully',
      data: experience
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Update experience
export const updateExperience = async (req: Request, res: Response): Promise<void> => {
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

    const experience = await Experience.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!experience) {
      res.status(404).json({
        success: false,
        message: 'Experience not found'
      });
      return;
    }

    res.json({
      success: true,
      message: 'Experience updated successfully',
      data: experience
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Delete experience
export const deleteExperience = async (req: Request, res: Response): Promise<void> => {
  try {
    const experience = await Experience.findByIdAndDelete(req.params.id);

    if (!experience) {
      res.status(404).json({
        success: false,
        message: 'Experience not found'
      });
      return;
    }

    res.json({
      success: true,
      message: 'Experience deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};