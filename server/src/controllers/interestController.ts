import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import Interest from '../models/Interest';

// Get all interests
export const getAllInterests = async (req: Request, res: Response): Promise<void> => {
  try {
    const interests = await Interest.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      data: interests
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Get single interest by ID
export const getInterestById = async (req: Request, res: Response): Promise<void> => {
  try {
    const interest = await Interest.findById(req.params.id);
    
    if (!interest) {
      res.status(404).json({
        success: false,
        message: 'Interest not found'
      });
      return;
    }

    res.json({
      success: true,
      data: interest
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Create new interest
export const createInterest = async (req: Request, res: Response): Promise<void> => {
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

    const interest = new Interest(req.body);
    await interest.save();

    res.status(201).json({
      success: true,
      message: 'Interest created successfully',
      data: interest
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Update interest
export const updateInterest = async (req: Request, res: Response): Promise<void> => {
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

    const interest = await Interest.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!interest) {
      res.status(404).json({
        success: false,
        message: 'Interest not found'
      });
      return;
    }

    res.json({
      success: true,
      message: 'Interest updated successfully',
      data: interest
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Delete interest
export const deleteInterest = async (req: Request, res: Response): Promise<void> => {
  try {
    const interest = await Interest.findByIdAndDelete(req.params.id);

    if (!interest) {
      res.status(404).json({
        success: false,
        message: 'Interest not found'
      });
      return;
    }

    res.json({
      success: true,
      message: 'Interest deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};